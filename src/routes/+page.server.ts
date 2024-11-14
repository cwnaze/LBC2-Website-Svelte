export const ssr = false;

import { createClient } from '@supabase/supabase-js'
import { env } from '$env/dynamic/private';
import { fail, redirect, type Actions } from '@sveltejs/kit';

const url:string = String(env.SUPABASE_URL);
const key:string = String(env.SUPABASE_KEY);

export const _supabase = createClient(url, key)

/** @type {import('./$types').Actions} */

export const actions: Actions = {
    newsletter: async ({ cookies, request }) => {
        const data: FormData = await request.formData();

        const email: string = data.get('email')?.toString() ?? '';

        if(email === '') return fail(400, {email_missing: true});
        if(email.indexOf('@') === -1 || email.indexOf('.') === -1) return fail(400, {email, email_invalid: true});
        const { data: emails, error: selectError } = await _supabase
            .from('newsletter')
            .select('email')
            .eq('email', email);

        if (selectError) return fail(500, { error: selectError.message });
        if (emails.length > 0) return fail(400, { email, email_exists: true });

        const { error: insertError } = await _supabase
            .from('newsletter')
            .insert({ email });

        if (insertError) return fail(500, { error: insertError.message });
    }
}
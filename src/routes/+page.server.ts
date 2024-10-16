export const ssr = false;

import { ConnectDb } from '$lib/server/mysql.js';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { Connection } from 'mysql2/promise';

/** @type {import('./$types').Actions} */

export const actions: Actions = {
    register: async ({ cookies, request }) => {
        const data: FormData = await request.formData();

        const email: string = data.get('email')?.toString() ?? '';

        if(email === '') return fail(400, {email_missing: true});
        if(email.indexOf('@') === -1 || email.indexOf('.') === -1) return fail(400, {email, email_invalid: true});
        const db: Connection = await ConnectDb();
        const emails = await db.query("SELECT email FROM newsletter WHERE email = ?", [email]);
        if (emails[0].toString().length > 0) return fail(400, {email, email_exists: true});

        await db.query("INSERT INTO newsletter (email) VALUES (?)", [email]);
    }
}
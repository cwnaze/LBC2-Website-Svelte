// import { createClient } from '@supabase/supabase-js'
// import { env } from '$env/dynamic/private';
// import { fail, redirect, type Actions } from '@sveltejs/kit';

// const url:string = String(env.SUPABASE_URL);
// const key:string = String(env.SUPABASE_KEY);

// export const _supabase = createClient(url, key)


// /** @type {import('./$types').Actions} */

// export const actions: Actions = {
//     register: async ({ cookies, request }) => {
//         const data: FormData = await request.formData();

//         const t_name: string = data.get('team-name')?.toString() ?? '';
//         const e_level: string = data.get('experience-level')?.toString() ?? '';
//         const tl_name: string = data.get('tl-name')?.toString() ?? '';
//         const tl_school: string = data.get('tl-school')?.toString() ?? '';
//         const tl_email: string = data.get('tl-email')?.toString() ?? '';
//         const member_2: string = data.get('member-2')?.toString() ?? '';
//         const member_3: string = data.get('member-3')?.toString() ?? '';
//         const member_4: string = data.get('member-4')?.toString() ?? '';

//         if(t_name === '') return fail(400, {e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, t_name_missing: true});
        
//         const { data: advanced_teams, error: advanced_error } = await _supabase
//             .from('advanced')
//             .select('team_name')
//             .eq('team_name', t_name);
        
//         const { data: beginner_teams, error: beginner_error } = await _supabase
//             .from('beginner')
//             .select('team_name')
//             .eq('team_name', t_name);
        
//         if (advanced_error || beginner_error) {
//             return fail(500, { message: 'Database query error' });
//         }
        
//         if (advanced_teams.length > 0 || beginner_teams.length > 0) {
//             return fail(400, { t_name, e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, t_name_exists: true });
//         }
        
//         if (tl_name === '') return fail(400, { t_name, e_level, tl_school, tl_email, member_2, member_3, member_4, tl_name_missing: true });
        
//         const { data: advanced_tl, error: advanced_tl_error } = await _supabase
//             .from('advanced')
//             .select('team_lead_name')
//             .eq('team_lead_name', tl_name);
        
//         const { data: beginner_tl, error: beginner_tl_error } = await _supabase
//             .from('beginner')
//             .select('team_lead_name')
//             .eq('team_lead_name', tl_name);
        
//         if (advanced_tl_error || beginner_tl_error) {
//             return fail(500, { message: 'Database query error' });
//         }
        
//         if (advanced_tl.length > 0 || beginner_tl.length > 0) {
//             return fail(400, { t_name, e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, tl_name_exists: true });
//         }
        
//         if (tl_school === '') return fail(400, { t_name, e_level, tl_name, tl_email, member_2, member_3, member_4, tl_school_missing: true });
//         if (tl_email === '') return fail(400, { t_name, e_level, tl_name, tl_school, member_2, member_3, member_4, tl_email_missing: true });
//         if (tl_email.indexOf('@') === -1 || tl_email.indexOf('.') === -1) return fail(400, { t_name, e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, tl_email_invalid: true });
        
//         const table = e_level === 'beginner' ? 'beginner' : 'advanced';
        
//         const { error: insert_error } = await _supabase
//             .from(table)
//             .insert([
//             { team_name: t_name, team_lead_name: tl_name, team_lead_school: tl_school, team_lead_email: tl_email, member_2, member_3, member_4 }
//             ]);
        
//         if (insert_error) {
//             return fail(500, { message: 'Database insert error' });
//         }
        
//         throw redirect(302, '/sign-up/success');
//     }
// };
import { ConnectDb } from '$lib/server/mysql.js';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { Connection } from 'mysql2/promise';

/** @type {import('./$types').Actions} */

export const actions: Actions = {
    register: async ({ cookies, request }) => {
        const data: FormData = await request.formData();

        const t_name: string = data.get('team-name')?.toString() ?? '';
        const e_level: string = data.get('experience-level')?.toString() ?? '';
        const tl_name: string = data.get('tl-name')?.toString() ?? '';
        const tl_school: string = data.get('tl-school')?.toString() ?? '';
        const tl_email: string = data.get('tl-email')?.toString() ?? '';
        const member_2: string = data.get('member-2')?.toString() ?? '';
        const member_3: string = data.get('member-3')?.toString() ?? '';
        const member_4: string = data.get('member-4')?.toString() ?? '';

        const db: Connection = await ConnectDb();

        if(t_name === '') return fail(400, {e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, t_name_missing: true});
        const advanced_teams = await db.query("SELECT team_name FROM advanced WHERE team_name = ?", [t_name]);
        const beginner_teams = await db.query("SELECT team_name FROM beginner WHERE team_name = ?", [t_name]);
        if(advanced_teams[0].toString().length > 0 || beginner_teams[0].toString().length > 0) return fail(400, {t_name, e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, t_name_exists: true});
        if(tl_name === '') return fail(400, {t_name, e_level, tl_school, tl_email, member_2, member_3, member_4, tl_name_missing: true});
        const advanced_tl = await db.query("SELECT team_lead_name FROM advanced WHERE team_lead_name = ?", [tl_name]);
        const beginner_tl = await db.query("SELECT team_lead_name FROM beginner WHERE team_lead_name = ?", [tl_name]);
        if(advanced_tl[0].toString().length > 0 || beginner_tl[0].toString().length > 0) return fail(400, {t_name, e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, tl_name_exists: true});
        if(tl_school === '') return fail(400, {t_name, e_level, tl_name, tl_email, member_2, member_3, member_4, tl_school_missing: true});
        if(tl_email === '') return fail(400, {t_name, e_level, tl_name, tl_school, member_2, member_3, member_4, tl_email_missing: true});
        if(tl_email.indexOf('@') === -1 || tl_email.indexOf('.') === -1) return fail(400, {t_name, e_level, tl_name, tl_school, tl_email, member_2, member_3, member_4, tl_email_invalid: true});

        if(e_level === 'beginner') {
            await db.query("INSERT INTO beginner (team_name, team_lead_name, team_lead_school, team_lead_email, member_2, member_3, member_4) VALUES (?, ?, ?, ?, ?, ?, ?)", [t_name, tl_name, tl_school, tl_email, member_2, member_3, member_4]);
        } else {
            await db.query("INSERT INTO advanced (team_name, team_lead_name, team_lead_school, team_lead_email, member_2, member_3, member_4) VALUES (?, ?, ?, ?, ?, ?, ?)", [t_name, tl_name, tl_school, tl_email, member_2, member_3, member_4]);
        }

        throw redirect(302, '/sign-up/success');
    }
};
export const ssr = false;

import { ConnectDb } from '$lib/server/mysql.js';
import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { Connection } from 'mysql2/promise';

/** @type {import('./$types').Actions} */

export const actions: Actions = {
    register: async ({ cookies, request }) => {
        const data: FormData = await request.formData();

        const email
    }
}
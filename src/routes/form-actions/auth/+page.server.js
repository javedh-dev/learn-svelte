import { fail, redirect } from '@sveltejs/kit';
import { DB_USER, DB_PASSWORD } from '$env/static/private';

console.log('DB_USER :', DB_USER);
console.log('DB_PASSWORD :', DB_PASSWORD);

export const actions = {
	login: async ({ request, cookies, url }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			return fail(400, {
				username,
				message: 'Username and password are required'
			});
		}

		cookies.set('username', username, { path: '/', secure: false });
		throw redirect(302, url.searchParams.get('redirectTo') || '/');
		// return { message: 'Logged In!!!' };
	},
	register: async ({ request, cookies }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			return fail(400, {
				username,
				message: 'Username and password are required'
			});
		}

		cookies.set('username', username, { path: '/', secure: false });
		throw redirect(302, url.searchParams.get('redirectTo') || '/');
		// return { message: 'Registered successfully!!!' };
	}
};

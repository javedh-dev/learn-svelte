import { fail } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, cookies }) => {
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
		return { message: 'Logged In!!!' };
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
		return { message: 'Registered successfully!!!' };
	}
};

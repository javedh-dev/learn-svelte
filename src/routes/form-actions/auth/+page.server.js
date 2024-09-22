export const actions = {
	default: async ({ request, cookies }) => {
		const data = await request.formData();

		const username = data.get('username');
		const password = data.get('password');

		if (!username || !password) {
			return {
				success: false,
				message: 'Username and password are required'
			};
		}

		cookies.set('username', username, { path: '/', secure: false });
		return { message: 'Logged In!!!' };
	}
};

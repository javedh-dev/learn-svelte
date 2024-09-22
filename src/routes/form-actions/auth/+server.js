export const POST = async ({ request, cookies }) => {
	const { username, password } = await request.json();

	if (!username || !password) {
		return new Response(
			JSON.stringify({
				success: false,
				message: 'Username and password are required'
			}),
			{
				status: 400,
				headers: { 'Content-Type': 'application/json' }
			}
		);
	}

	cookies.set('username', username, { path: '/', secure: false });
	return new Response(JSON.stringify({ message: 'Logged In!!!' }), { status: 200 });
};

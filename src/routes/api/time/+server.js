export const GET = async (request) => {
	return new Response(JSON.stringify(new Date().toLocaleTimeString()));
};

export const prerender = true;
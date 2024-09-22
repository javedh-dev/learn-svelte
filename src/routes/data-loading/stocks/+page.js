export const load = async ({ fetch, depends }) => {
	const activelyTraded = await fetch('http://192.168.1.121:4000/actively-traded-stocks');
    depends('stocks:actively-traded')
	return {
		activelyTraded: await activelyTraded.json()
	};
};

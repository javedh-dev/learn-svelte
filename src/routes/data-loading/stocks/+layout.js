export const load = async ({ fetch }) => {
	const topActive = await fetch('http://192.168.1.121:4000/top-active-stock');
	const topGaining = await fetch('http://192.168.1.121:4000/top-gaining-stock');
	const topLosing = await fetch('http://192.168.1.121:4000/top-losing-stock');
	// const topActiveStock = await topActive.json();
	// const topGainingStock = await topGaining.json();
	// const topLosingStock = await topLosing.json();

	// return {
	//     topActive: topActiveStock,
	//      topGaining: topGainingStock,
	//      topLosing: topLosingStock
	// }

	return {
		topActive: await topActive.json(),
		topGaining: await topGaining.json(),
		topLosing: await topLosing.json()
	};
};

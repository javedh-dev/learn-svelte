export const load = async ({ fetch, parent }) => {
	const res = await fetch('http://192.168.1.121:4000/featured-products');
	const parentData = await parent();
	const data = await res.json();
	const notification = 'Freedom sale';
	return {
		username: parentData.username,
		featuredProducts: data,
		notification
	};
};

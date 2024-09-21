export const load = async ({ fetch, params, url, route }) => {
	console.log(url);
	console.log(route);

	const res = await fetch(`http://localhost:4000/products/${params.productId}`);
	const data = await res.json();
	return {
		product: data
	};
};

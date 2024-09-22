export const load = async ({ fetch }) => {
	const res = await fetch('http://192.168.1.121:4000/products');
	const data = await res.json();
	return {
		products: data
	};
};

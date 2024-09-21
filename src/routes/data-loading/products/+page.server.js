export const load = async ({ fetch }) => {
	const res = await fetch('http://localhost:4000/products');
	const data = await res.json();
	return {
		products: data
	};
};

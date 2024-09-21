export const load = async ({ fetch }) => {
	const res = await fetch('http://localhost:4000/products');
	const data = await res.json();
	if (res.ok) {
		return {
			products: data
		};
	} else {
		return {
			status: res.status,
			error: new Error('Could not load the data')
		};
	}
};

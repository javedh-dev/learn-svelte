export const load = async ({ fetch }) => {
	console.log('Calling +page.js');

	const res = await fetch('http://192.168.1.121:4000/products');
	const data = await res.json();
	return {
		products: data
	};
};

// export const ssr = false;
// export const csr = true;

export const prerender = true;

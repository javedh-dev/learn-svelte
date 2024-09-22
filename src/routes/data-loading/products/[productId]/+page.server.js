import { error, redirect } from '@sveltejs/kit';

export const load = async ({ fetch, params, url, route }) => {
	// console.log(url);
	// console.log(route);

	if (params.productId > 10) {
		// throw error(404, {
		// 	message: 'Product Not found!!!',
		// 	hint: 'Try a different product ID'
		// });
		throw redirect(307, '/data-loading/products');
	}

	const res = await fetch(`http://localhost:4000/products/${params.productId}`);
	const data = await res.json();
	const notification = 'Sales on select products - 50%';
	return {
		product: data,
		notification
	};
};

export const prerender = 'auto';

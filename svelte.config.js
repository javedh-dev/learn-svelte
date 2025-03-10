import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
		prerender: {
			crawl: false,
			entries: [
				'/',
				'/data-loading',
				'/data-loading/products',
				'/data-loading/products/1',
				'/data-loading/products/2'
			]
		}
	}
};

export default config;

<script>
	import { goto, preloadData } from '$app/navigation';
</script>

<a href="/data-loading/products/">Products</a>
<!-- <a href="/data-loading/products/" data-sveltekit-noscroll>Products</a> -->
<!-- <a href="/data-loading/products/" data-sveltekit-reload>Products</a> -->
<!-- <a href="/data-loading/products/" data-sveltekit-preload-data="hover">Products</a> -->
<!-- <a href="/data-loading/products/" data-sveltekit-preload-data="hover">Products</a> -->
<!-- <a href="/data-loading/products/" data-sveltekit-preload-code="viewport">Products</a> -->
<!-- <a href="/data-loading/products/" data-sveltekit-preload-code="viewport">Products</a> -->
<a href="/data-loading/stocks/">Stocks</a>

<button
	on:focus={async () => await preloadData('/data-loading/products/')}
	on:mouseover={async () => await preloadData('/data-loading/products/')}
	on:click={() => goto('/data-loading/products/')}
>
	Go to products
</button>

<script>
	// import Product from './product.svelte';
	export let data;
	const { products, Component } = data;
</script>

<h1>List of Products</h1>
<ul>
	{#each products as product}
		<Component {product} />
	{/each}
</ul>

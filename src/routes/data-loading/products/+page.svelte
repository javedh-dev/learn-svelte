<script>
	export let data;
	const { products } = data;
</script>

<h1>List of Products</h1>
<ul>
	{#each products as product}
		<li>{product.title}</li>
	{/each}
</ul>

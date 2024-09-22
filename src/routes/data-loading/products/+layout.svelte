<script>
	export let data;
	const featuredProducts = data.featuredProducts;
</script>

<slot />

<h1>Featured Products</h1>

{#each featuredProducts as product}
	<div class="featured-product">
		<a href="/data-loading/products/{product.id}">
			<h2>{product.title}</h2>
		</a>
		<p>Description: {product.description}</p>
		<p>Price: {product.price}</p>
	</div>
{/each}

<style>
	.featured-product {
		display: inline-block;
		max-width: 350px;
		border: 1px solid #ccc;
		padding: 10px;
		margin-bottom: 10px;
		margin-right: 16px;
	}
</style>

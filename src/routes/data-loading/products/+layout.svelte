<script>
	export let data;
</script>

<slot />

<h1>Featured Products for {data.username}</h1>

{#each data.featuredProducts as product}
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

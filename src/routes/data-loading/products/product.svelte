<script>
	export let product;
</script>

<li>
	<a href="/data-loading/products/{product.id}"><h3>{product.title}</h3></a>
	<p>{product.description}</p>
	<p>Price: ${product.price}</p>
</li>

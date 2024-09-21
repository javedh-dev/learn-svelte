<script>
	export let data;
	const product = data.product;
</script>

<h1>Product Details</h1>
<hr />
<h3>{product.title}</h3>
<p><strong>Description:</strong> {product.description}</p>
<p><strong>Price:</strong> ${data.product.price}</p>

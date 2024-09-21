<script>
	export let productID = 100;
</script>

<a href="/">Home</a>

<h1>Products</h1>
<ul>
	<li><a href="/routing/products/1">Product 1</a></li>
	<li><a href="/routing/products/2">Product 2</a></li>
	<li><a href="/routing/products/3">Product 3</a></li>
	<li><a href="/routing/products/{productID}">Product {productID}</a></li>
</ul>

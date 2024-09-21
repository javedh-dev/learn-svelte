<script>
	import { goto, beforeNavigate, afterNavigate } from '$app/navigation';

	const handleClick = () => {
		console.log('Placing the order...');
		goto('/products');
	};

	beforeNavigate((navigation) => {
		console.log('before navigate', navigation);
	});

	afterNavigate((navigation) => {
		console.log('after navigate', navigation);
	});
</script>

<h1>Welcome Home!</h1>

<a href="/blog">Blog</a>
<a href="/products">Products</a>

<button on:click={handleClick}>Place Order</button>

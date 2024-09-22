<script>
	import { invalidate, invalidateAll } from '$app/navigation';
	export let data;

	const refresh = () => {
		// invalidate('http://192.168.1.121:4000/actively-traded-stocks');
		// invalidate('stocks:actively-traded');
		invalidateAll();
	};
</script>

<h1>Actively Trading stocks</h1>

{#each data.activelyTraded as stock}
	<div class="stock-card">
		<h3>{stock.symbol}</h3>
		<p>Price: ${stock.price}</p>
	</div>
{/each}

<button on:click={refresh}>Refresh</button>

<style>
	.stock-card {
		display: inline-block;
		margin-right: 16px;
		border: 1px solid #ccc;
		padding: 10px;
		margin: 10px;
		width: 200px;
	}

	button {
		display: block;
		margin-top: 20px;
		margin-left: 10px;
		padding: 10px 20px;
		font-size: 16px;
		background-color: #007bff;
		color: #fff;
		border: none;
		cursor: pointer;
	}
</style>

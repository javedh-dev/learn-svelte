<script>
	export let data;
</script>

<h1>The stock exchange</h1>
<p>
	The stock exchange is a place where shares of publicly traded companies are bought and sold. It is
	a marketplace where investors can buy and sell shares of companies they believe will perform well
	in the future. The stock exchange provides a platform for companies to raise capital by issuing
	shares to the public, and for investors to make money by buying and selling those shares.
</p>

<ul>
	<li>
		<h3>Top Active : {data.topActive.symbol}</h3>
		<p>Price : ${data.topActive.price}</p>
	</li>
	<li>
		<h3>Top Gaining : {data.topGaining.symbol}</h3>
		<p>Price : ${data.topGaining.price}</p>
	</li>
	<li>
		<h3>Top Losing : {data.topLosing.symbol}</h3>
		<p>Price : ${data.topLosing.price}</p>
	</li>
</ul>

<slot />

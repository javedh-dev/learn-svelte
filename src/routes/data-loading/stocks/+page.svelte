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
	<li>Top Active : {data.topActive.symbol}</li>
	<li>Top Gaining : {data.topGaining.symbol}</li>
	<li>Top Losing : {data.topLosing.symbol}</li>
</ul>

<script>
	export let data;
	const { username } = data;
</script>

<h2>Welcome {username}</h2>

<slot />

<script>
	import { page } from '$app/stores';
	export let data;
	const { username } = data;
</script>

<a href="/data-loading">Home</a>
<h2>Welcome {username}</h2>

{#if $page.data.notification}
	<p>{$page.data.notification}</p>
{/if}

<slot />

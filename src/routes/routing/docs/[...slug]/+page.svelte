<script>
	import { page } from '$app/stores';
	const slug = $page.params.slug;

	const slugArr = slug.split('/');
</script>

<h1>
	Documentation for
	{#if slugArr.length === 1}
		Feature : {slugArr[0]}
	{:else}
		Feature : {slugArr[0]}, Concept : {slugArr[1]}
	{/if}
</h1>

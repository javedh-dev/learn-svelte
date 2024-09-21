<script>
	import { page } from '$app/stores';

	const greeetings = {
		en: 'Hello',
		ja: 'こんにちは',
		es: 'Hola'
	};
	const lang = $page.params.lang;
	const greeting = greeetings[lang != undefined ? lang : 'en'];
</script>

<h1>{greeting} world!</h1>

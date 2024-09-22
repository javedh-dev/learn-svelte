<script>
	export let data;
</script>

<h1>Today's News Articles</h1>
<hr />
<div class="article-grid">
	{#each data.newsArticles as article}
		<div class="article-card">
			<h2>{article.title}</h2>
			<p class="article-meta">
				Published on {new Date(article.date).toLocaleDateString()}
			</p>
			<p>{article.content}</p>
			<a class="read-more" href={article.url}>Read full article</a>
			<div class="border-bottom"></div>
		</div>
	{/each}
</div>

<style>
	h1 {
		text-align: center;
		margin-bottom: 30px;
		color: #333; /* Neutral color for the title */
	}

	.article-grid {
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 20px; /* Added gap between cards vertically and horizontally */
	}

	.article-card {
		background: #ffffff; /* White background for a classic look */
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
		padding: 20px;
		transition: transform 0.2s;
		position: relative;
		overflow: hidden;
		border-radius: 10px; /* Added rounded corners */
	}

	.article-card:hover {
		transform: translateY(-2px); /* Slight lift on hover */
	}

	.article-meta {
		color: #888; /* Muted color for metadata */
		color: #888;
	}

	h2 {
		margin: 0 0 15px;
		color: #222; /* Darker shade for article titles */
		color: #222;
	}

	p {
		margin: 0 0 15px;
		line-height: 1.6; /* Increased line-height for better readability */
		color: #444; /* Slightly darker color for content */
		line-height: 1.6;
		color: #444;
	}

	.read-more {
		margin-top: 10px;
		color: #007bff; /* Primary color for links */
		color: #007bff;
		font-weight: bold;
	}

	.read-more:hover {
		text-decoration: underline;
	}

	.border-bottom {
		height: 5px; /* Height of the bottom border */
		background-color: #007bff; /* Blue color for the border */
		width: 100%; /* Full width of the card */
		height: 5px;
		background-color: #007bff;
		width: 100%;

		position: absolute;
		bottom: 0;
		left: 0;
		border-radius: 0 0 10px 10px; /* Rounded corners for the bottom border */
	}
</style>

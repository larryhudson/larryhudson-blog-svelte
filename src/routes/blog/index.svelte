<script context="module">

import ClickyCard from '../../components/clicky-card.svelte'
import GridList from '../../components/grid-list.svelte'

export const prerender = true;
	
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch, page }) => {
		const res = await fetch(`/blog.json`);
	
		if (res.ok) {
			const {data} = await res.json();
	
			return {
				props: { posts: data.posts.nodes }
			};
		}
	
		const { message } = await res.json();
	
		return {
			error: new Error(message)
		};
	};
</script>

<script>
	export let posts;
    console.log(posts)
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div>
	<h1>Blog</h1>
	<GridList>
        {#each posts as post}
		<li>
			<ClickyCard body={post.title} link={`/blog/${post.slug}`} />
		</li>
        {/each}
	</GridList>
</div>

<style>
	
</style>
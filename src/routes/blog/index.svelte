<script context="module">

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
	import { scale } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	
	export let posts;
    console.log(posts)
</script>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<div>
	<h1>Blog</h1>
    <ul>
        {#each posts as post}
        <li><a href="/blog/{post.slug}">{post.title}</a></li>
        {/each}
    </ul>

</div>
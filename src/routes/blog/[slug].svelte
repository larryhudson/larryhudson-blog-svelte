<script context="module">

export const prerender = true;
	
	// see https://kit.svelte.dev/docs#loading
	export const load = async ({ fetch, page }) => {
		const res = await fetch(`/blog/${page.params.slug}.json`);
	
		if (res.ok) {
			const {data} = await res.json();
	
			return {
				props: { post: data.post }
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
	
	export let post;
    console.log(post)
</script>

<svelte:head>
	<title>{post.title}</title>
</svelte:head>

<div class="todos">
	<h1>{post.title}</h1>
    {@html post.content}
</div>
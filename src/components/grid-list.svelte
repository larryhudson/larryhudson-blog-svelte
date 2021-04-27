<script>
	export let columnSize = '250px'
</script>

<ul style="--column-size: {columnSize}">
    <slot></slot>
</ul>

<style>
    ul {
		list-style: none;
		padding: 0;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(var(--column-size, 250px), 1fr));
		gap: 1rem;
		
	}
</style>
<script>
    export let body
    export let link
</script>

<a href="{link}">
    {body}
</a>

<style>
    a {
        display: block;
        transition: 0.1s transform;
        padding: 1rem;
        border: 1px solid black;
        height: 100%;
    }

    a:hover {
        transform: scale(1.05)
    }

    a:active {
        transform: scale(0.99)  
    }
</style>
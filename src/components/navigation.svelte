<script>
    export let currentUrl = ''
    let items = [
        {
            label: 'Home',
            link: '/'
        },
        {
            label: 'Blog',
            link: '/blog/'
        }
    ]
</script>

<ul>
    {#each items as {link, label}}
        <li>
            <a href="{link}" aria-current="{currentUrl === link ? 'page' : undefined}">{label}</a>
        </li>
    {/each}
</ul>

<style>
    ul {
        list-style: none;
        padding: 0;
        display: flex;
    }

    a {
        display: block;
        padding: 1rem;
    }

    a[aria-current] {
        background-color: black;
        color: white;
    }
</style>
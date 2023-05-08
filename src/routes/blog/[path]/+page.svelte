<!-- src/routes/blog/[slug]/+page.svelte -->
<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
  
<article>
    <div class="head">
        <h1>{data.title}</h1>
        <p>Last updated: {data.date}</p>
    </div>
    <div class="article">
        <svelte:component this={data.content} />
    </div>
</article>

<style>
    article {
        padding: 0;
    }

    .head, .article {
        padding: 20px;
    }

    .head {
        background-color: rgb(28, 35, 45);
        display: flex;
        justify-content: space-between;
        border-bottom: 2px solid rgb(27, 27, 36);
        border-top-left-radius: .25rem;
        border-top-right-radius: .25rem;
    }

    .head h1 {
        margin-top: auto;
        margin-bottom: auto;
    }

    .head p {
        align-items: center;
        margin-top: auto;
        margin-bottom: auto;
    }
</style>
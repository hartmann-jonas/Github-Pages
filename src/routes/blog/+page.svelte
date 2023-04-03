<script>
    /** @type {import('./$types').PageData} */
    export let data;
</script>
  
<h1>Blog</h1>
  
<ul>
  {#each data.posts as post}
    <li>
      <a href={"/blog/"+post.path}>
        {post.meta.title}
      </a>
      <p>Published {post.meta.date}</p>
    </li>
  {/each}
</ul>

<style>
  li {
    list-style-type: disc;
    border-radius: .25rem;
    padding: 5px;
  }

  a {
    font-size: 1.8rem;
    font-weight: bold;
  }
</style>
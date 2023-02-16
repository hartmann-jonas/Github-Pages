<script>
    import "prism-themes/themes/prism-one-dark.css";
  </script>
  
  <svelte:head>
    <link rel="stylesheet" href="/pico.min.css" />
  
    <style>
      nav {
        margin-left: 10%;
        margin-right: 10%;
      }
    </style>
  </svelte:head>
  
  <main class="container">
    <nav>
      <ul>
        <li>
          <a href="/">Maja Webutveckling 2</a>
        </li>
        <li>
          <a href="/clicker">Clicker</a>
        </li>
        <li>
          <a href="/todo">Todo-List</a>
        </li>
        <li>
          <a href="/eliza">ElizaBot</a>
        </li>
        <li>
          <a href="/memory">Memory</a>
        </li>
        <li>
          <a href="/search">API Search</a>
        </li>
        <li>
          <a href="/blog">Blog</a>
        </li>
      </ul>
    </nav>
    <slot />
  </main>
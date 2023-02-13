<nav class="nav">
    <a href="/" class="start">Start</a>
    <a href="/clicker">Clicker</a>
    <a href="/todo">Todo-List</a>
    <a href="/eliza">ElizaBot</a>
    <a href="/memory">Memory</a>
    <a href="/search">API Search</a>
</nav>

<slot />

<footer>
    <p>Jonas Hartmann - 2023</p>
</footer>

<style>
    .start {
        color: black;
        font-size: 25px;
        font-weight: bold;
        text-decoration: none;
    }

    .nav {
        font-family: Arial, Helvetica, sans-serif;
        display: flex;
		min-height: 10vh;
		align-items: center;
		justify-content: space-evenly;
        background-color: rgb(239, 239, 239);
    }

    footer {
        position: absolute;
        bottom: 0;
        right: 25px;
    }
</style>
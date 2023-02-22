<script>
	import Nav from "../../components/Nav.svelte";
    import { todoStore } from "../../stores";

</script>

<Nav />

<div class="todo-list">
    <h1>TODO LIST</h1>
    {#each $todoStore as todo, index}
    <p>
        <input bind:value={$todoStore[index]} />
        <button class="delete" on:click={() => todoStore.removeItem(index)}>X</button>
    </p>
    {/each}
    <button class="add" on:click={todoStore.addItem}>ADD</button>
</div>

<style>
    * {
        font-family: Arial, Helvetica, sans-serif;
    }
    
    .todo-list {
        margin: auto;
        text-align: center;
        align-items: center;
    }

    p {
        background-color: rgb(235, 233, 231);
        width: max-content;
        margin: auto;
        padding: 20px;
        border-radius: 15px;
        margin-bottom: 10px;
    }
    
    input {
        align-items: center;
        height: 35px;
        list-style: none;
        border-radius: 5%;
        border: transparent;
        background-color: rgb(252, 252, 252);
    }

    .delete {
        background-color: red;
        text-align: center;
        margin: auto;
        border: transparent;
        height: 40px;
        aspect-ratio: 1;
        border-radius: 15%;
    }

    .add {
        background-color: blue;
        color: white;
        text-align: center;
        margin: auto;
        border: transparent;
        height: 50px;
        width: 100px;
    }
</style>
<script>
	import Nav from "../../components/Nav.svelte";

    /**
	 * @type {any[]}
	 */
     export let todos = [];
    let todoInput = '';
    let todoId = 0;

    function addTodo() {
        todos = [...todos, {id: todoId, name: todoInput, completed: false}]
        console.log(todos);
        todoInput = '';
        todoId ++;
        return todos;
    }

    function todoDelete(todo) {
        todos = todos.filter(t => t.id !== todo.id)
        console.log(todos)
    }


</script>

<Nav></Nav>

<div class="todo-list">
    <h1>Todo List</h1>
    
    <form on:submit|preventDefault={addTodo}>
        <input bind:value={todoInput} type="text" autocomplete="off">
        <button type="submit">Submit</button>
    </form>
    <ul>
        {#each todos as todo}
            <li>
                <input type="checkbox" name="markDone" id="markDone">{todo.name}<button on:click={() => todoDelete(todo)}>Delete</button>
            </li>
        {/each}
    </ul>
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
    
    ul {
        align-items: center;
        padding: 20px;
        list-style: none;
    }

    li {
        width: 60%;
        background-color: grey;
        text-align: center;
        display: flex;
        justify-content: space-between;
        margin: auto;
        padding: 10px;
        font-size: 20px;
    }
</style>
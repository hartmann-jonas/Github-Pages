import { writable } from "svelte/store";

function createTodoStore() {
    let todos = [''];
    const { subscribe, update } = writable(todos);

    return {
        subscribe,
        addItem: () => update(() => todos = [...todos, '']),
        removeItem: (index) => update(() => todos = [...todos.slice(0, index), ...todos.slice(index + 1)]),
    };
}

export const todoStore = createTodoStore();
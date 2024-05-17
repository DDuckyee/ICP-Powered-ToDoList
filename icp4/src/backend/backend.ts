import { ic, nat, nat64, Opt, Record, update } from 'azle';

type Todo = Record<{
    id: nat;
    description: string;
    completed: boolean;
}>;

let todos: Todo[] = [];

export const addTodo = update([String], nat, (description: string) => {
    const id = todos.length === 0 ? 1 : Math.max(...todos.map(todo => todo.id)) + 1;
    const newTodo: Todo = { id, description, completed: false };
    todos.push(newTodo);
    return id;
});

export const getTodos = update([], [Todo], () => {
    return todos;
});

export const toggleTodo = update([nat], Opt(Todo), (id: number) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.completed = !todo.completed;
        return todo;
    }
    return null;
});


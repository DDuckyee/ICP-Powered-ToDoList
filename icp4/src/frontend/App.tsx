import React, { useEffect, useState } from 'react';
import AddTodo from './components/AddTodo'; // 올바른 경로 확인
import TodoList from './components/TodoList'; // 올바른 경로 확인
import { Actor, HttpAgent } from '@dfinity/agent';
import { idlFactory } from '../declarations/backend'; // 올바른 경로로 수정

const agent = new HttpAgent();
const backend = Actor.createActor(idlFactory, { agent, canisterId: 'YOUR_BACKEND_CANISTER_ID' });

const App: React.FC = () => {
    const [todos, setTodos] = useState<{ id: number, description: string, completed: boolean }[]>([]);

    useEffect(() => {
        loadTodos();
    }, []);

    const loadTodos = async () => {
        const result = await backend.getTodos();
        setTodos(result);
    };

    const addTodo = async (description: string) => {
        await backend.addTodo(description);
        loadTodos();
    };

    const toggleTodo = async (id: number) => {
        await backend.toggleTodo(id);
        loadTodos();
    };

    return (
        <div>
            <h1>Todo List</h1>
            <AddTodo addTodo={addTodo} />
            <TodoList todos={todos} toggleTodo={toggleTodo} />
        </div>
    );
};

export default App;


import React from 'react';
import TodoItem from './TodoItem';

interface Props {
    todos: { id: number, description: string, completed: boolean }[];
    toggleTodo: (id: number) => void;
}

const TodoList: React.FC<Props> = ({ todos, toggleTodo }) => {
    return (
        <ul>
            {todos.map(todo => (
                <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
            ))}
        </ul>
    );
};

export default TodoList;


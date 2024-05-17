import React from 'react';

interface Props {
    todo: { id: number, description: string, completed: boolean };
    toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<Props> = ({ todo, toggleTodo }) => {
    return (
        <li onClick={() => toggleTodo(todo.id)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
            {todo.description}
        </li>
    );
};

export default TodoItem;


// src/frontend/components/AddTodo.tsx 파일이 맞는지 확인
import React, { useState } from 'react';

interface Props {
    addTodo: (description: string) => void;
}

const AddTodo: React.FC<Props> = ({ addTodo }) => {
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        addTodo(description);
        setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)} 
                placeholder="Add a new todo"
            />
            <button type="submit">Add</button>
        </form>
    );
};

export default AddTodo;


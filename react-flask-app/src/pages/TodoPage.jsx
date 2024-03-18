import React, { useEffect, useState } from 'react';
import Card from '../components/Card/Card';
import Form from '../components/Form/Form';
import { Link } from 'react-router-dom';


const TodoPage = () => {
    const [todo, setTodo] = useState([]);
    const [addTodo, setAddTodo] = useState('');

    useEffect(() => {
        fetch('https://5000-sivajisj-flaskapp-hrwuqh2doac.ws-us110.gitpod.io/api')
            .then(response => response.json())
            .then(data => setTodo(data))
            .catch(error => console.error('Error fetching todos:', error));
    }, []);
    
    const handleFormChange = (inputVal) => {
        setAddTodo(inputVal);
    };

    
    const handleFormSubmit = () => {
        fetch('https://5000-sivajisj-flaskapp-hrwuqh2doac.ws-us110.gitpod.io/api/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                content: addTodo
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error(`Failed to add todo: ${res.statusText}`);
            }
            return res.json();
        })
        .then(message => {
            console.log(message);
            // Update the todo list after adding a new todo
            setTodo([...todo, { id: message.id, content: addTodo }]);
            // Clear the input field after submission
            setAddTodo('');
        })
        .catch(error => console.error('Error adding todo:', error));
    };
    
    const LetLatestTodos = () => {
        fetch('https://5000-sivajisj-flaskapp-hrwuqh2doac.ws-us110.gitpod.io/api')
        .then(response => response.json)
        .then(data => setTodo(data))
        .catch(error => console.error('Error getting latest Todos'))

    }
    return (
        <>
         <h1>Todo List</h1>
            <Form userInp={addTodo} onFormChange={handleFormChange} onFormSubmit={handleFormSubmit} />
            <Card listOfTodos={todo} />
            
        </>
    );
};

export default TodoPage;

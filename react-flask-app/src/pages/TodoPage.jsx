import React, { useEffect, useState } from 'react'
import Card from '../components/Card/Card'

const TodoPage = () => {

    const [todo, setTodo] = useState([])

    useEffect(() => {
        fetch("/")
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => console.log(data))
            .catch(error => console.error('Error fetching data:', error)); // Handle network errors
    }, []);
    
    
   return (
    <>
    <Card/>
    </>
  )
}

export default TodoPage
import React from 'react'
import { useNavigate } from 'react-router-dom'
import TodoPage from '../../pages/TodoPage'

const Delete = ({id}) => {
    const navigate = useNavigate()

    const deleteTodo = () =>{
        fetch(`https://5000-sivajisj-flaskapp-hrwuqh2doac.ws-us110.gitpod.io/api/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json' // Specify JSON content type
            },
            body: JSON.stringify({
                id: id
            })
        }).then( res => res.json())
        .then(data => {
            console.log(data)
            navigate("/")
        })
    }
  return (
    <div className='delete-button' onClick={deleteTodo}>Delete</div>
  )
}

export default Delete
import React, { useState , useEffect} from 'react'
import { Link, useParams } from 'react-router-dom'
import Delete from '../components/Delete/Delete'

const Show = () => {
    const [todo, setTodo] = useState([])
    const {id} = useParams()
    // console.log(id)

    useEffect(() =>{
        fetch('https://5000-sivajisj-flaskapp-hrwuqh2doac.ws-us110.gitpod.io/api/'+id)
        .then(response => response.json())
        .then(data => setTodo(data))
 
    },[id])
  return (
    <div>
         
        {todo.length > 0 &&  todo.map(data=> <div key={data.id}>{data.content}</div>)}
        <Delete id={id} />
        <Link to="/"><p>Back to todos</p></Link> 
    </div>
  )
}

export default Show
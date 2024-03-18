import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ listOfTodos }) => {
  return (
    <ul>
      {listOfTodos.map(data => (
       <Link key={data.id} to={"/"+data.id}> <li  >{data.content}</li></Link> 
      ))}
    </ul>
  );
};

export default Card;

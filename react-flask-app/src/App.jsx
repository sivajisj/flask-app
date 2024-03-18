import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoPage from './pages/TodoPage'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from './components/Card/Card'
import Show from './pages/Show'

function App() {
  const [count, setCount] = useState(0)

  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<TodoPage/>} />
      <Route path="/:id" key="id" element={<Show/>} />
    </Routes>
    </BrowserRouter>
  
  )
}

export default App

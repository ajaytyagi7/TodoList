import React from 'react'
import { BrowserRouter , Routes, Route } from 'react-router-dom'
import TodoList from './TodoList'
import './App.css';


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='TodoList' element={<TodoList />} />

       
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

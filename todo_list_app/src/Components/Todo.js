import React from 'react'
import { useState } from 'react'

export default function Todo() {
    const [todo, setTodo] = useState([])
    const [inputValue , setInputValue] = useState('')

    const handleText = (e) => {
        setInputValue(e.target.value)
    }
    
   const handleAdd = () => {
    if(inputValue !== ''){ 
    setTodo([...todo, {text : inputValue , completed: false}])

    setInputValue("")
    }else{
        alert("Please add a TODO")
    }
    }

    const handleRemove = (id) => {
        const updatedTodo = todo.filter((todo, index)=> id !== index)
        setTodo(updatedTodo)
    }

    const toggleTodo = (id) => {
        const updatedTodo = todo.map((todo, index) =>
            index === id ? {...todo, completed : !todo.completed} : todo
        )

        setTodo(updatedTodo)
    }

  return (
    <>
    
    <h1 className='text-center mt-5 text-4xl'>Todo App</h1>
    <div className='flex justify-center mt-10'>
      <input className="border-solid border-2 border-slate-700 rounded-lg w-56 h-8 pl-3" type="text" onChange={handleText} value={inputValue} placeholder='Add Your Todo'/>
      <button className='outline-2 mx-3 border-blue-200 border-2 rounded-lg w-24 h-8 hover:bg-blue-300' onClick={handleAdd}>Add Todo</button>
    </div>

    {todo.map((todo , i) => {
       return <div key={i} className=' w-80 mx-auto mt-5 relative right-2 rounded flex justify-between'>
       <h1 className={`w-52 bg-slate-300 truncate rounded pl-3 ${todo.completed ? 'line-through bg-red-500' : 'hover:bg-green-300'}`} onClick={() => toggleTodo(i)}>{todo.text}</h1>
       <button className='border-2 ml-3 rounded border-slate-500 w-16 hover:bg-sky-300, hover:bg-red-300 hover:border-red-300' onClick={() => handleRemove(i)}>delete</button>
       </div>
    })}
    </>  
  )
}

import React from 'react'
import TodoTextField from './TodoTextField'

export default function Todo({ todo, toggleTodo, modifyText }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      </label>      
      <TodoTextField todo={todo} modifyText={modifyText}/>
    </div>
  )
}

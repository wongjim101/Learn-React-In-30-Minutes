import React from 'react'
import TodoTextField from './TodoTextField'

export default function TodoItem({ todo, toggleTodo, modifyText, style }) {
  function handleTodoClick() {
    toggleTodo(todo.id)
  }
  
  return (
    <div style={style}>
      <label>
        <input type="checkbox" checked={todo.complete} onChange={handleTodoClick} />
      </label>      
      <TodoTextField todo={todo} modifyText={modifyText}/>
    </div>
  )
}

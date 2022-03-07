import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos, toggleTodo, modifyText, style }) {
  
  return (
    todos.map(todo => {
      return <TodoItem key={todo.id} toggleTodo={toggleTodo} modifyText={modifyText} todo={todo} style={style} />
    })
  )
}

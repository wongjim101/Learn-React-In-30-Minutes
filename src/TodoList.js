import React from 'react'
import Todo from './Todo'

export default function TodoList({ todos, toggleTodo, modifyText }) {
  return (
    todos.map(todo => {
      return <Todo key={todo.id} toggleTodo={toggleTodo} modifyText={modifyText} todo={todo} />
    })
  )
}

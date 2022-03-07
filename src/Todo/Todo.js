import React, { useState, useRef, useEffect } from 'react';
import TodoList from './TodoList'
import uuidv4 from 'uuid/v4'

const LOCAL_STORAGE_KEY = 'todoApp.todos'

export default function Todo() {
  const [todos, setTodos] = useState([])
  const todoNameRef = useRef()

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  }, [])

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
  }, [todos])

  function toggleTodo(id) {
    const newTodos = [...todos]
    const todo = newTodos.find(todo => todo.id === id)
    todo.complete = !todo.complete
    setTodos(newTodos)
  }

  function handleAddTodo(e) {
    const name = todoNameRef.current.value
    if (name === '') return
    setTodos(prevTodos => {
      return [...prevTodos, { id: uuidv4(), name: name, complete: false}]
    })
    todoNameRef.current.value = null
  }

  function handleClearTodos() {
    const newTodos = todos.filter(todo => !todo.complete)
    setTodos(newTodos)
  }

  function handleClearAll() {
    const newTodos = []
    setTodos(newTodos)
  }

  function getCompletedTodos(){
    return todos.filter(todo => todo.complete)
  }

  function getRemainingTodos(){
    return todos.filter(todo => !todo.complete)
  } 

  function modifyText(p_todo, name){
    const filteredTodos = todos.filter(todo => todo.id !== p_todo.id)
    setTodos([...filteredTodos, { id: uuidv4(), name: name, complete: p_todo.complete}])
  }
  const divStyleStrike = {
    textDecorationLine: 'line-through'
  };
  return (
    <>
      <TodoList todos={getRemainingTodos()} toggleTodo={toggleTodo} modifyText={modifyText}/>
      <input ref={todoNameRef} type="text" onBlur={handleAddTodo} />
      <button onClick={handleClearTodos}>Clear Complete Items</button>
      <button onClick={handleClearAll}>Clear All Items</button>
      <div>{todos.filter(todo => !todo.complete).length} items left to do</div>
      <TodoList style={divStyleStrike} todos={getCompletedTodos()} toggleTodo={toggleTodo} modifyText={modifyText} />
    </>
  )
}
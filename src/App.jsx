import TodoInput from "./components/TodoInput.jsx"
import TodoList from "./components/TodoList.jsx"
import { useState, useEffect } from "react"


function App() {

const [todos, setTodos] = useState([])
const [todoValue, setTodoValue] = useState('')


function persistData(newList) {
  localStorage.setItem('todos',JSON.stringify({ todos: newList }))
}

// Function to add a new todo
function handleAddTodos(newTodo) {
  
// Check if the newTodo is empty or only contains whitespace
if (!newTodo.trim()) return;
 const newTodoList = [...todos,newTodo]
 persistData(newTodoList)
 setTodos(newTodoList) // Update the state with the new list
}

// Function to delete a todo based on its index
function handleDeleteTodo(index) {
  const newTodoList = todos.filter((todo, todoIndex) => {
    return todoIndex !== index
  })
  persistData(newTodoList)
  setTodos(newTodoList) // Update the state with the new list after deletion
}


function handleEditTodo(index) {
  const valueToBeEdited = todos[index]
  setTodoValue(valueToBeEdited)
  handleDeleteTodo(index)

}

useEffect(()=>{
  if(!localStorage) {
    return
  }

  let localTodos = localStorage.getItem('todos')
  if (!localTodos) {
    return
  }

  console.log(localTodos)
  localTodos = JSON.parse(localTodos).todos
  setTodos(localTodos)
},[])
  // Passing the handleAddTodos, handleDeleteTodo, and todos array as props to child components
  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/> 
      <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={todos}/>
    </>
  ) //Passing as an attribute prop and passing as a prop
}

export default App

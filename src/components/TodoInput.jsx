import { useState } from "react"

export default function TodoInput(props) {

    const { handleAddTodos, todoValue, setTodoValue } = props; 

    // const [todoValue, setTodoValue] = useState('');

    return (
        <header>
            <input 
                value={todoValue} 
                onChange = {(e) => {
                setTodoValue(e.target.value); // Correctly updating state
            }} 
            placeholder="Enter todo..."/>
            <button onClick={() => {
                handleAddTodos(todoValue) //Cold handle todo props with the current todovalue // Adding the current todo value
                setTodoValue('') // Reset input after adding
            } }>
                Add
                </button>
        </header>
    );
}
import React , { useState, useRef } from 'react';

export default function TodoTextField({ todo, modifyText }) {
    const inputRef = useRef()
    const [name, setName] = useState(todo.name)
    const [label, setLabel] = useState("display")
    function changeTextFieldState(){
        if (label === "modify"){
            if (inputRef.current.value != ''){
                setName(inputRef.current.value)
                modifyText(todo, inputRef.current.value)
                inputRef.current.value = ''
            }
            setLabel("display")    
        }
        else {
            setLabel("modify")
        }
    }
    function handleModifyTextClick(){
        changeTextFieldState()
    }

    if (label === "modify")
        return (
            <label>
                <input ref={inputRef} type="text" placeholder={todo.name}/>
                <button onClick={handleModifyTextClick}>Modify Item</button>
            </label>
        )
    else
        return (
            <label onClick={handleModifyTextClick}>
                {todo.name}
            </label>
        )
}

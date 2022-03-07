import React , { useState, useRef } from 'react';

export default function TodoTextField({ todo, modifyText }) {
    const inputRef = useRef()
    const [label, setLabel] = useState("display")

    function changeTextFieldState(){
        if (label === "modify"){
            if (inputRef.current.value != ''){
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
    function handleCancelModifyTextClick(){
        changeTextFieldState()
    }

    if (label === "modify")
        return (
            <label onBlur={handleModifyTextClick}>
                <input ref={inputRef} type="text" placeholder={todo.name}/>
            </label>
        )
    else
        return (
            <label onClick={handleModifyTextClick}>
                {todo.name}
            </label>
        )
}

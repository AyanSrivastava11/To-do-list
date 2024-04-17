import React from 'react'

function InputContainer({inputVal, writiTodo , addTodo}) {
  return (
    <div className="input-container">
        <input type="text" placeholder='Enter List item' value={inputVal} onChange={writiTodo}/>
        <button onClick={addTodo}>+</button>
    </div>  
)
}

export default InputContainer
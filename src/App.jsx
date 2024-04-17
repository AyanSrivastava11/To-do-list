import { useState } from "react";
import "./App.css"
import InputContainer from "./components/InputContainer";
import TodoContainer from "./components/TodoContainer";


function App(){
  const [inputVal, setInputVal] = useState(' ');
  const [todos, setTodos] = useState([]);

  function writeTodo(e){
    setInputVal(e.target.value)
  }

  function addTodo(){
    if(inputVal != ''){
      setTodos((prevTodos) => [...prevTodos , inputVal]);
      setInputVal("");

    }
  }

  function delTodo(todoIndex){
    setTodos((prevTodos) => prevTodos.filter((prevTodos, prevTodosIndex) =>{
      return prevTodosIndex!= todoIndex
    })
   )
  }

  console.log(todos);
  return(
    <div>
      <main>
        <h1>To do list</h1>
        <InputContainer inputVal={inputVal} writiTodo={writeTodo} addTodo={addTodo}/>

        <TodoContainer todos={todos} delTodo={delTodo}/>
        
      </main>
    </div>
  );
}

export default App;
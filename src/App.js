import React, { useState } from "react";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";


const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "todo 1",
      checked: true,
    },
    {
      id: 2,
      text: "todo 2",
      checked: true,
    },
    {
      id: 3,
      text: "todo 3",
      checked: false,
    }
  ])
  return(
    <TodoTemplate>
      <TodoInsert />
      <TodoList todos={ todos }/>
    </TodoTemplate>
  )
};

export default App;

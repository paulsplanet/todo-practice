import React from "react";
import TodoInsert from "./component/TodoInsert";
import TodoList from "./component/TodoList";
import TodoTemplate from "./component/TodoTemplate";

const App = () => {
  return(
    <TodoTemplate>
      <TodoInsert />
      <TodoList />
    </TodoTemplate>
  )
};

export default App;

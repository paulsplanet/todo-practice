import React from "react";
import TodoInsert from "./component/TodoInsert";
import TodoTemplate from "./component/TodoTemplate";

const App = () => {
  return(
    <TodoTemplate>
      <TodoInsert />
    </TodoTemplate>
  )
};

export default App;

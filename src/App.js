import React, { useCallback, useRef, useState } from "react";
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
  ]);

  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    }, [todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos => todos.filter(todo => todo.id !== id))
    }, [todos]
  );

  const onToggle = useCallback(
    id => {
      setTodos(todos => todos.map(todo => todo.id === id ? { ...todo, checked: !todo.checked } : todo));
    }, [todos]
  )

  return(
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={ todos } onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  )
};

export default App;

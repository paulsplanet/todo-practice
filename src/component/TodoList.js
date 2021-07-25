import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const Todobox = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

const TodoList = ({ todos }) => {
    return(
        <Todobox className="TodoList">
            {todos.map(todo => (
                <TodoListItem todo={todo} key={todo.id} />
            ))}
        </Todobox>
    )
};

export default TodoList;
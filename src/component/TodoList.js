import React from "react";
import TodoListItem from "./TodoListItem";
import styled from "styled-components";

const Todobox = styled.div`
    min-height: 320px;
    max-height: 513px;
    overflow-y: auto;
`;

const TodoList = () => {
    return(
        <Todobox className="TodoList">
            <TodoListItem />
            <TodoListItem />
        </Todobox>
    )
};

export default TodoList;
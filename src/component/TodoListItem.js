import React from "react";
import styled from "styled-components";

const TodoItem = styled.div`
    padding: 1rem;
    display: flex;
    align-items: center;
    &:nth-child(even) {
        background-color: #c7ecee;
    }
    & + & {
        border-top: 1px solid #535c68;
    }
`;

const Checkbox = styled.div`
    cursor: pointer;
    flex: 1;
    display: flex;
    align-items: center;
    
`;

const Remove = styled.div`
    display: flex;
    align-items: center;
    font-size: 1.5rem;
    color: #ff7979;
    cursor: pointer;
    &:hover {
        color: #eb4d4b;
    }
`;

const Box = styled.span`
    margin: 0 0.8rem 0 0;
`;

const TodoListItem = ({ todo }) => {
    const { text, checked } = todo;
    return (
        <TodoItem className="TodoListItem">
            <Checkbox className="checkbox">
                {!checked ? (<Box>🔲</Box>) : (<Box>✅ </Box>)}
                {checked ? (<div style={{textDecoration: "line-through"}}>{text}</div>) :
                (<div>{text}</div>)}
                
            </Checkbox>
            <Remove className="remove">✖</Remove>
        </TodoItem>
    )
}

export default TodoListItem;
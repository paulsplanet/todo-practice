import React from "react";
import styled from "styled-components";

const Insert = styled.form`
    display: flex;
    background: #495057;
    justify-content: space-between;
`;
const Input = styled.input`
    background: none;
    outline: none;
    border: none;
    width: 400px;
    padding: 0.5rem;
    font-size: 1.2rem;
    line-height: 1.5rem;
    color: white;
    &::placeholder {
        color: #dee2e6;
    }
`;

const Button = styled.button`
    background: none;
    outline: none;
    border: none;
    background: #868e96;
    padding: 0 1rem;
    font-size: 1.5rem;
    cursor: pointer;
    transition: 0.1s background ease-in;
    &:hover {
        background: #adb5bd;
    }
`;

const TodoInsert = () => {
    return(
        <Insert className="TodoInsert">
            <Input placeholder="type your todo" />
            <Button type="submit">➕</Button>
        </Insert>
    )
};

export default TodoInsert;
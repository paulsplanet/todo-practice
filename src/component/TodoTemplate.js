import React from "react";
import styled from "styled-components";

const Template = styled.div`
    width: 512px;
    margin-left: auto;
    margin-right: auto;
    margin-top: 6rem;
    border-radius: 4px;
    overflow: hidden;
`;

const Title = styled.div`
    background: #00cec9;
    color: white;
    height: 4rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Content = styled.div`
    background: #f5f6fa;
`;

const TodoTemplate = ({ children }) => {
    return(
        <Template className="TodoTemplate">
            <Title className="app-title">Todo List</Title>
            <Content className="content">{children}</Content>
        </Template>
    )
};

export default TodoTemplate;
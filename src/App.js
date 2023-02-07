import "./App.css";
import React, { useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import TodoCreate from "./components/TodoCreate";
import TodoHead from "./components/TodoHead";
// import TodoItem from "./components/TodoItem";
import TodoList from "./components/TodoList";
import TodoTemplate from "./components/TodoTemplate";

const GlobalStyle = createGlobalStyle`
  body {
    background: #BCF6FE;
    margin: 0;
    padding: 0;
    text-align: center;
  }
`;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "책읽기",
      done: true,
    },
    {
      id: 2,
      text: "저녁먹기",
      done: true,
    },
    {
      id: 3,
      text: "과제 복습하기",
      done: false,
    },
    {
      id: 4,
      text: "산책하기",
      done: false,
    },
  ]);
  const nextId = useRef(5);

  const handleSubmit = (text) => {
    const todo = {
      id: nextId.current,
      text,
      done: false,
    };
    // setTodos(...todos, todo);
    // 위에 코드로 할 경우 todos.map is not a function오류 발생
    // 중괄호로 안감싸서 그런듯...?
    setTodos(todos.concat(todo));
    nextId.current += 1;
  };

  const onRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  return (
    <>
      <div className="App">
        <GlobalStyle />
        <TodoTemplate>
          <TodoHead length={todos.length} />
          <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
          <TodoCreate onSubmit={handleSubmit} />
        </TodoTemplate>
      </div>
    </>
  );
}

export default App;

import React from "react";
import styled from "styled-components";
import TodoItem from "./TodoItem";

const TodoListBlock = styled.div`
  flex: 1;
  margin: 10px auto;

  overflow-y: auto;
  /* TodoCreate 랑 겹치지 않게 하기 위해 설정 */
  padding-bottom: 48px;

  /* padding: 10px 10px; */
  /* width: 307px;
  height: 250px; */

  /* background: gray; */ // 면적 비교하기 위해 설정
  /* justify-content: center; */
  /* align-content: center; */
`;

function TodoList({ todos }) {
  return (
    <TodoListBlock>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
      {/* <TodoItem text="책읽기" done={true} />
      <TodoItem text="저녁먹기" done={true} />
      <TodoItem text="과제 복습하기" done={false} />
      <TodoItem text="산책하기" done={false} /> */}
    </TodoListBlock>
  );
}
export default TodoList;

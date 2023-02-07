import React from "react";
import styled from "styled-components";

const TodoTemplateBlock = styled.div`
  width: 331px;
  height: 740px;

  display: flex;
  flex-direction: column;
  position: relative; /* 박스 하단에 추가 버튼을 위치 설정 */
  box-shadow: 0 0 9px 0 rgba(0, 0, 0, 0.8);
  background: #ffffff;
  border-radius: 30px;
  margin: 150px auto;

  /* padding: 0; */
  /* justify-content: center; */
  /* text-align: center; */
`;

function TodoTemplate({ children }) {
  return <TodoTemplateBlock>{children}</TodoTemplateBlock>;
}

export default TodoTemplate;

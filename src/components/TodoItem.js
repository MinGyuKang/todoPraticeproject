import React from "react";
import styled, { css } from "styled-components";
import { IoCheckmarkSharp, IoTrashOutline } from "react-icons/io5";

const Remove = styled.div`
  margin-right: 10px;
  cursor: pointer;
  font-size: 24px;
  color: #b1b9ba;
  &:hover {
    color: #939899;
  }
  visibility: hidden;

  /* display: flex;
  align-items: center;
  justify-content: center; */
`;

const TodoItemBlock = styled.div`
  display: flex; // 또 시작부분이라 다시 설정
  justify-content: center;
  align-items: center;
  background-color: #bef1f7;
  padding: 5px 0;

  // background-color 가 적용되어 있기 때문에 width,height 안해주면 크기가 그대로보임
  width: 307px;
  height: 48px;
  border-radius: 30px;
  margin-top: 20px;

  // line-height는 글자가 한 줄에서 차지하는 높이
  //line-height가 10px이라고 한다면 한 줄에서 글자가 폰트 크기를 포함하여 총 10px의 높이를 차지한다는 걸 의미. leading 영역 생각
  line-height: 100%;

  &:hover {
    ${Remove} {
      visibility: visible;
    }
  }

  /* height: 100%; */
  /* position: absolute */
`;

const CheckCircle = styled.div`
  // 안에 체크 표시 와 맞추기 위해서 display 요소들 사용. 안쓰면 중앙 정렬 안됨
  display: flex;
  justify-content: center;
  align-items: center;

  width: 36px;
  height: 36px;
  border-radius: 100%;
  border: 2px solid #939899;
  background-color: #ffffff;

  margin-left: 10px;

  cursor: pointer;
  ${(props) =>
    props.done &&
    css`
      border: 1px solid #1cfcf1; // 체크표시 있는 것들 색 변경
      color: #02bdb3;
    `}
`;

const Text = styled.div`
  flex: 1; // grow, shrink, basis 1 1 기본값
  font-size: 21px;
  color: #000000;
  ${(props) =>
    props.done &&
    css`
      color: #939899;
    `}
`;

function TodoItem({ todo }) {
  const { text, done } = todo;
  return (
    <TodoItemBlock>
      <CheckCircle done={done}>{done && <IoCheckmarkSharp />}</CheckCircle>
      <Text done={done}>{text}</Text>
      <Remove>
        <IoTrashOutline />
      </Remove>
    </TodoItemBlock>
  );
}
export default TodoItem;

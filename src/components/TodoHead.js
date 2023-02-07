import React from "react";
import styled from "styled-components";

const TodoHeadBlock = styled.div`
  padding: 36px 24px;
  border-bottom: 1px solid #939899;
  /* width: 331px;
  height: 130px; */
  /* display: flex; */ // 여기서 flex 다시 주면 가장 위에 요소가 지금 이거기 때문에 다시 저스티파이 컨텐츠 및 얼라인 콘텐츠 설정해줘야 된다. display: flex만 주면 row로 배치가 되어버림. 부모 요소꺼랑 다르게
  /* justify-content: center; */
  /* align-content: left; */
  /* margin-top: 30px; */
  /* margin: 0 auto; */
  /* flex-grow: 1; */

  h1 {
    margin: 0; // 마진 0 안주니까 위아래 마진이 생겼음? 전역으로 준 마진 0이 안먹었다.
    font-size: 36px;
    font-weight: bold; // 기본적으로 h1 줬기 때문에 font-weight이 bold로 되어 있다.
    color: #000000; // 검정
    box-shadow: 10px 10px 10px 0 rgba(0, 0, 0, 0.05);
  }

  .tasks-left {
    margin-top: 30px;
    color: #033d45;
    font-size: 16px;
    font-weight: 600;
  }
`;

function TodoHead() {
  return (
    <TodoHeadBlock>
      <h1>TO DO LIST</h1>
      <div className="tasks-left">남은 개수: 2개</div>
    </TodoHeadBlock>
  );
}
export default TodoHead;

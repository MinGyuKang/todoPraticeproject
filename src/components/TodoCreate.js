import React, { useState, useRef, useEffect } from "react";
import styled, { css } from "styled-components";
import { IoAddOutline } from "react-icons/io5";

const CircleButton = styled.button`
  &:hover {
    background-color: #000000;
  }
  &:active {
    background-color: #bef111;
  }

  display: flex; // 안에 요소 때문에 여기서도 flex 들 사용
  justify-content: center;
  align-items: center;
  position: absolute;

  font-size: 100px;
  font-weight: bold;
  border-radius: 100%;
  border: none;
  /* outline: none; */
  cursor: pointer;
  z-index: 100;

  width: 50px;
  height: 50px;
  left: 50%;
  bottom: 0%;
  background-color: #bef1f7;
  color: #ffffff;

  transition: 0.15s all ease;
  transform: translateX(-50%); // 이거까지 해줘야 X축 가운데옴.
  ${(props) =>
    props.open &&
    css`
      background: #ffffff;
      color: #bef1f7;
      &:hover {
        background: #000000;
      }
      &:active {
        background: #bef1f7;
        color: #000000;
      }
      // Y 50% 해야 걸침. bottom: 0%로 했기 때문
      transform: translate(-50%, 50%) rotate(45deg);
    `}
`;

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;

  /* flex: 1; */
  /* height: 80px; */
`;

const InsertForm = styled.form`
  /* 마진오토는 박스 안 중앙정렬 */
  /* 마진 바텀 줘버리면 폼 태그가 붕뜨기 때문에 밑에 설정해둔 radius가 위로 올라가게 된다. 따라서 padding으로 설정 */
  margin: auto;

  padding-top: 30px;
  padding-bottom: 5px;
  padding-left: 10px;
  padding-right: 10px;

  border-bottom-left-radius: 28px;
  border-bottom-right-radius: 28px;
  border-top: 1px solid #939899;

  height: 80px;
  background-color: #d4d9d6;
`;

const Input = styled.input`
  width: 100%;
  height: 60%;
  border-radius: 16px;
  font-size: 18px;
  outline: none;
  border: 1px solid #939899;

  /* margin-top: 10px;/ */
  /* 위에 form태그에서 padding으로 이미 설정해줬기 때문에 margin써도 그대로임 */
  /* margin: auto; */
  padding: 12px;
  /* 내가 생각했던 크기가 안맞으면 박스 사이징 다시 써주자 */
  box-sizing: border-box;
`;

function TodoCreate({ onSubmit }) {
  const [open, setOpen] = useState(false);

  const [content, setContent] = useState("");
  // const ref = useRef();

  const onToggle = () => setOpen(!open);

  const handleChange = (e) => {
    setContent(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (!content) return;
  //   onSubmit(content);
  //   setContent("");
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!content) return;
    onSubmit(content);
    setContent("");
  };

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm onSubmit={handleSubmit}>
            <Input
              autoFocus
              placeholder="입력 후, Enter 누르세요"
              onChange={handleChange}
              value={content}
              // onKeyPress={handleKeyPress}
              // 이거 만들어줘서 연결시켜주면 계속 e.preventDefault();에러 발생. 생성은 O. 따로 설정해줬는데도 에러 O
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      {/* CircleButton을 absolute로 위치시켰기 때문에 위치 무관 */}
      <CircleButton onClick={onToggle} open={open}>
        <IoAddOutline />
      </CircleButton>
    </>
  );
}
export default TodoCreate;

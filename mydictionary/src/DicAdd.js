import React from 'react';
import styled from 'styled-components';

import { useDispatch } from 'react-redux';
import { addListFB } from './redux/modules/dictionary';

const DicAdd = (props) => {
  const dispatch = useDispatch(); // 쓸 준비하는 것
  const input_text = React.useRef(null);
  const input_disc = React.useRef(null);
  const input_memo = React.useRef(null);

  return (
    <div>
      <ListStyle>
        <InputText>Word</InputText>
        <ItemStyle ref={input_text} placeholder="단어를 입력하세요."></ItemStyle>

        <InputText>Discription</InputText>
        <ItemStyle ref={input_disc} placeholder="뜻을 입력하세요."></ItemStyle>

        <InputText>Memo</InputText>
        <ItemStyle ref={input_memo} placeholder="메모를 입력하세요."
          style={{ height: '150px', }}
        ></ItemStyle>
      </ListStyle>

      <button onClick={() => {
        if (input_text.current.value === "" || input_disc.current.value === "") {
          alert('단어와 뜻을 모두 입력하세요.');
        } else {
          dispatch(addListFB(input_text.current.value, input_disc.current.value, input_memo.current.value));
          props.history.push("/");
        }
      }}>작성완료</button>

      <button onClick={() => {
        props.history.goBack();
      }}>뒤로가기</button>
    </div>
  );
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: #F5F5F5;
    box-sizing: border-box;
    padding: 16px;
    border-radius: 18px;
`;

const InputText = styled.span`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 5px;
    color: #343434;
`;

const ItemStyle = styled.input`
    padding: 16px;
    background-color: #fff;
    border-style: none;
    margin-bottom: 17px;
    border-radius: 8px;
`;

export default DicAdd;
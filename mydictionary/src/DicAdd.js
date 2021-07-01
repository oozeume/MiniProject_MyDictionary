import React from 'react';

import styled from 'styled-components';
import Spinner from "./Spinner";

import { faArrowLeft, faCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from 'react-redux';
import { addListFB } from './redux/modules/dictionary';

const DicAdd = (props) => {
  const dispatch = useDispatch(); // 쓸 준비하는 것
  const input_text = React.useRef(null);
  const input_disc = React.useRef(null);
  const input_memo = React.useRef(null);
  const is_loaded = useSelector(state => state.dictionary.is_loaded);

  return (
    <Parent>
      {!is_loaded ? (<Spinner />) : (
        <React.Fragment>
          <ListStyle>
            <InputText>Word</InputText>
            <ItemStyle
              ref={input_text} placeholder="단어를 입력하세요."></ItemStyle>

            <InputText>Discription</InputText>
            <ItemStyle ref={input_disc} placeholder="뜻을 입력하세요."></ItemStyle>

            <InputText>Memo</InputText>
            <ItemStyle ref={input_memo} placeholder="메모를 입력하세요."
              style={{ height: '150px', }}
            ></ItemStyle>
          </ListStyle>

          <AddBtn onClick={() => {
            if (input_text.current.value === "" || input_disc.current.value === "") {
              alert('단어와 뜻을 모두 입력하세요.');
            } else {
              dispatch(addListFB(input_text.current.value, input_disc.current.value, input_memo.current.value));
              props.history.push("/");
            }
          }}><FontAwesomeIcon icon={faCheck} color="#fff" />
          </AddBtn>

          <GoBackBtn onClick={() => {
            props.history.goBack();
          }}><FontAwesomeIcon icon={faArrowLeft} color="#fff" />
          </GoBackBtn>

        </React.Fragment>
      )}
    </Parent>
  );
}

const Parent = styled.div`
height: 600px;
max-height: 60vh;
postiion : absolute;
`;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
// height: 100%;
overflow-x: hidden;
overflow-y: auto;
background-color: #F5F5F5;
box-sizing: border-box;
border-radius: 18px;
padding: 18px 16px 80px 20px;

-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
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

const AddBtn = styled.button`
border-style: none;
background-color: #3040C4;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  opacity: 0.8;
  }
position: absolute;
bottom: 16px;
right : 16px;
`;

const GoBackBtn = styled.button`
border-style: none;
background-color: #9CA5EF;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  }
position: absolute;
bottom: 16px;
left : 16px;
`;

export default DicAdd;
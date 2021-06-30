import React from 'react';
import styled from 'styled-components';

import { faTimes, faArrowLeft, faBookmark, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { updateListFB, deleteListFB } from "./redux/modules/dictionary";

import Collect from './Collect';


const Detail = (props) => {
  const dispatch = useDispatch();

  const dic_list = useSelector(state => state.dictionary.list);
  console.log(dic_list);

  let dic_index = parseInt(props.match.params.index);

  return (
    <Wrapper>
      <Parent>
        <ListStyle>
          <InputText>Word</InputText>
          {dic_list[dic_index] && <WordText>{dic_list[dic_index].text}</WordText>} {/* 조건부렌더링 */}

          <InputText>Discription</InputText>
          {dic_list[dic_index] && <DiscText>{dic_list[dic_index].disc}</DiscText>}

          <InputText>Memo</InputText>
          {dic_list[dic_index] && <MemoText>{dic_list[dic_index].memo}</MemoText>}
        </ListStyle>

        <GoBackBtn onClick={() => {
          props.history.goBack();
        }}><FontAwesomeIcon icon={faArrowLeft} color="#fff" />
        </GoBackBtn>

        <DeleteBtn onClick={() => {
          dispatch(deleteListFB(dic_index));
          props.history.goBack();
        }}><FontAwesomeIcon icon={faTimes} color="#D6D6D6" size="2x" />
        </DeleteBtn>

        <BookmarkBtn onClick={() => {
          dispatch(updateListFB(dic_index));
          props.history.goBack();
        }} ><FontAwesomeIcon icon={faBookmark} color="#fff" /></BookmarkBtn>

      </Parent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
postiion : absolute;

`;

const Parent = styled.div`
height: 400px;
max-height: 60vh;
postiion : absolute;
`;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 100%;
background-color: #F5F5F5;
box-sizing: border-box;
padding: 18px 16px 80px 20px;
border-radius: 18px;

overflow-x: hidden;
// overflow-y: auto;
-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`;

const InputText = styled.span`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 7px;
    color: #8F8F8F;
`;

const WordText = styled.h1`
    font-size: 23px;
    font-weight: 500;
    margin: 0 0 35px 0;
    line-height: 0.8em;
    color: #343434;
`;

const DiscText = styled.h2`
    font-size: 18px;
    line-height : 1.3;
    font-weight: 400;
    margin: 0 0 35px 0;
    color: #343434;
`;

const MemoText = styled.p`
    font-size: 14px;
    font-weight: 400px;
    margin: 0 0 20px 0;
    color: #343434;
`;

const BookmarkBtn = styled.button`
border-style: none;
background-color: #3040C4;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  }
position: absolute;
bottom: 16px;
right : 16px;
`;

const DeleteBtn = styled.button`
border-style: none;
background-color: transparent;
height: 45px;
width: 45px;
margin-right: 5px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  }
position: absolute;
top: 90px;
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

export default Detail;

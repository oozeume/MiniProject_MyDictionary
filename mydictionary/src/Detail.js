import React from 'react';
import styled from 'styled-components';
import Spinner from "./Spinner";

import { faTimes, faArrowLeft, faBookmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useDispatch, useSelector } from "react-redux";
import { updateListFB, deleteListFB } from "./redux/modules/dictionary";

const Detail = (props) => {
  const dispatch = useDispatch();
  const is_loaded = useSelector(state => state.dictionary.is_loaded);

  const dic_list = useSelector(state => state.dictionary.list);
  console.log(dic_list);

  let dic_index = parseInt(props.match.params.index);

  return (
    <Wrapper>
      <Parent>
        {!is_loaded ? (<Spinner />) : (
          <React.Fragment>
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
            }} ><FontAwesomeIcon icon={faBookmark} color="#fff"
              /></BookmarkBtn>
          </React.Fragment>
        )}
      </Parent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
// postiion : absolute;
`;

const Parent = styled.div`
height: 600px;
max-height: 60vh;
postiion : absolute;
`;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
height: 494px;
overflow-x: hidden;
overflow-y: auto;
background-color: #F5F5F5;
box-sizing: border-box;
padding: 22px 16px 30px 20px;
border-radius: 18px;

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
    overflow-x: hidden;
    overflow-y: auto;

    -ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`;

const BookmarkBtn = styled.button`
border-style: none;
background-color: #3040C4;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  opacity: 0.8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.15),
  inset 0px 1px 0px rgba(255, 255, 255, 0.1);
transition: background-color 100ms ease-in, box-shadow 100ms ease-in;
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
top: 100px;
right : 20px;
&:hover{
  box-shadow: 0px 3px 4px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.1),
    inset 0px 1px 0px rgba(200, 200, 200, 0.1);
  transition: background-color 100ms ease-in, box-shadow 100ms ease-in;
}
`;

const GoBackBtn = styled.button`
border-style: none;
background-color: #9CA5EF;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.15), 0px 1px 3px rgba(0, 0, 0, 0.15),
  inset 0px 1px 0px rgba(255, 255, 255, 0.1);
transition: background-color 100ms ease-in, box-shadow 100ms ease-in;
  }
position: absolute;
bottom: 16px;
left : 16px;
`;

export default Detail;

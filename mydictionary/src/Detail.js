import React from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from "react-redux";
import { updateListFB, deleteListFB } from "./redux/modules/dictionary";

import Collect from './Collect';


const Detail = (props) => {
    const dispatch = useDispatch();

    const dic_list = useSelector(state => state.dictionary.list);
    console.log(dic_list);

    let dic_index = parseInt(props.match.params.index);

    return (
        <div>
            <ListStyle>
                <InputText>Word</InputText>
                {dic_list[dic_index] && <WordText>{dic_list[dic_index].text}</WordText>} {/* 조건부렌더링 */}

                <InputText>Discription</InputText>
                {dic_list[dic_index] && <DiscText>{dic_list[dic_index].disc}</DiscText>}

                <InputText>Memo</InputText>
                {dic_list[dic_index] && <MemoText>{dic_list[dic_index].memo}</MemoText>}
            </ListStyle>

            <button onClick={() => {
                dispatch(updateListFB(dic_index));
                props.history.goBack();
            }} >collect</button>

            <button onClick={() => {
                props.history.goBack();
            }}>뒤로가기</button>

            <button onClick={() => {
                dispatch(deleteListFB(dic_index));
                props.history.goBack();
            }}>삭제하기</button>

        </div>
    );
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #F5F5F5;
    box-sizing: border-box;
    padding: 16px 16px 80px 16px;
    border-radius: 18px;
`;

const InputText = styled.span`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 7px;
    color: #8F8F8F;
`;

const WordText = styled.h1`
    font-size: 22px;
    font-weight: 500;
    margin: 0 0 35px 0;
    line-height: 0.8em;
    color: #343434;
`;

const DiscText = styled.h2`
    font-size: 15px;
    font-weight: 400;
    margin: 0 0 20px 0;
    color: #343434;

`;

const MemoText = styled.p`
    font-size: 14px;
    font-weight: 400px;
    margin: 0 0 20px 0;
    color: #343434;

`;

export default Detail;

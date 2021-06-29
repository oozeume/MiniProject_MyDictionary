import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { addList } from './redux/modules/dictionary';


const DicAdd = (props) => {
    const dispatch = useDispatch(); // 쓸 준비하는 것
    const input_text = React.useRef(null);
    const input_disc = React.useRef(null);
    const input_memo = React.useRef(null);

    return (
        <div>
            <ListStyle>
                <ItemStyle ref={input_text} placeholder="단어를 입력하세요."></ItemStyle>
                <ItemStyle ref={input_disc} placeholder="뜻을 입력하세요."></ItemStyle>
                <ItemStyle ref={input_memo} placeholder="메모를 입력하세요."></ItemStyle>

                <button onClick={() => {
                    if (input_text.current.value === "" || input_disc.current.value === "") {
                        alert('단어와 뜻을 모두 입력하세요.');
                    } else {
                        dispatch(addList(input_text.current.value, input_disc.current.value, input_memo.current.value)); // 이름 넣는 액션 넣어준다
                        props.history.push("/");
                    }
                }}>작성완료</button>

                <button onClick={() => {
                    props.history.goBack();
                }}>뒤로가기</button>


            </ListStyle>
        </div>
    );
}

const ListStyle = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
`;

const ItemStyle = styled.input`
    padding: 16px;
    margin: 8px;
    background-color: #F5F5F5;
    border-style: none;
`;

export default DicAdd;
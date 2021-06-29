import React from 'react';
import styled from 'styled-components';

import { useSelector, useDispatch } from 'react-redux';
import { addList } from './redux/modules/dictionary';


const DicAdd = (props) => {
    const dispatch = useDispatch(); // 쓸 준비하는 것
    const input_text = React.useRef(null);
    const input_disc = React.useRef(null);

    //Ref값 가져와서 연결해줄때 add해주는 함수 만들어줘야겠죠 (input에 text입력하고 추가하기 버튼 눌렀을때)
    // const addDicList = () => {
    //     const new_item = this.text.current.value; // input에서 value값 가져오면 담아줄 변수를 만들어준다. 
    //     props.create(new_item);
    // };



    return (
        <div>
            <ListStyle>
                <ItemStyle ref={input_text} placeholder="단어를 입력하세요."></ItemStyle>
                <ItemStyle ref={input_disc} placeholder="뜻을 입력하세요."></ItemStyle>


                <button onClick={() => {
                    dispatch(addList(input_text.current.value, input_disc.current.value)); // 이름 넣는 액션 넣어준다
                    props.history.push("/");
                }}>작성완료</button>
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
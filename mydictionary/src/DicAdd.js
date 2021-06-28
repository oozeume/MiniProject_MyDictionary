import React from 'react';
import styled from 'styled-components';

const DicAdd = (props) => {

    return (
        <div>
            <ListStyle>
                <ItemStyle placeholder="단어를 입력하세요."></ItemStyle>
                <ItemStyle placeholder="뜻을 입력하세요."></ItemStyle>
                <ItemStyle placeholder="메모를 작성하세요."></ItemStyle>
                <button onClick={() => {
                    
                    props.history.goBack();

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
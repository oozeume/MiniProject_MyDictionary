import React from 'react';
import styled from 'styled-components';
import "./dicstyle.css";

import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useSelector, useDispatch } from 'react-redux';



const DicList = (props) => {
  const dic_list = useSelector(state => state.dictionary.list);

  return (
    <Parent>
      <ListStyle>
        {dic_list.map((list, index) => {
          return (
            <ItemStyle>
              <Item className='list_item'
                key={index}

                onClick={() => { props.history.push('/detail/' + index); }}>
                <TextContainer>
                  <h1 style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    margin: '0px',
                    lineHeight: '0.8em',
                  }}>{list.text}</h1>
                  <ColletBtn
                    color={list.complited ? "orange" : "#F5F5F5"}
                  >
                  </ColletBtn>
                </TextContainer>
                <p style={{
                  fontSize: '14px',
                  fontWeight: '400',
                  margin: '12px 0px 0px 0px',
                }}

                >{list.disc}</p>
              </Item>

            </ItemStyle>
          );
        })
        }

      </ListStyle>
      <AddBtn onClick={() => { props.history.push('/dicadd') }} >
        <FontAwesomeIcon icon={faPlus} color="#fff" size="1x" />

      </AddBtn>
    </Parent>
  );
}

const Parent = styled.div`
position: relative;
`;

const ListStyle = styled.div`
display: flex;
flex-direction: column;
overflow-x: hidden;
overflow-y: auto;
height: 520px;
max-height: 60vh;
postiion : relative;

-ms-overflow-style: none;
scrollbar-width: none;
&::-webkit-scrollbar {
  display: none;
}
`;

const ItemStyle = styled.div`
padding: 27px 20px;
background-color: #F5F5F5;
border-radius: 18px;
margin-bottom: 11px;

`;

const Item = styled.div`

`;

const TextContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`;



const ColletBtn = styled.div`
width: 0.1px;
height: 0.1px;
padding: 5px;
background-color: ${props => props.color};
border-radius: 50%;
`;

const AddBtn = styled.button`
border-style: none;
background-color: #3040C4;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  }
position: absolute;
bottom: 0px;
right : 0px;
`;

export default DicList;
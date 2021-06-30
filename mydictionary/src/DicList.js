import React from 'react';
import styled from 'styled-components';
import "./dicstyle.css";


import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';



const DicList = (props) => {
    const dic_list = useSelector(state => state.dictionary.list);

    return (
        <div>
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
                <AddIcon />
            </AddBtn>
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
    padding: 15px;
    border-radius: 15px;
    &:hover{
        cursor: pointer;
    }
`;

export default DicList;
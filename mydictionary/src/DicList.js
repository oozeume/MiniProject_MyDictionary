import React from 'react';
import styled from 'styled-components';

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
                            <b>{list.text}</b>
                            <p>{list.disc}</p>
                        </Item>
                        <ColletBtn 
                            color={list.complited? "orange" : "#F5F5F5"} 
                            > 
                        </ColletBtn>
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
    height: 50vh;
    overflow-x: hidden;
    overflow-y: auto;
`;

const ItemStyle = styled.div`
    padding: 16px;
    margin: 8px;
    background-color: #F5F5F5;
`;

const Item = styled.h3`

`;

const ColletBtn = styled.div`
    width: 0.5px;
    padding: 8px;
    background-color: ${props => props.color};
    border-radius: 50%;
`;

const AddBtn = styled.button`
    border-style: none;
    background-color: #3040C4;
    padding: 15px;
    border-radius: 15px;
    position : sticky; 
	top : 0;
    right: 50px;
    &:hover{
        cursor: pointer;
    }
    
`;

export default DicList;
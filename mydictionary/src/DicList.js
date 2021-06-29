import React from 'react';
import styled from 'styled-components';

import AddIcon from '@material-ui/icons/Add';
import { useSelector, useDispatch } from 'react-redux';


const DicList = (props) => {
    const dic_list = useSelector(state => state.dictionary.list);

    return (
        <ListStyle>
            {dic_list.map((list, index) => {
                return (
                    <ItemStyle>
                        <Item className='list_item' key={index}
                            onClick={() => { props.history.push('/detail/' + index); }}>
                            <b>{list.text}</b>
                            <p>{list.disc}</p>
                        </Item>
                    </ItemStyle>
                );
            })
            }
            <AddBtn onClick={() => { props.history.push('/dicadd') }} >
                <AddIcon />
            </AddBtn>

        </ListStyle>
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
    padding: 16px;
    margin: 8px;
    background-color: #F5F5F5;
`;

const Item = styled.h3`

`;

const ItemDisc = styled.p`

`;

const AddBtn = styled.button`
    border-style: none;
    background-color: #3040C4;
    padding: 15px;
    border-radius: 15px;
`;

export default DicList;
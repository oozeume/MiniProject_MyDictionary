import React from 'react';
import { useDispatch, useSelector } from "react-redux";

import { deleteList } from "./redux/modules/dictionary";


const Detail = (props) => {
    const dispatch = useDispatch();

    const dic_list = useSelector(state => state.dictionary.list);
    console.log(dic_list); 

    let dic_index = parseInt(props.match.params.index);

    return (
        <div>
            {dic_list[dic_index] && <h1>{dic_list[dic_index].text}</h1>} {/* 조건부렌더링 */}
            {dic_list[dic_index] && <p>{dic_list[dic_index].disc}</p>}
            {dic_list[dic_index] && <p>{dic_list[dic_index].memo}</p>}

            <button onClick={() => { 
                props.history.goBack(); }}>뒤로가기</button>

            <button onClick={() => {
                dispatch(deleteList(dic_index));
                props.history.goBack(); }}>삭제하기</button>

        </div>
    );
}

export default Detail;

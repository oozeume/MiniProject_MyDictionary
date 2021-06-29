import React from 'react';

import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import styled from 'styled-components';
import DicList from './DicList';
import DicAdd from './DicAdd';
import Detail from "./Detail";

import { connect } from 'react-redux';

import { loadList, createList } from './redux/modules/dictionary';

// 스토어가 가진 상태값을 props로 받아오기위한 함수
const mapStateToProps = (state) => ({
    dic_list: state.dictionary.list,
});

const mapDispatchToProps = (dispatch) => ({
    load: () => {
        dispatch(loadList());
    },
    create: (new_item) => {
        dispatch(createList(new_item));
    }
});


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
        this.text = React.createRef();
    }

        //Ref값 가져와서 연결해줄때 add해주는 함수 만들어줘야겠죠 (input에 text입력하고 추가하기 버튼 눌렀을때)
        addDicList = () => {
            const new_item = this.text.current.value; // input에서 value값 가져오면 담아줄 변수를 만들어준다. 
            this.props.create(new_item);
        };

    render() {
        return (
            <div>
                <Container>
                    <Title>DICTIONARY</Title>
                    <Switch>
                        <Route path="/" exact render={(props) => (<DicList list={this.state.list} history={this.props.history} />)} />
                        <Route path="/dicadd" component={DicAdd} />
                        <Route path="/detail/:index" component={Detail} />
                    </Switch>
                </Container>
            </div>
        );
    }
}

const Container = styled.div`
    max-width: 350px;
    min-height: 60vh;
    background-color: #fff;
    padding: 16px;
    margin: 20px auto;
    border-radius: 5px;
    border: 1px solid #ddd;
`;

const Title = styled.h1`
    color: slateblue;
    text-align: center;
    margin: 0;
    font-size: 36px;
    color: #fff;
    background-color: #3040C4;
    padding: 10px;
    border-radius: 15px;
    width: 95%;
`;



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
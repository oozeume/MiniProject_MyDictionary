import React from 'react';

import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import "./dicstyle.css";

import styled from 'styled-components';
import DicList from './DicList';
import DicAdd from './DicAdd';
import Detail from "./Detail";
import NotFound from "./NotFound";

import { connect } from 'react-redux';

import { loadListFB } from './redux/modules/dictionary';

import { firestore } from "./firebase"; // firestore 가져오기

// 스토어가 가진 상태값을 props로 받아오기위한 함수
const mapStateToProps = (state) => ({
  dic_list: state.dictionary.list,
  is_loaded: state.dictionary.is_loaded,
});

const mapDispatchToProps = (dispatch) => ({
  load: () => {
    dispatch(loadListFB());
  },
  // create: (new_item) => {
  //   console.log(new_item);
  //   dispatch(addListFB(new_item));
  // }
});


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount() {
    this.props.load();
  }



  render() {
    return (
      <div>
        <Container>
          <Title>DICTIONARY</Title>
          <Switch>
            <Route path="/" exact render={(props) => (<DicList list={this.state.list} history={this.props.history} />)} />
            <Route path="/dicadd" component={DicAdd} />
            <Route path="/detail/:index" component={Detail} />
            <Route component={NotFound} />
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
    border-radius: 5px;
    // border: 1px solid #ddd;
`;

const Title = styled.h1`
    text-align: center;
    margin: 0 0 11px 0;
    font-size: 28px;
    line-height : 1.5333333333;
    letter-spacing: 0.08em;
    color: #fff;
    background-color: #3040C4;
    padding: 10px;
    border-radius: 15px;
    height: 40px;
    
`;



export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
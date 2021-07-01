import React from 'react';

import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router";

import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./dicstyle.css";
import styled from 'styled-components';
import DicList from './DicList';
import DicAdd from './DicAdd';
import Detail from "./Detail";
import NotFound from "./NotFound";
import Spinner from "./Spinner";

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
      <Wrapper>
        <Container>
          <Title>DICTIONARY</Title>
          {!this.props.is_loaded ? (<Spinner />) : (
            <React.Fragment>
              <Switch>
                <Route path="/" exact render={(props) => (<DicList list={this.state.list} history={this.props.history} />)} />
                <Route path="/dicadd" component={DicAdd} />
                <Route path="/detail/:index" component={Detail} />
                <Route component={NotFound} />
              </Switch>
            </React.Fragment>
          )}
        </Container>
      </Wrapper>
    );
  }
}

const Wrapper = styled.div`
height: 400px;
`;

const Container = styled.div`
max-width: 350px;
// min-height: 60vh;
background-color: #fff;
padding: 16px;
border-radius: 5px;

position: relative;
display: flex;
flex-direction: column;
margin: 70px auto 0px auto;
`;

const Title = styled.h1`
    text-align: center;
    margin: 0 0 11px 0;
    font-size: 29px;
    line-height : 1.4333333333;
    letter-spacing: 0.08em;
    color: #fff;
    background-color: #3040C4;
    padding: 10px;
    border-radius: 15px;
    height: 40px;
    
`;

const ScrollBtn = styled.button`
border-style: none;
background-color: #3040C4;
height: 45px;
width: 45px;
border-radius: 12px;
&:hover{
  cursor: pointer;
  opacity: 0.8;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05), 0px 1px 3px rgba(0, 0, 0, 0.05),
  inset 0px 1px 0px rgba(255, 255, 255, 0.1);
transition: background-color 100ms ease-in, box-shadow 100ms ease-in;
  }
position: absolute;
bottom: 16px;
left : 16px;
`;




export default connect(mapStateToProps, mapDispatchToProps)(withRouter(App));
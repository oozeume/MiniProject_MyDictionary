import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import dictionary from "./modules/dictionary";
import {createBrowserHistory} from "history";

// 브라우저 히스토리 생성
export const history = createBrowserHistory();

const middlewares = [thunk];

const enhancer = applyMiddleware(...middlewares); 
const rootReducer = combineReducers({dictionary});

// store는 createStore()로 만들 수 있다. 
const store = createStore(rootReducer, enhancer);

export default store;

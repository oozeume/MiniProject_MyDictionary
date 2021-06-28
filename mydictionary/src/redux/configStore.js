import { createStore, combineReducers } from "redux";
import dictionary from "./modules/dictionary";
import {createBrowserHistory} from "history";

// 브라우저의 히스토리를 만들어준다.
export const history = createBrowserHistory();

const rootReducer = combineReducers({dictionary});

// store는 createStore()로 만들 수 있다. 
const store = createStore(rootReducer);

export default store;

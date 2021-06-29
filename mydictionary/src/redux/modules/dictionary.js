// Action
const LOAD = "dictionary/LOAD";
const ADD = "dictionary/ADD"; // 단어를 리스트에 추가한다.
const CREATE = "dictionary/CREATE"; // 단어를 생성한다. 
const DELETE = "dictionary/DELETE";
const UPDATE = "dictionary/UPDATE";

// InitialState 기본값, 초기값

const initialState = {
    list: [  
        { text: '단어이름', disc: '단어뜻' },
    ]
};

// ActionCreator
export const loadList = (dictionary) => {
    return { type: LOAD, dictionary };
}

export const addList = (text, disc) => {
    return { type: ADD, text, disc };
}

export const createList = (dictionary) => {
    return { type: CREATE, dictionary };
}

export const deleteList = (dictionary) => {
    return { type: DELETE, dictionary };
}

export const updateList = (dictionary) => {
    return { type: UPDATE, dictionary };
}


// Reducer
export default function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "dictionary/LOAD": {
            return state;
        }
        case "dictionary/ADD": {
            console.log(state, action);
            const new_dic_list = [...state.list,  { text: action.text, disc: action.disc }];
            return { list: new_dic_list };
        }

        case "dictionary/CREATE": {
            console.log(state, action);
            const new_dic_list = [...state.list, { text: action.dictionary, disc: action.dictionary }];
            return { list: new_dic_list };
        }
        case "dictionary/DELETE":
            const dic_list = state.list.filter((l, index) => {
                if (index !== action.dictionary) {
                    return l;
                }
            });
            return { list: dic_list };

        case "dictionary/UPDATE": { // 완료로 상태가 바뀐 리스트가 들어가야한다.
            const dic_list = state.list.map((l, index) => {
                if (index === action.dictionary) {
                    return { ...l, completed: true };
                } else {
                    return l;
                }
            });
            return { list: dic_list };
        }

        default:
            return state;
    }
}

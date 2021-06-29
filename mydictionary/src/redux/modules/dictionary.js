// Action
const LOAD = "dictionary/LOAD";
const ADD = "dictionary/ADD"; // 단어를 리스트에 추가한다.
const CREATE = "dictionary/CREATE"; // 단어를 생성한다. 
const DELETE = "dictionary/DELETE";
const UPDATE = "dictionary/UPDATE";

// InitialState 기본값, 초기값

const initialState = {
    list: [  
        // { text: '단어이름', disc: '단어뜻' , complited: false},
    ]
};

// ActionCreator
export const loadList = (load_list) => {
    return { type: LOAD, load_list };
}

export const addList = (text, disc, memo) => {
    return { type: ADD, text, disc, memo };
}

export const createList = (create_list) => {
    return { type: CREATE, create_list };
}

export const deleteList = (delete_list) => {
    return { type: DELETE, delete_list };
}

export const updateList = (update_list) => {
    return { type: UPDATE, update_list };
}


// Reducer
export default function reducer(state = initialState, action) {
    
    switch (action.type) {
        case "dictionary/LOAD": {
            return state;
        }
        case "dictionary/ADD": {
            console.log(state, action);
            const new_dic_list = [...state.list,  { text: action.text, disc: action.disc, memo: action.memo, complited: false }];
            return { list: new_dic_list };
        }

        case "dictionary/CREATE": {
            console.log(state, action);
            const new_dic_list = [...state.list, { text: action.create_list }];
            return { list: new_dic_list };
        }
        case "dictionary/DELETE":
            const dic_list = state.list.filter((l, index) => {
                if (index !== action.delete_list) {
                    return l;
                } 
            });
            return { list: dic_list };

        case "dictionary/UPDATE": { // 완료로 상태가 바뀐 리스트가 들어가야한다.
            const dic_list = state.list.map((l, index) => {
                if (index === action.update_list) {
                    return { ...l, complited: true};
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

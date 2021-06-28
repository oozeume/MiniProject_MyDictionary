// Action
const LOAD = "dictionary/LOAD";
const CREATE = "dictionary/CREATE";
const DELETE = "dictionary/DELETE";
const UPDATE = "dictionary/UPDATE";

// InitialState 기본값, 초기값

const initialState = {
    list: [ // 원래 string으로 있던걸 dictionary로 바꿔준다. 
        { text: '영어단어', completed: false },
        { text: '영어단어', completed: false }


    ]
    // list: ['영화관 가기', '매일 책읽기', '수영 배우기'],
};

// ActionCreator
export const loadList = (dictionary) => {
    return { type: LOAD, dictionary };
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
    console.log(action);
    switch (action.type) {
        case "dictionary/LOAD": {
            return state;
        }
        case "dictionary/CREATE": {
            console.log(state, action);
            const new_dic_list = [...state.list, { text: action.dictionary, completed: false }];
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
                    if(index === action.dictionary){
                        return {...l, completed: true};
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

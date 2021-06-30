import { firestore } from "../../firebase";

const dictionary_db = firestore.collection('dictionary');

// Action
const LOAD = "dictionary/LOAD";
const ADD = "dictionary/ADD"; // 단어 생성 및 리스트에 추가
const DELETE = "dictionary/DELETE";
const UPDATE = "dictionary/UPDATE";


// InitialState 초기값
const initialState = {
  is_loaded: false,
  list: [
    // { text: '단어이름', disc: '단어뜻' , complited: false},
  ],
  
};

// ActionCreator
export const loadList = (load_list) => {
  return { type: LOAD, load_list };
}

export const addList = (add_list) => {
  return { type: ADD, add_list };
}

export const deleteList = (delete_list) => {
  return { type: DELETE, delete_list };
}

export const updateList = (update_list) => {
  return { type: UPDATE, update_list };
}

export const loadListFB = () => {
  return function (dispatch) {
    dictionary_db.get().then((docs) => {
      let dic_data = [];
      docs.forEach((doc) => {
        console.log(doc);
        console.log(doc.data());
        console.log(doc.id);

        if (doc.exists) {
          dic_data = [...dic_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(dic_data);
      dispatch(loadList(dic_data));
    });
  };
};

export const addListFB = (text, disc, memo) => {
  return function (dispatch) {
    let dic_data = { text: text, disc: disc, memo: memo, complited: false };

    dictionary_db.add(dic_data).then((docRef) => {
      dic_data = { ...dic_data, id: docRef.id };

      console.log(dic_data);
      dispatch(addList(dic_data));
    }).catch((error) => {
      window.alert('오류가 났네요! 나중에 다시 시도해주세요!');
    });
  }
}

export const updateListFB = (index) => {
  return function (dispatch, getState) {
    const before_dic_data = getState().dictionary.list[index];
    console.log(before_dic_data);

    let updated_dic_data = { ...before_dic_data, complited: true };

    if(!updated_dic_data.id){
      return;
    }

    dictionary_db.doc(before_dic_data.id).update(updated_dic_data).then(docRef => {
      dispatch(updateList(index));
    }).catch(error => {
      console.log(error);
    });
  }
}

export const deleteListFB = (index) => {
  return function (dispatch, getState) {
    const before_dic_data = getState().dictionary.list[index];

    if(!before_dic_data.id){
      return;
    }

    dictionary_db.doc(before_dic_data.id).delete().then(docRef => {
      dispatch(deleteList(index));
    }).catch(error => {
      console.log(error);
    });
  }
}



// Reducer
export default function reducer(state = initialState, action) {

  switch (action.type) {
    case "dictionary/LOAD": {
      if (action.load_list.length > 0) {
        return { list: action.load_list, is_loaded: true };
      }
      return state;
    }

    case "dictionary/ADD": {
      const new_dic_list = [...state.list, action.add_list];
      return { ...state, list: new_dic_list };
    }

    case "dictionary/DELETE":
      const dic_list = state.list.filter((l, index) => {
        if (index !== action.delete_list) {
          return l;
        }
      });
      return { list: dic_list };

    case "dictionary/UPDATE": { // 완료로 상태가 바뀐 리스트가 들어간다. 
      const dic_list = state.list.map((l, index) => {
        if (index === action.update_list) {
          return { ...l, complited: true };
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

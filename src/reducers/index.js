import {combineReducers} from 'redux'
import {persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

let tasksReducer = (state=[],action) => {
    if(action.type=="GET_TASKS"){
        return [...state]
    }
   else if(action.type=="ADD_TASK"){
        return [...state,action.payload]
    }
   else if(action.type=="DELETE_TASK"){
       console.log("Delte called")
        let temp = [...state];

        for(let i=0;i<temp.length;i++){
            if(i==action.payload){
                temp.splice(i,1);
                break;
            }
        }

        return [...temp]
    }
    else if(action.type=="EDIT_TASK"){
        let temp = [...state]
        for(let i=0;i<temp.length;i++){
            if(i==action.payload.index){
                temp[i]=action.payload.taskname;
                break;
            }
        }

        return [...temp]
    }
    else{
        return state
    }
}

let editIndexReducer = (state=-1,action) => {
    if(action.type=="EDIT_INDEX"){
        return action.payload;
    }
    else{
        return state
    }
}   

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['tasks']
}




const rootReducer =  combineReducers(
    {
        tasks: tasksReducer,
        editIndex: editIndexReducer
    }
);

export default persistReducer(persistConfig, rootReducer);
import{
    POST_TASK_REQUEST,
    POST_TASK_SUCCESS,
    POST_TASK_FALIED
} from './constant'

let initialState = {
    insertTask: "",
    insertTaskLoading:false,
    insertTaskErr :null
}

const insertTaskReducer = (state = initialState, action )=>{
    switch(action.type){

        case POST_TASK_REQUEST:{
            state.insertTask = "";
            state.insertTaskLoading = true;
            state.insertTaskErr = null;

            return {...state}
        }

        case POST_TASK_SUCCESS:{
            state.insertTask = action.data;
            state.insertTaskLoading = false;
            state.insertTaskErr = null;

            return {...state}
        }

        case POST_TASK_FALIED:{
            state.insertTask = "";
            state.insertTaskLoading = false;
            state.insertTaskErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default insertTaskReducer
import{
    FETCH_LIST_TASK_REQUEST,
    FETCH_LIST_TASK_SUCCESS,
    FETCH_LIST_TASK_FALIED,
} from './constant'

let initialState = {
    listTask: [],
    listTaskLoading:false,
    listTaskErr :null
}

const listTaskReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_TASK_REQUEST:{
            state.listTask = [];
            state.listTaskLoading = true;
            state.listTaskErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_SUCCESS:{
            state.listTask = action.data;
            state.listTaskLoading = false;
            state.listTaskErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_FALIED:{
            state.listTask = [];
            state.listTaskLoading = false;
            state.listTaskErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listTaskReducer




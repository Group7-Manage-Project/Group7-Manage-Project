import{
    FETCH_LIST_TASK_DONE_REQUEST,
    FETCH_LIST_TASK_DONE_SUCCESS,
    FETCH_LIST_TASK_DONE_FALIED,
} from './constant'

let initialState = {
    listTaskDone: [],
    listTaskDoneLoading:false,
    listTaskDoneErr :null
}

const listTaskDoneReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_TASK_DONE_REQUEST:{
            state.listTaskDone = [];
            state.listTaskDoneLoading = true;
            state.listTaskDoneErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_DONE_SUCCESS:{
            state.listTaskDone = action.data;
            state.listTaskDoneLoading = false;
            state.listTaskDoneErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_DONE_FALIED:{
            state.listTaskDone = [];
            state.listTaskDoneLoading = false;
            state.listTaskDoneErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listTaskDoneReducer




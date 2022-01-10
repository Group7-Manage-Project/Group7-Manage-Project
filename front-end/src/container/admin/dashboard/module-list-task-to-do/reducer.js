import{
    FETCH_LIST_TASK_TO_DO_REQUEST,
    FETCH_LIST_TASK_TO_DO_SUCCESS,
    FETCH_LIST_TASK_TO_DO_FALIED,
} from './constant'

let initialState = {
    listTaskToDo: [],
    listTaskToDoLoading:false,
    listTaskToDoErr :null
}

const listTaskToDoReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_TASK_TO_DO_REQUEST:{
            state.listTaskToDo = [];
            state.listTaskToDoLoading = true;
            state.listTaskToDoErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_TO_DO_SUCCESS:{
            state.listTaskToDo = action.data;
            state.listTaskToDoLoading = false;
            state.listTaskToDoErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_TO_DO_FALIED:{
            state.listTaskToDo = [];
            state.listTaskToDoLoading = false;
            state.listTaskToDoErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listTaskToDoReducer




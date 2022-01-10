import{
    FETCH_LIST_TASK_DOING_REQUEST,
    FETCH_LIST_TASK_DOING_SUCCESS,
    FETCH_LIST_TASK_DOING_FALIED,
} from './constant'

let initialState = {
    listTaskDoing: [],
    listTaskDoingLoading:false,
    listTaskDoingErr :null
}

const listTaskDoingReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_TASK_DOING_REQUEST:{
            state.listTaskDoing = [];
            state.listTaskDoingLoading = true;
            state.listTaskDoingErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_DOING_SUCCESS:{
            state.listTaskDoing = action.data;
            state.listTaskDoingLoading = false;
            state.listTaskDoingErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_DOING_FALIED:{
            state.listTaskDoing = [];
            state.listTaskDoingLoading = false;
            state.listTaskDoingErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listTaskDoingReducer




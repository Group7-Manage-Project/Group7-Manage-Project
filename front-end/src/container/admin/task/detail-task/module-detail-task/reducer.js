import {
    FETCH_DETAIL_TASK_EMPLOYEES_REQUEST,
    FETCH_DETAIL_TASK_EMPLOYEES_SUCCESS,
    FETCH_DETAIL_TASK_EMPLOYEES_FALIED 
} from './constant'

let initialState = {
    detailTask: {},
    detailTaskLoading:false,
    detailTaskErr :null
}

const detailTaskReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_DETAIL_TASK_EMPLOYEES_REQUEST:{
            state.detailTask = {};
            state.detailTaskLoading = true;
            state.detailTaskErr = null;

            return {...state}
        }

        case FETCH_DETAIL_TASK_EMPLOYEES_SUCCESS:{
            state.detailTask = action.data;
            state.detailTaskLoading = false;
            state.detailTaskErr = null;

            return {...state}
        }

        case FETCH_DETAIL_TASK_EMPLOYEES_FALIED:{
            state.detailTask = {};
            state.detailTaskLoading = false;
            state.detailTaskErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default detailTaskReducer




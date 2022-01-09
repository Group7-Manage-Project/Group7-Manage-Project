import {
    FETCH_DETAIL_DEPARTMENT_REQUEST,
    FETCH_DETAIL_DEPARTMENT_SUCCESS,
    FETCH_DETAIL_DEPARTMENT_FALIED 
} from './constant'

let initialState = {
    detailDepartment: {},
    detailDepartmentLoading:false,
    detailDepartmentErr :null
}

const detailDepartmentReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_DETAIL_DEPARTMENT_REQUEST:{
            state.detailDepartment = {};
            state.detailDepartmentLoading = true;
            state.detailDepartmentErr = null;

            return {...state}
        }

        case FETCH_DETAIL_DEPARTMENT_SUCCESS:{
            state.detailDepartment = action.data;
            state.detailDepartmentLoading = false;
            state.detailDepartmentErr = null;

            return {...state}
        }

        case FETCH_DETAIL_DEPARTMENT_FALIED:{
            state.detailDepartment = {};
            state.detailDepartmentLoading = false;
            state.detailDepartmentErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default detailDepartmentReducer




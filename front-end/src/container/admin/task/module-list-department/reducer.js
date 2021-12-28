import{
    FETCH_LIST_DEPARTMENT_REQUEST,
    FETCH_LIST_DEPARTMENT_SUCCESS,
    FETCH_LIST_DEPARTMENT_FALIED,
} from './constant'

let initialState = {
    listDepartment: [],
    listDepartmentLoading:false,
    listDepartmentErr :null
}

const listDepartmentReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_DEPARTMENT_REQUEST:{
            state.listDepartment = [];
            state.listDepartmentLoading = true;
            state.listDepartmentErr = null;

            return {...state}
        }

        case FETCH_LIST_DEPARTMENT_SUCCESS:{
            state.listDepartment = action.data;
            state.listDepartmentLoading = false;
            state.listDepartmentErr = null;

            return {...state}
        }

        case FETCH_LIST_DEPARTMENT_FALIED:{
            state.listDepartment = [];
            state.listDepartmentLoading = false;
            state.listDepartmentErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listDepartmentReducer




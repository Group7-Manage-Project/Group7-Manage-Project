import{
    POST_DEPARTMENT_REQUEST,
    POST_DEPARTMENT_SUCCESS,
    POST_DEPARTMENT_FALIED
} from './constant'

let initialState = {
    insertDepartment: "",
    insertDepartmentLoading:false,
    insertDepartmentErr :null
}

const insertDepartmentReducer = (state = initialState, action )=>{
    switch(action.type){

        case POST_DEPARTMENT_REQUEST:{
            state.insertDepartment = "";
            state.insertDepartmentLoading = true;
            state.insertDepartmentErr = null;

            return {...state}
        }

        case POST_DEPARTMENT_SUCCESS:{
            state.insertDepartment = action.data;
            state.insertDepartmentLoading = false;
            state.insertDepartmentErr = null;

            return {...state}
        }

        case POST_DEPARTMENT_FALIED:{
            state.insertDepartment = "";
            state.insertDepartmentLoading = false;
            state.insertDepartmentErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default insertDepartmentReducer
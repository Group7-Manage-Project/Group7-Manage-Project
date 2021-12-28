import{
    FETCH_LIST_CATEGORY_BY_DEPARTMENT_REQUEST,
    FETCH_LIST_CATEGORY_BY_DEPARTMENT_SUCCESS,
    FETCH_LIST_CATEGORY_BY_DEPARTMENT_FALIED,
} from './constant'

let initialState = {
    listCategoryByDepartment: [],
    listCategoryByLoading:false,
    listCategoryByErr :null
}

const listCategoryByDepartmentReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_CATEGORY_BY_DEPARTMENT_REQUEST:{
            state.listCategoryByDepartment = [];
            state.listCategoryByLoading = true;
            state.listCategoryByErr = null;

            return {...state}
        }

        case FETCH_LIST_CATEGORY_BY_DEPARTMENT_SUCCESS:{
            state.listCategoryByDepartment = action.data;
            state.listCategoryByLoading = false;
            state.listCategoryByErr = null;

            return {...state}
        }

        case FETCH_LIST_CATEGORY_BY_DEPARTMENT_FALIED:{
            state.listCategoryByDepartment = [];
            state.listCategoryByLoading = false;
            state.listCategoryByErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listCategoryByDepartmentReducer




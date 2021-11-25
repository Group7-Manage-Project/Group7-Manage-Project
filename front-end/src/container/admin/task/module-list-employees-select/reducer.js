import {
    FETCH_LIST_EMPLOYEES_SELECT_REQUEST,
    FETCH_LIST_EMPLOYEES_SELECT_SUCCESS,
    FETCH_LIST_EMPLOYEES_SELECT_FALIED
} from './constant'

let initialState = {
    listEmployeesSelect: [],
    listEmployeesSelectLoading:false,
    listEmployeesSelectErr :null
}

const listEmployeesSelectReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_EMPLOYEES_SELECT_REQUEST:{
            state.listEmployeesSelect = [];
            state.listEmployeesSelectLoading = true;
            state.listEmployeesSelectErr = null;

            return {...state}
        }

        case FETCH_LIST_EMPLOYEES_SELECT_SUCCESS:{
            state.listEmployeesSelect = action.data;
            state.listEmployeesSelectLoading = false;
            state.listEmployeesSelectErr = null;

            return {...state}
        }

        case FETCH_LIST_EMPLOYEES_SELECT_FALIED:{
            state.listEmployeesSelect = [];
            state.listEmployeesSelectLoading = false;
            state.listEmployeesSelectErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listEmployeesSelectReducer

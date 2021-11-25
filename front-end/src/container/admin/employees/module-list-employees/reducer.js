import 
{   FETCH_LIST_EMPLOYEES_REQUEST,
    FETCH_LIST_EMPLOYEES_SUCCESS,
    FETCH_LIST_EMPLOYEES_FALIED
} 
    from './constant'

let initialState = {
    listEmployees: [],
    listEmployeesLoading:false,
    listEmployeesErr :null
}

const listEmployeesReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_EMPLOYEES_REQUEST:{
            state.listEmployees = [];
            state.listEmployeesLoading = true;
            state.listEmployeesErr = null;

            return {...state}
        }

        case FETCH_LIST_EMPLOYEES_SUCCESS:{
            state.listEmployees = action.data;
            state.listEmployeesLoading = false;
            state.listEmployeesErr = null;

            return {...state}
        }

        case FETCH_LIST_EMPLOYEES_FALIED:{
            state.listEmployees = [];
            state.listEmployeesLoading = false;
            state.listEmployeesErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listEmployeesReducer




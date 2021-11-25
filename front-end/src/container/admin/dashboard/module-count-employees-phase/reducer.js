import {
    FETCH_COUNT_EMPLOYEES_PHASE_REQUEST,
    FETCH_COUNT_EMPLOYEES_PHASE_SUCCESS,
    FETCH_COUNT_EMPLOYEES_PHASE_FALIED
} from './constant'

let initialState = {
    listCountEmployeesPhase: [],
    listCountEmployeesPhaseLoading:false,
    listCountEmployeesPhaseErr :null
}

const listCountEmployeesReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_COUNT_EMPLOYEES_PHASE_REQUEST:{
            state.listCountEmployeesPhase = [];
            state.listCountEmployeesPhaseLoading = true;
            state.listCountEmployeesPhaseErr = null;

            return {...state}
        }

        case FETCH_COUNT_EMPLOYEES_PHASE_SUCCESS:{
            state.listCountEmployeesPhase = action.data;
            state.listCountEmployeesPhaseLoading = false;
            state.listCountEmployeesPhaseErr = null;

            return {...state}
        }

        case FETCH_COUNT_EMPLOYEES_PHASE_FALIED:{
            state.listCountEmployeesPhase = [];
            state.listCountEmployeesPhaseLoading = false;
            state.listCountEmployeesPhaseErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listCountEmployeesReducer




import {
    DELETE_EMPLOYEES_FLG_REQUEST,
    DELETE_EMPLOYEES_FLG_SUCCESS,
    DELETE_EMPLOYEES_FLG_FALIED
} from "./constant"

let initialState ={
    deleteFlgEmployee: "",
    deleteFlgEmployeeLoading: false,
    deleteFlgEmployeeErr : null
}

const deleteEmployeeFlgReducer = (state = initialState, action) =>{
    switch (action.type) {
        case DELETE_EMPLOYEES_FLG_REQUEST:{
            state.deleteFlgEmployee = ""
            state.deleteFlgEmployeeLoading = true
            state.deleteFlgEmployeeErr = null

            return {...state}
        }

        case DELETE_EMPLOYEES_FLG_SUCCESS:{
            state.deleteFlgEmployee = action.data
            state.deleteFlgEmployeeLoading = false
            state.deleteFlgEmployeeErr = null

            return {...state}
        }

        case DELETE_EMPLOYEES_FLG_FALIED:{
            state.deleteFlgEmployee = ""
            state.deleteFlgEmployeeLoading = false
            state.deleteFlgEmployeeErr = action.err 

            return {...state}
        }

        default:
            return {...state}
    }
}

export default deleteEmployeeFlgReducer
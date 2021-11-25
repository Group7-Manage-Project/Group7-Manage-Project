import {
    DELETE_EMPLOYEES_REQUEST,
    DELETE_EMPLOYEES_SUCCESS,
    DELETE_EMPLOYEES_FALIED
}from "./constant"

let initialState ={
    deleteEmployee : "",
    deleteEmployeeLoading:false,
    deleteEmployeeErr: null
}

const deleteEmployeeReducer = (state = initialState, aciton) =>{
    switch(aciton.type){
        case DELETE_EMPLOYEES_REQUEST:{
            state.deleteEmployee = ""
            state.deleteEmployeeLoading = true
            state.deleteEmployeeErr = null

            return {...state}
        }

        case DELETE_EMPLOYEES_SUCCESS:{
            state.deleteEmployee = aciton.data
            state.deleteEmployeeLoading = false
            state.deleteEmployeeErr = null

            return {...state}
        }


        case DELETE_EMPLOYEES_FALIED:{
            state.deleteEmployee = ""
            state.deleteEmployeeLoading = false
            state.deleteEmployeeErr = aciton.err

            return {...state}
        }

        default:
            return {...state}
    }
}

export default deleteEmployeeReducer
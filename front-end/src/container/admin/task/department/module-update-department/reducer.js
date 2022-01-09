import {
    UPDATE_DEPARTMENT_REQUEST,
    UPDATE_DEPARTMENT_SUCCESS,
    UPDATE_DEPARTMENT_FALIED
} from "./constant"

let initialState = {
    departmentUpdate:"",
    departmentUpdateLoading:false,
    departmentUpdateErr: null
}

const departmentUpdateReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_DEPARTMENT_REQUEST:{
            state.departmentUpdate =  ""
            state.departmentUpdateLoading = true
            state.departmentUpdateErr = null

            return {...state}
        }
        case UPDATE_DEPARTMENT_SUCCESS:{
            state.departmentUpdate = action.data
            state.departmentUpdateLoading = false
            state.departmentUpdateErr = null

            return {...state}
        }

        case UPDATE_DEPARTMENT_FALIED:{
            state.departmentUpdate =  ""
            state.departmentUpdateLoading = false
            state.departmentUpdateErr = action.err

            return {...state}
        }
            
            
    
        default:
            return {...state}
            
    }

}

export default departmentUpdateReducer
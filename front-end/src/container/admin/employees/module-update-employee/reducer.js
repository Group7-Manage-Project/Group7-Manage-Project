import {
    UPDATE_EMPLOYEES_REQUEST,
    UPDATE_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEES_FALIED
} from "./constant"

let initialState = {
    userUpdate:"",
    userUpdateLoading:false,
    userUpdateErr: null
}

const userUpdateReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_EMPLOYEES_REQUEST:{
            state.userUpdate =  ""
            state.userLoaded = true
            state.userUpdateErr = null

            return {...state}
        }
        case UPDATE_EMPLOYEES_SUCCESS:{
            state.userUpdate = action.data
            state.userLoaded = false
            state.userUpdateErr = null

            return {...state}
        }

        case UPDATE_EMPLOYEES_FALIED:{
            state.userUpdate =  ""
            state.userLoaded = false
            state.userUpdateErr = action.err

            return {...state}
        }
            
            
    
        default:
            return {...state}
            
    }

}

export default userUpdateReducer
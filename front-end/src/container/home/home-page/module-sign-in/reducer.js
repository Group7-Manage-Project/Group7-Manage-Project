import {POST_SIGN_IN_REQUEST,
    POST_SIGN_IN_SUCCESS,
    POST_SIGN_IN_FAILED
} from './constant'
    
    let initialState ={
        userSignUp:{},
        userSignUpLoading: false,
        userSignUpErr: null
    }
    
     const userSignUpReducer = (state = initialState, action) =>{
        switch(action.type){
    
            case POST_SIGN_IN_REQUEST:{
                state.userSignUp = {}
                state.userSignUpLoading = true
                state.userSignUpErr = null
                return {...state}
            }
    
    
            case POST_SIGN_IN_SUCCESS:{
                state.userSignUp = action.data
                state.userSignUpLoading = false
                state.userSignUpErr = null
                return {...state}
            }
    
    
            case POST_SIGN_IN_FAILED:{
                state.userSignUp = {}
                state.userSignUpLoading = false
                state.userSignUpErr = action.data
                return {...state}
            }
    
            default:
                return {...state}
        }
    }
    
    export default userSignUpReducer
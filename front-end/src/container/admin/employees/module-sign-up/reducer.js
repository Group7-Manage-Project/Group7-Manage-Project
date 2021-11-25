import { POST_SIGNUP_REQUEST,
        POST_SIGNUP_SUCCESS,
        POST_SIGNUP_FALIED
    } 
        from './constant.js'

    let initialState = {
        userSignUp: "",
        userSignUpLoading:false,
        userSignUpErr :null
    }

    const userSignUpEmployeesReducer = (state = initialState, action )=>{
        switch(action.type){

            case POST_SIGNUP_REQUEST:{
                state.userSignUp = "";
                state.userSignUpLoading = true;
                state.userSignUpErr = null;

                return {...state}
            }

            case POST_SIGNUP_SUCCESS:{
                state.userSignUp = action.data;
                state.userSignUpLoading = false;
                state.userSignUpErr = null;

                return {...state}
            }

            case POST_SIGNUP_FALIED:{
                state.userSignUp = "";
                state.userSignUpLoading = false;
                state.userSignUpErr = action.err;
                
                return {...state}
            }

            default:
                return{...state}
        }
    }

    export default userSignUpEmployeesReducer




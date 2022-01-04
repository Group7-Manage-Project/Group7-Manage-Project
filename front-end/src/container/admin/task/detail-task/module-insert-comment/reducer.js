import{
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FALIED
} from './constant'

let initialState = {
    comment: "",
    commentLoading:false,
    commentErr :null
}

const insertCommentReducer = (state = initialState, action )=>{
    switch(action.type){

        case POST_COMMENT_REQUEST:{
            state.comment = "";
            state.commentLoading = true;
            state.commentErr = null;

            return {...state}
        }

        case POST_COMMENT_SUCCESS:{
            state.comment = action.data;
            state.commentLoading = false;
            state.commentErr = null;

            return {...state}
        }

        case POST_COMMENT_FALIED:{
            state.comment = "";
            state.commentLoading = false;
            state.commentErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default insertCommentReducer
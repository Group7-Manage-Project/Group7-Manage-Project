import{
    FETCH_LIST_COMMENT_REQUEST,
    FETCH_LIST_COMMENT_SUCCESS,
    FETCH_LIST_COMMENT_FALIED,
} from './constant'

let initialState = {
    listComment: [],
    listCommentLoading:false,
    listCommentErr :null
}

const listCommentReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_COMMENT_REQUEST:{
            state.listComment = [];
            state.listCommentLoading = true;
            state.listCommentErr = null;

            return {...state}
        }

        case FETCH_LIST_COMMENT_SUCCESS:{
            state.listComment = action.data;
            state.listCommentLoading = false;
            state.listCommentErr = null;

            return {...state}
        }

        case FETCH_LIST_COMMENT_FALIED:{
            state.listComment = [];
            state.listCommentLoading = false;
            state.listCommentErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listCommentReducer




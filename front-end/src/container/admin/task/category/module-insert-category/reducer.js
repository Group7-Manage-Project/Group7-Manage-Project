import{
    POST_CATEGORY_REQUEST,
    POST_CATEGORY_SUCCESS,
    POST_CATEGORY_FALIED
} from './constant'

let initialState = {
    insertCategory: "",
    insertCategoryLoading:false,
    insertCategoryErr :null
}

const insertCategoryReducer = (state = initialState, action )=>{
    switch(action.type){

        case POST_CATEGORY_REQUEST:{
            state.insertCategory = "";
            state.insertCategoryLoading = true;
            state.insertCategoryErr = null;

            return {...state}
        }

        case POST_CATEGORY_SUCCESS:{
            state.insertCategory = action.data;
            state.insertCategoryLoading = false;
            state.insertCategoryErr = null;

            return {...state}
        }

        case POST_CATEGORY_FALIED:{
            state.insertCategory = "";
            state.insertCategoryLoading = false;
            state.insertCategoryErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default insertCategoryReducer
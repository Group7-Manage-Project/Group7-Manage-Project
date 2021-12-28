import {
    FETCH_LIST_CATEGORY_REQUEST,
    FETCH_LIST_CATEGORY_SUCCESS,
    FETCH_LIST_CATEGORY_FALIED
} from './constant'

let initialState = {
    listCategoryTask: [],
    listCategoryTaskLoading:false,
    listCategoryTaskErr :null
}

const listCategoryTaskReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_CATEGORY_REQUEST:{
            state.listCategoryTask = [];
            state.listCategoryTaskLoading = true;
            state.listCategoryTaskErr = null;

            return {...state}
        }

        case FETCH_LIST_CATEGORY_SUCCESS:{
            state.listCategoryTask = action.data;
            state.listCategoryTaskLoading = false;
            state.listCategoryTaskErr = null;

            return {...state}
        }

        case FETCH_LIST_CATEGORY_FALIED:{
            state.listCategoryTask = [];
            state.listCategoryTaskLoading = false;
            state.listCategoryTaskErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listCategoryTaskReducer




import {
    FETCH_COUNT_CATEGORY_REQUEST ,
    FETCH_COUNT_CATEGORY_SUCCESS,
    FETCH_COUNT_CATEGORY_FALIED
} from './constant'

let initialState = {
    listCountCategory: [],
    listCountCategoryLoading:false,
    listCountCategoryErr :null
}

const listCountCategoryReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_COUNT_CATEGORY_REQUEST:{
            state.listCountCategory = [];
            state.listCountCategoryLoading = true;
            state.listCountCategoryErr = null;

            return {...state}
        }

        case FETCH_COUNT_CATEGORY_SUCCESS:{
            state.listCountCategory = action.data;
            state.listCountCategoryLoading = false;
            state.listCountCategoryErr = null;

            return {...state}
        }

        case FETCH_COUNT_CATEGORY_FALIED:{
            state.listCountCategory = [];
            state.listCountCategoryLoading = false;
            state.listCountCategoryErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listCountCategoryReducer




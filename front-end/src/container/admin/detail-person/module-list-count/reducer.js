import{
    FETCH_LIST_COUNT_REQUEST,
    FETCH_LIST_COUNT_SUCCESS,
    FETCH_LIST_COUNT_FALIED,
} from './constant'

let initialState = {
    listCount: [],
    listCountLoading:false,
    listCountErr :null
}

const listCountReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_COUNT_REQUEST:{
            state.listCount = [];
            state.listCountLoading = true;
            state.listCountErr = null;

            return {...state}
        }

        case FETCH_LIST_COUNT_SUCCESS:{
            state.listCount = action.data;
            state.listCountLoading = false;
            state.listCountErr = null;

            return {...state}
        }

        case FETCH_LIST_COUNT_FALIED:{
            state.listCount = [];
            state.listCountLoading = false;
            state.listCountErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listCountReducer




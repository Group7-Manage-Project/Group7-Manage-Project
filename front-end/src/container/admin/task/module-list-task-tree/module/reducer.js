import{
    FETCH_LIST_TASK_TREE_REQUEST,
    FETCH_LIST_TASK_TREE_SUCCESS,
    FETCH_LIST_TASK_TREE_FALIED,
} from './constant'


let initialState = {
    listTaskTree: [],
    listTaskTreeLoading:false,
    listTaskTreeErr :null
}

const listTaskTreeReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_TASK_TREE_REQUEST:{
            state.listTaskTree = [];
            state.listTaskTreeLoading = true;
            state.listTaskTreeErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_TREE_SUCCESS:{
            state.listTaskTree = action.data;
            state.listTaskTreeLoading = false;
            state.listTaskTreeErr = null;

            return {...state}
        }

        case FETCH_LIST_TASK_TREE_FALIED:{
            state.listTaskTree = [];
            state.listTaskTreeLoading = false;
            state.listTaskTreeErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listTaskTreeReducer
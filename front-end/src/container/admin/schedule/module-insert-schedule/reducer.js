import { 
    POST_SCHEDULE_REQUEST,
    POST_SCHEDULE_SUCCESS,
    POST_SCHEDULE_FALIED
} 
    from './constant.js'

    let initialState = {
        scheduleInsert: "",
        scheduleInsertLoading:false,
        scheduleInsertErr :null
    }

    const scheduleInsertReducer = (state = initialState, action )=>{
        switch(action.type){

            case POST_SCHEDULE_REQUEST:{
                state.scheduleInsert = "";
                state.scheduleInsertLoading = true;
                state.scheduleInsertErr = null;

                return {...state}
            }

            case POST_SCHEDULE_SUCCESS:{
                state.scheduleInsert = action.data;
                state.scheduleInsertLoading = false;
                state.scheduleInsertErr = null;

                return {...state}
            }

            case POST_SCHEDULE_FALIED:{
                state.scheduleInsert = "";
                state.scheduleInsertLoading = false;
                state.scheduleInsertErr = action.err;
                
                return {...state}
            }

            default:
                return{...state}
        }
    }

    export default scheduleInsertReducer




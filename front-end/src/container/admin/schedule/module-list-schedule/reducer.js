import{
    FETCH_LIST_SCHEDULE_REQUEST,
    FETCH_LIST_SCHEDULE_SUCCESS,
    FETCH_LIST_SCHEDULE_FALIED,
} from './constant'

let initialState = {
    listSchedule: [],
    listScheduleLoading:false,
    listScheduleErr :null
}

const listScheduleReducer = (state = initialState, action )=>{
    switch(action.type){

        case FETCH_LIST_SCHEDULE_REQUEST:{
            state.listSchedule = [];
            state.listScheduleLoading = true;
            state.listScheduleErr = null;

            return {...state}
        }

        case FETCH_LIST_SCHEDULE_SUCCESS:{
            state.listSchedule = action.data;
            state.listScheduleLoading = false;
            state.listScheduleErr = null;

            return {...state}
        }

        case FETCH_LIST_SCHEDULE_FALIED:{
            state.listSchedule = [];
            state.listScheduleLoading = false;
            state.listScheduleErr = action.err;
            
            return {...state}
        }

        default:
            return{...state}
    }
}

export default listScheduleReducer




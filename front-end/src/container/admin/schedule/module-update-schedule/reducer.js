import {
    UPDATE_SCHEDULE_REQUEST,
    UPDATE_SCHEDULE_SUCCESS,
    UPDATE_SCHEDULE_FALIED
} from "./constant"

let initialState = {
    scheduleUpdate:"",
    scheduleUpdateLoading:false,
    scheduleUpdateErr: null
}

const updateScheduleReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_SCHEDULE_REQUEST:{
            state.scheduleUpdate =  ""
            state.scheduleUpdateLoading = true
            state.scheduleUpdateErr = null

            return {...state}
        }
        case UPDATE_SCHEDULE_SUCCESS:{
            state.scheduleUpdate = action.data
            state.scheduleUpdateLoading = false
            state.scheduleUpdateErr = null

            return {...state}
        }

        case UPDATE_SCHEDULE_FALIED:{
            state.scheduleUpdate =  ""
            state.scheduleUpdateLoading = false
            state.scheduleUpdateErr = action.err

            return {...state}
        }
            
            
    
        default:
            return {...state}
            
    }

}

export default updateScheduleReducer
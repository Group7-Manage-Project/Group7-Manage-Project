import {
    DELETE_SCHEDULE_REQUEST,
    DELETE_SCHEDULE_SUCCESS,
    DELETE_SCHEDULE_FALIED
}from "./constant"

let initialState ={
    deleteSchedule : "",
    deleteScheduleLoading:false,
    deleteScheduleErr: null
}

const deleteScheduleReducer = (state = initialState, aciton) =>{
    switch(aciton.type){
        case DELETE_SCHEDULE_REQUEST:{
            state.deleteSchedule = ""
            state.deleteScheduleLoading = true
            state.deleteScheduleErr = null

            return {...state}
        }

        case DELETE_SCHEDULE_SUCCESS:{
            state.deleteSchedule = aciton.data
            state.deleteScheduleLoading = false
            state.deleteScheduleErr = null

            return {...state}
        }


        case DELETE_SCHEDULE_FALIED:{
            state.deleteSchedule = ""
            state.deleteScheduleLoading = false
            state.deleteScheduleErr = aciton.err

            return {...state}
        }

        default:
            return {...state}
    }
}

export default deleteScheduleReducer
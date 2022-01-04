import {
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FALIED
} from "./constant"

let initialState = {
    taskUpdate:"",
    taskUpdateLoading:false,
    taskUpdateErr: null
}

const taskUpdateReducer = (state = initialState, action) =>{
    switch (action.type) {
        case UPDATE_TASK_REQUEST:{
            state.taskUpdate =  ""
            state.taskUpdateLoading = true
            state.taskUpdateErr = null

            return {...state}
        }
        case UPDATE_TASK_SUCCESS:{
            state.taskUpdate = action.data
            state.taskUpdateLoading = false
            state.taskUpdateErr = null

            return {...state}
        }

        case UPDATE_TASK_FALIED:{
            state.taskUpdate =  ""
            state.taskUpdateLoading = false
            state.taskUpdateErr = action.err

            return {...state}
        }
            
            
    
        default:
            return {...state}
            
    }

}

export default taskUpdateReducer
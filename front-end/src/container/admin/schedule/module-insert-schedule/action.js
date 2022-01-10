import { 
    POST_SCHEDULE_REQUEST,
    POST_SCHEDULE_SUCCESS,
    POST_SCHEDULE_FALIED
} 
    from './constant.js'

import Axios from 'axios'
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actPostSchedulesAPI = schedule =>{
    return dispatch =>{
        dispatch(actPostScheduleRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/schedule/insert",
            data:schedule,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actPostScheduleSuccess(result.data))
            toast.success("Create Schedule Success",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
            console.log(result.data)
        })
        .catch(err =>{
            dispatch(actPostScheduleFailed(err))
            toast.error("Create Schedule Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        
    }
}


export const actPostScheduleRequest = () =>{
    return{
        type:POST_SCHEDULE_REQUEST
    }
}

export const actPostScheduleSuccess = data =>{
    return {
        type: POST_SCHEDULE_SUCCESS,
        data
    }
}

export const actPostScheduleFailed = err =>{
    return {
        type: POST_SCHEDULE_FALIED,
        err
    }
}
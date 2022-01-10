import {
    UPDATE_SCHEDULE_REQUEST,
    UPDATE_SCHEDULE_SUCCESS,
    UPDATE_SCHEDULE_FALIED
} from "./constant"
import Axios from "axios"
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actUpdateSchedulesAPI = scheduleUpdate =>{
    return dispatch  =>{
        dispatch(actUpdateScheduleRequest())
        Axios({
            method: "PUT",
            url:"http://localhost:9999/api/schedule/update",
            data:scheduleUpdate,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actUpdateScheduleSuccess(result.data))
            console.log(result.data)
            toast.success("Update Schedule Successful",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actUpdateScheduleFailed(err))
            toast.error("Update Schedule Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
    }
}

export const actUpdateScheduleRequest = () =>{
    return{
        type: UPDATE_SCHEDULE_REQUEST
    }
}

export const actUpdateScheduleSuccess = data =>{
    return{
        type: UPDATE_SCHEDULE_SUCCESS,
        data
    }
}

export const actUpdateScheduleFailed = err =>{
    return {
        type: UPDATE_SCHEDULE_FALIED,
        err
    }
}
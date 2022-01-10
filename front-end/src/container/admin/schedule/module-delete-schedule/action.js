import {
    DELETE_SCHEDULE_REQUEST,
    DELETE_SCHEDULE_SUCCESS,
    DELETE_SCHEDULE_FALIED
}from "./constant"
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"

import Axios from "axios"

export const actDeleteDeleteAPI = IdSchedule =>{
    return dispatch =>{
        console.log("employee_id action", IdSchedule)
        dispatch(actDeleteDeleteRequest())
        Axios({
            method:"DELETE",
            url:`http://localhost:9999/api/schedule/delete/${IdSchedule}`,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actDeleteDeleteSuccess(result.data))
            console.log("delete user", result.data)
            toast.success("Delete Schedule Success",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
            console.log(result.data)
        })
        .catch(err =>{
            dispatch(actDeleteDeleteFailed(err))
            toast.error("Delete Schedule Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
    }
}

export const actDeleteDeleteRequest = () =>{
    return {
        type: DELETE_SCHEDULE_REQUEST
    }
}

export const actDeleteDeleteSuccess = data =>{
    return {
        type:DELETE_SCHEDULE_SUCCESS,
        data
    }
}

export const actDeleteDeleteFailed = err =>{
    return {
        type:DELETE_SCHEDULE_FALIED,
        err
    }
}
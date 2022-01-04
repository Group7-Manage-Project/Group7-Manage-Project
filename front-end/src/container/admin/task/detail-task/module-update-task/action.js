import {
    UPDATE_TASK_REQUEST,
    UPDATE_TASK_SUCCESS,
    UPDATE_TASK_FALIED
} from "./constant"
import Axios from "axios"
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actUpdateTasksAPI = task =>{
    return dispatch  =>{
        dispatch(actUpdateTaskRequest())
        Axios({
            method: "PUT",
            url:"http://localhost:9999/api/task/update",
            data:task,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actUpdateTaskSuccess(result.data))
            console.log(result.data)
            toast.success("Update Task Successful",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actUpdateTaskFailed(err))
            toast.error("Update Task Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
    }
}

export const actUpdateTaskRequest = () =>{
    return{
        type: UPDATE_TASK_REQUEST
    }
}

export const actUpdateTaskSuccess = data =>{
    return{
        type: UPDATE_TASK_SUCCESS,
        data
    }
}

export const actUpdateTaskFailed = err =>{
    return {
        type: UPDATE_TASK_FALIED,
        err
    }
}
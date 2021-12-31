import{
    POST_TASK_REQUEST,
    POST_TASK_SUCCESS,
    POST_TASK_FALIED
} from './constant'
import Axios from 'axios'
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actPostTaskAPI = taskInsert =>{
    return dispatch =>{
        dispatch(actPostTaskRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/task/insert",
            data:taskInsert,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actPostTaskSuccess(result.data))
            console.log(result.data)
            toast.success("Create Task Success",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actPostTaskFailed(err))
            toast.error("Create Task Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        
    }
}


export const actPostTaskRequest = () =>{
    return{
        type:POST_TASK_REQUEST
    }
}

export const actPostTaskSuccess = data =>{
    return {
        type: POST_TASK_SUCCESS,
        data
    }
}

export const actPostTaskFailed = err =>{
    return {
        type: POST_TASK_FALIED,
        err
    }
}
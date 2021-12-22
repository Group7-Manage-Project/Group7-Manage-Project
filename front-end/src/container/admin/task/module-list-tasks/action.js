import{
    FETCH_LIST_TASK_REQUEST,
    FETCH_LIST_TASK_SUCCESS,
    FETCH_LIST_TASK_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListTaskAPI = () =>{
    return dispatch =>{
        dispatch(actFetchListTaskRequest())
        Axios({
            method:"GET",
            url:"http://localhost:9999/api/task/list",
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListTaskSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListTaskFailed(err))
        })

    }
}

export const actFetchListTaskRequest = () =>{
    return {
        type:FETCH_LIST_TASK_REQUEST
    }
}

export const actFetchListTaskSuccess = data =>{
    return {
        type:FETCH_LIST_TASK_SUCCESS,
        data
    }
}

export const actFetchListTaskFailed = err =>{
    return {
        type:FETCH_LIST_TASK_FALIED,
        err
    }
}


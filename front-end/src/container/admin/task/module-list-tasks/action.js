import{
    FETCH_LIST_TASK_REQUEST,
    FETCH_LIST_TASK_SUCCESS,
    FETCH_LIST_TASK_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListTaskAPI = search_task =>{
    let page = ""
    if(localStorage.getItem("page")){
        page = JSON.parse(localStorage.getItem("page"));
    }
    return dispatch =>{
        dispatch(actFetchListTaskRequest())
        Axios({
            method:"POST",
            url:`http://localhost:9999/api/task/list/page=${page}`,
            data: search_task,
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


import {
    FETCH_DETAIL_TASK_EMPLOYEES_REQUEST,
    FETCH_DETAIL_TASK_EMPLOYEES_SUCCESS,
    FETCH_DETAIL_TASK_EMPLOYEES_FALIED 
} from './constant'

import Axios from 'axios'

export const actFetchDetailTaskAPI = task_id =>{
    return dispatch =>{
        dispatch(actFetchDetailTaskRequest())
        Axios({
            method:"GET",
            url:`http://localhost:9999/api/task/detail/${task_id}`
        })
        .then(result =>{
            dispatch(actFetchDetailTaskSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchDetailTaskFailed(err))
        })

    }
}

export const actFetchDetailTaskRequest = () =>{
    return {
        type:FETCH_DETAIL_TASK_EMPLOYEES_REQUEST
    }
}

export const actFetchDetailTaskSuccess = data =>{
    return {
        type:FETCH_DETAIL_TASK_EMPLOYEES_SUCCESS,
        data
    }
}

export const actFetchDetailTaskFailed = err =>{
    return {
        type:FETCH_DETAIL_TASK_EMPLOYEES_FALIED,
        err
    }
}
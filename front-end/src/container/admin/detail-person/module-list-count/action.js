import{
    FETCH_LIST_COUNT_REQUEST,
    FETCH_LIST_COUNT_SUCCESS,
    FETCH_LIST_COUNT_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListCountAPI = employee_id =>{
    return dispatch =>{
        dispatch(actFetchListCountRequest())
        Axios({
            method:"GET",
            url:`http://localhost:9999/api/task/get_count_task_by_employee_id/${employee_id}`,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListCountSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListCountFailed(err))
        })

    }
}

export const actFetchListCountRequest = () =>{
    return {
        type:FETCH_LIST_COUNT_REQUEST
    }
}

export const actFetchListCountSuccess = data =>{
    return {
        type:FETCH_LIST_COUNT_SUCCESS,
        data
    }
}

export const actFetchListCountFailed = err =>{
    return {
        type:FETCH_LIST_COUNT_FALIED,
        err
    }
}


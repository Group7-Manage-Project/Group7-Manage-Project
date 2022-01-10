import{
    FETCH_LIST_TASK_TO_DO_REQUEST,
    FETCH_LIST_TASK_TO_DO_SUCCESS,
    FETCH_LIST_TASK_TO_DO_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListTaskToDoAPI = user =>{
    return dispatch =>{
        dispatch(actFetchListTaskToDoRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/task/to-do",
            data: user,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListTaskToDoSuccess(result.data))
            console.log("list task to do ",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListTaskToDoFailed(err))
        })

    }
}

export const actFetchListTaskToDoRequest = () =>{
    return {
        type:FETCH_LIST_TASK_TO_DO_REQUEST
    }
}

export const actFetchListTaskToDoSuccess = data =>{
    return {
        type:FETCH_LIST_TASK_TO_DO_SUCCESS,
        data
    }
}

export const actFetchListTaskToDoFailed = err =>{
    return {
        type:FETCH_LIST_TASK_TO_DO_FALIED,
        err
    }
}


import{
    FETCH_LIST_TASK_DONE_REQUEST,
    FETCH_LIST_TASK_DONE_SUCCESS,
    FETCH_LIST_TASK_DONE_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListTaskDoneAPI = user =>{
    return dispatch =>{
        dispatch(actFetchListTaskDoneRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/task/done",
            data: user,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListTaskDoneSuccess(result.data))
            console.log("list task to do ",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListTaskDoneFailed(err))
        })

    }
}

export const actFetchListTaskDoneRequest = () =>{
    return {
        type:FETCH_LIST_TASK_DONE_REQUEST
    }
}

export const actFetchListTaskDoneSuccess = data =>{
    return {
        type:FETCH_LIST_TASK_DONE_SUCCESS,
        data
    }
}

export const actFetchListTaskDoneFailed = err =>{
    return {
        type:FETCH_LIST_TASK_DONE_FALIED,
        err
    }
}


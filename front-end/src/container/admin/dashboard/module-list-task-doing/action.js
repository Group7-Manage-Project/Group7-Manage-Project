import{
    FETCH_LIST_TASK_DOING_REQUEST,
    FETCH_LIST_TASK_DOING_SUCCESS,
    FETCH_LIST_TASK_DOING_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListTaskDoingAPI = user =>{
    return dispatch =>{
        dispatch(actFetchListTaskDoingoRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/task/doing",
            data: user,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListTaskDoingSuccess(result.data))
            console.log("list task doing ",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListTaskDoingFailed(err))
        })

    }
}

export const actFetchListTaskDoingoRequest = () =>{
    return {
        type:FETCH_LIST_TASK_DOING_REQUEST
    }
}

export const actFetchListTaskDoingSuccess = data =>{
    return {
        type:FETCH_LIST_TASK_DOING_SUCCESS,
        data
    }
}

export const actFetchListTaskDoingFailed = err =>{
    return {
        type:FETCH_LIST_TASK_DOING_FALIED,
        err
    }
}


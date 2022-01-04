import{
    FETCH_LIST_COMMENT_REQUEST,
    FETCH_LIST_COMMENT_SUCCESS,
    FETCH_LIST_COMMENT_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListCommentAPI = task_id =>{
    return dispatch =>{
        console.log("data task_id", task_id)
        dispatch(actFetchListCommentRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/comment_task/list",
            data: task_id,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListCommentSuccess(result.data))
            console.log("comment list ",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListCommentFailed(err))
        })

    }
}

export const actFetchListCommentRequest = () =>{
    return {
        type:FETCH_LIST_COMMENT_REQUEST
    }
}

export const actFetchListCommentSuccess = data =>{
    return {
        type:FETCH_LIST_COMMENT_SUCCESS,
        data
    }
}

export const actFetchListCommentFailed = err =>{
    return {
        type:FETCH_LIST_COMMENT_FALIED,
        err
    }
}


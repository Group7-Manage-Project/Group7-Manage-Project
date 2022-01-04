import{
    POST_COMMENT_REQUEST,
    POST_COMMENT_SUCCESS,
    POST_COMMENT_FALIED
} from './constant'
import Axios from 'axios'
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actPostCommentAPI = comment =>{
    return dispatch =>{
        dispatch(actPostCommentRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/comment_task/insert",
            data:comment,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actPostCommentSuccess(result.data))
            console.log(result.data)
            toast.success("Create Task Success",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actPostCommentFailed(err))
            toast.error("Create Task Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        
    }
}


export const actPostCommentRequest = () =>{
    return{
        type:POST_COMMENT_REQUEST
    }
}

export const actPostCommentSuccess = data =>{
    return {
        type: POST_COMMENT_SUCCESS,
        data
    }
}

export const actPostCommentFailed = err =>{
    return {
        type: POST_COMMENT_FALIED,
        err
    }
}
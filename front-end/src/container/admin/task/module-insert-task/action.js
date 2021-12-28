import{
    POST_TASK_REQUEST,
    POST_TASK_SUCCESS,
    POST_TASK_FALIED
} from './constant'
import Axios from 'axios'
import  Cookies  from 'js-cookie';

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
        })
        .catch(err =>{
            dispatch(actPostTaskFailed(err))
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
import{
    POST_CATEGORY_REQUEST,
    POST_CATEGORY_SUCCESS,
    POST_CATEGORY_FALIED
} from './constant'
import Axios from 'axios'
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actPostCategoryAPI = categoryInsert =>{
    return dispatch =>{
        dispatch(actPostCategoryRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/category_task/insert",
            data:categoryInsert,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actPostCategorySuccess(result.data))
            console.log(result.data)
            toast.success("Create Category Success",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actPostCategoryFailed(err))
            toast.error("Create Category Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        
    }
}


export const actPostCategoryRequest = () =>{
    return{
        type:POST_CATEGORY_REQUEST
    }
}

export const actPostCategorySuccess = data =>{
    return {
        type: POST_CATEGORY_SUCCESS,
        data
    }
}

export const actPostCategoryFailed = err =>{
    return {
        type: POST_CATEGORY_FALIED,
        err
    }
}
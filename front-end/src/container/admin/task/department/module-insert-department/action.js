import{
    POST_DEPARTMENT_REQUEST,
    POST_DEPARTMENT_SUCCESS,
    POST_DEPARTMENT_FALIED
} from './constant'
import Axios from 'axios'
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actPostDepartmentAPI = departmentInsert =>{
    return dispatch =>{
        dispatch(actPostDepartmentRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/departments/insert",
            data:departmentInsert,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actPostDepartmentSuccess(result.data))
            console.log(result.data)
            toast.success("Create Department Success",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actPostDepartmentFailed(err))
            toast.error("Create Department Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        
    }
}


export const actPostDepartmentRequest = () =>{
    return{
        type:POST_DEPARTMENT_REQUEST
    }
}

export const actPostDepartmentSuccess = data =>{
    return {
        type: POST_DEPARTMENT_SUCCESS,
        data
    }
}

export const actPostDepartmentFailed = err =>{
    return {
        type: POST_DEPARTMENT_FALIED,
        err
    }
}
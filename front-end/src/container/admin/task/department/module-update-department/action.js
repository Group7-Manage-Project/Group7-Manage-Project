import {
    UPDATE_DEPARTMENT_REQUEST,
    UPDATE_DEPARTMENT_SUCCESS,
    UPDATE_DEPARTMENT_FALIED
} from "./constant"
import Axios from "axios"
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actUpdateDepartmentsAPI = departmentUpdate =>{
    return dispatch  =>{
        dispatch(actUpdateDepartmentRequest())
        Axios({
            method: "PUT",
            url:"http://localhost:9999/api/departments/update",
            data:departmentUpdate,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actUpdateDepartmentSuccess(result.data))
            console.log(result.data)
            toast.success("Update Department Successful",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actUpdateDepartmentFailed(err))
            toast.error("Update Department Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
    }
}

export const actUpdateDepartmentRequest = () =>{
    return{
        type: UPDATE_DEPARTMENT_REQUEST
    }
}

export const actUpdateDepartmentSuccess = data =>{
    return{
        type: UPDATE_DEPARTMENT_SUCCESS,
        data
    }
}

export const actUpdateDepartmentFailed = err =>{
    return {
        type: UPDATE_DEPARTMENT_FALIED,
        err
    }
}
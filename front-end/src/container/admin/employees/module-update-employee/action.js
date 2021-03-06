import {
    UPDATE_EMPLOYEES_REQUEST,
    UPDATE_EMPLOYEES_SUCCESS,
    UPDATE_EMPLOYEES_FALIED
} from "./constant"
import Axios from "axios"
import  Cookies  from 'js-cookie';
import {toast} from "react-toastify"


export const actUpdateEmployeesAPI = userUpdate =>{
    return dispatch  =>{
        dispatch(actUpdateEmployeeRequest())
        Axios({
            method: "PUT",
            url:"http://localhost:9999/api/staff/update",
            data:userUpdate,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actUpdateEmployeeSuccess(result.data))
            console.log(result.data)
            toast.success("Update Employee Successful",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
        .catch(err =>{
            dispatch(actUpdateEmployeeFailed(err))
            toast.error("Update Employee Failed",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
        })
    }
}

export const actUpdateEmployeeRequest = () =>{
    return{
        type: UPDATE_EMPLOYEES_REQUEST
    }
}

export const actUpdateEmployeeSuccess = data =>{
    return{
        type: UPDATE_EMPLOYEES_SUCCESS,
        data
    }
}

export const actUpdateEmployeeFailed = err =>{
    return {
        type: UPDATE_EMPLOYEES_FALIED,
        err
    }
}
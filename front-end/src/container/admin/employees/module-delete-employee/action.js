import {
        DELETE_EMPLOYEES_REQUEST,
        DELETE_EMPLOYEES_SUCCESS,
        DELETE_EMPLOYEES_FALIED
}from "./constant"

import Axios from "axios"

export const actDeleteEmployeeAPI = employee_id =>{
    return dispatch =>{
        console.log("employee_id action", employee_id)
        dispatch(actDeleteEmployeeRequest())
        Axios({
            method:"DELETE",
            url:`http://localhost:9999/api/staff/delete/${employee_id}`
        })
        .then(result =>{
            dispatch(actDeleteEmployeeSuccess(result.data))
            console.log("delete user", result.data)
        })
        .catch(err =>{
            dispatch(actDeleteEmployeeFailed(err))
        })
    }
}

export const actDeleteEmployeeRequest = () =>{
    return {
        type: DELETE_EMPLOYEES_REQUEST
    }
}

export const actDeleteEmployeeSuccess = data =>{
    return {
        type:DELETE_EMPLOYEES_SUCCESS,
        data
    }
}

export const actDeleteEmployeeFailed = err =>{
    return {
        type:DELETE_EMPLOYEES_FALIED,
        err
    }
}
import {
    DELETE_EMPLOYEES_FLG_REQUEST,
    DELETE_EMPLOYEES_FLG_SUCCESS,
    DELETE_EMPLOYEES_FLG_FALIED
} from "./constant"
import Axios from "axios"

export const actDeleteEmployeeFlgAPI = deleteFlgEmployee =>{
    return dispatch =>{
        dispatch(actDeleteEmployeeFlgRequest())
        Axios({
            method:"PUT",
            url:"http://localhost:9999/api/staff/delete-flag",
            data: deleteFlgEmployee
        })
        .then(result =>{
            dispatch(actDeleteEmployeeFlgSuccess(result.data))
            console.log("change flg", result.data)
        })
        .catch(err =>{
            dispatch(actDeleteEmployeeFlgFalied(err))
        })
    }
}

export const actDeleteEmployeeFlgRequest = () =>{
    return{
        type:DELETE_EMPLOYEES_FLG_REQUEST
    }
}

export const actDeleteEmployeeFlgSuccess = data =>{
    return{
        type:DELETE_EMPLOYEES_FLG_SUCCESS,
        data
    }
}

export const actDeleteEmployeeFlgFalied = err =>{
    return{
        type:DELETE_EMPLOYEES_FLG_FALIED,
        err
    }
}
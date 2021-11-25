import {
    FETCH_LIST_EMPLOYEES_REQUEST,
    FETCH_LIST_EMPLOYEES_SUCCESS,
    FETCH_LIST_EMPLOYEES_FALIED
} from './constant'

import  Axios  from "axios"

export const actFetchListEmployeesAPI = () =>{
    return dispatch =>{
        dispatch(actFetchListEmployeesRequest())
        Axios({
            method:"GET",
            url:"http://localhost:9999/api/staff/list"
        })
        .then(result =>{
            dispatch(actFetchListEmployeesSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListEmployeesFailed(err))
        })

    }
}

export const actFetchListEmployeesRequest = () =>{
    return {
        type:FETCH_LIST_EMPLOYEES_REQUEST
    }
}

export const actFetchListEmployeesSuccess = data =>{
    return {
        type:FETCH_LIST_EMPLOYEES_SUCCESS,
        data
    }
}

export const actFetchListEmployeesFailed = err =>{
    return {
        type:FETCH_LIST_EMPLOYEES_FALIED,
        err
    }
}


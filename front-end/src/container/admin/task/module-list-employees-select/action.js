import {
    FETCH_LIST_EMPLOYEES_SELECT_REQUEST,
    FETCH_LIST_EMPLOYEES_SELECT_SUCCESS,
    FETCH_LIST_EMPLOYEES_SELECT_FALIED
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListEmployeesSelectAPI = () =>{
    return dispatch =>{
        dispatch(actFetchListEmployeesSelectRequest())
        Axios({
            method:"GET",
            url:"http://localhost:9999/api/staff/list-name-image",
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListEmployeesSelectSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListEmployeesSelectFailed(err))
        })

    }
}

export const actFetchListEmployeesSelectRequest = () =>{
    return {
        type:FETCH_LIST_EMPLOYEES_SELECT_REQUEST
    }
}

export const actFetchListEmployeesSelectSuccess = data =>{
    return {
        type:FETCH_LIST_EMPLOYEES_SELECT_SUCCESS,
        data
    }
}

export const actFetchListEmployeesSelectFailed = err =>{
    return {
        type:FETCH_LIST_EMPLOYEES_SELECT_FALIED,
        err
    }
}
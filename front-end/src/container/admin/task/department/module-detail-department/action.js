import {
    FETCH_DETAIL_DEPARTMENT_REQUEST,
    FETCH_DETAIL_DEPARTMENT_SUCCESS,
    FETCH_DETAIL_DEPARTMENT_FALIED 
} from './constant'

import Axios from 'axios'
import  Cookies  from 'js-cookie';

export  const  actFetchDetailDepartmentAPI = department_id =>{
    return dispatch =>{
        dispatch(actFetchDetailDepartmentRequest())
        Axios({
            method:"GET",
            url:`http://localhost:9999/api/departments/detail/${department_id}`,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchDetailDepartmentSuccess(result.data))     
            console.log("data detail department",result.data)
        })
        .catch(err =>{
            dispatch(actFetchDetailDepartmentFailed(err))
        })

    }
}

export const actFetchDetailDepartmentRequest = () =>{
    return {
        type:FETCH_DETAIL_DEPARTMENT_REQUEST
    }
}

export const actFetchDetailDepartmentSuccess = data =>{
    return {
        type:FETCH_DETAIL_DEPARTMENT_SUCCESS,
        data
    }
}

export const actFetchDetailDepartmentFailed = err =>{
    return {
        type:FETCH_DETAIL_DEPARTMENT_FALIED,
        err
    }
}
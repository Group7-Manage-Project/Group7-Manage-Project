import{
    FETCH_LIST_DEPARTMENT_REQUEST,
    FETCH_LIST_DEPARTMENT_SUCCESS,
    FETCH_LIST_DEPARTMENT_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListDepartmentAPI = () =>{
    return dispatch =>{
        dispatch(actFetchListDepartmentRequest())
        Axios({
            method:"GET",
            url:"http://localhost:9999/api/departments/list",
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListDepartmentSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListDepartmentFailed(err))
        })

    }
}

export const actFetchListDepartmentRequest = () =>{
    return {
        type:FETCH_LIST_DEPARTMENT_REQUEST
    }
}

export const actFetchListDepartmentSuccess = data =>{
    return {
        type:FETCH_LIST_DEPARTMENT_SUCCESS,
        data
    }
}

export const actFetchListDepartmentFailed = err =>{
    return {
        type:FETCH_LIST_DEPARTMENT_FALIED,
        err
    }
}


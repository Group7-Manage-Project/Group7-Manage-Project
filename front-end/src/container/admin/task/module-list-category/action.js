import {
    FETCH_LIST_CATEGORY_REQUEST,
    FETCH_LIST_CATEGORY_SUCCESS,
    FETCH_LIST_CATEGORY_FALIED
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListCategoryAPI = () =>{
    return dispatch =>{
        dispatch(actFetchListCategoryRequest())
        Axios({
            method:"GET",
            url:"http://localhost:9999/api/category_task/list",
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListCategorySuccess(result.data))
            console.log("data category",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListCategoryFailed(err))
            console.log("err LIST CATEGORY", err)
        })

    }
}

export const actFetchListCategoryRequest = () =>{
    return {
        type:FETCH_LIST_CATEGORY_REQUEST
    }
}

export const actFetchListCategorySuccess = data =>{
    return {
        type:FETCH_LIST_CATEGORY_SUCCESS,
        data
    }
}

export const actFetchListCategoryFailed = err =>{
    return {
        type:FETCH_LIST_CATEGORY_FALIED,
        err
    }
}
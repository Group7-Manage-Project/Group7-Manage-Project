import {
    FETCH_COUNT_CATEGORY_REQUEST ,
    FETCH_COUNT_CATEGORY_SUCCESS,
    FETCH_COUNT_CATEGORY_FALIED
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchCountCategoryAPI = () =>{
    return dispatch =>{
        dispatch(actFetchCountCategoryRequest())
        Axios({
            method:"GET",
            url:"http://localhost:9999/api/task/count/category",
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchCountCategorySuccess(result.data))
            console.log("data",result.data)
            console.log(1)
        })
        .catch(err =>{
            dispatch(actFetchCountCategoryFailed(err))
        })

    }
}

export const actFetchCountCategoryRequest = () =>{
    return {
        type:FETCH_COUNT_CATEGORY_REQUEST
    }
}

export const actFetchCountCategorySuccess = data =>{
    return {
        type:FETCH_COUNT_CATEGORY_SUCCESS,
        data
    }
}

export const actFetchCountCategoryFailed = err =>{
    return {
        type:FETCH_COUNT_CATEGORY_FALIED,
        err
    }
}
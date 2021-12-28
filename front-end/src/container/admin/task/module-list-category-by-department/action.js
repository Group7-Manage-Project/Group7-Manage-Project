import{
    FETCH_LIST_CATEGORY_BY_DEPARTMENT_REQUEST,
    FETCH_LIST_CATEGORY_BY_DEPARTMENT_SUCCESS,
    FETCH_LIST_CATEGORY_BY_DEPARTMENT_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListCategoryByDepartmentAPI = department_id =>{
    return dispatch =>{
        dispatch(actFetchListCategoryByDepartmentRequest())
        Axios({
            method:"POST",
            url:"http://localhost:9999/api/category_task/list-category-by-department",
            data: department_id,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListCategoryByDepartmentSuccess(result.data))
            console.log("data list category by department ",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListCategoryByDepartmentFailed(err))
        })

    }
}

export const actFetchListCategoryByDepartmentRequest = () =>{
    return {
        type:FETCH_LIST_CATEGORY_BY_DEPARTMENT_REQUEST
    }
}

export const actFetchListCategoryByDepartmentSuccess = data =>{
    return {
        type:FETCH_LIST_CATEGORY_BY_DEPARTMENT_SUCCESS,
        data
    }
}

export const actFetchListCategoryByDepartmentFailed = err =>{
    return {
        type:FETCH_LIST_CATEGORY_BY_DEPARTMENT_FALIED,
        err
    }
}


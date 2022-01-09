import{
    FETCH_LIST_SCHEDULE_REQUEST,
    FETCH_LIST_SCHEDULE_SUCCESS,
    FETCH_LIST_SCHEDULE_FALIED,
} from './constant'

import  Axios  from "axios"
import  Cookies  from 'js-cookie';

export const actFetchListScheduleAPI = employee_id =>{
    return dispatch =>{
        dispatch(actFetchListScheduleRequest())
        Axios({
            method:"GET",
            url:`http://localhost:9999/api/schedule/detail/${employee_id}`,
            headers:{
                Authorization:`Bearer ${Cookies.get('user')}`
            }
        })
        .then(result =>{
            dispatch(actFetchListScheduleSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListScheduleFailed(err))
        })

    }
}

export const actFetchListScheduleRequest = () =>{
    return {
        type:FETCH_LIST_SCHEDULE_REQUEST
    }
}

export const actFetchListScheduleSuccess = data =>{
    return {
        type:FETCH_LIST_SCHEDULE_SUCCESS,
        data
    }
}

export const actFetchListScheduleFailed = err =>{
    return {
        type:FETCH_LIST_SCHEDULE_FALIED,
        err
    }
}


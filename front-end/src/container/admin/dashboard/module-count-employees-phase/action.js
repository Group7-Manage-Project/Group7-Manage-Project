import {
    FETCH_COUNT_EMPLOYEES_PHASE_REQUEST,
    FETCH_COUNT_EMPLOYEES_PHASE_SUCCESS,
    FETCH_COUNT_EMPLOYEES_PHASE_FALIED
} from './constant'

import  Axios  from "axios"

export const actFetchCountEmployeesPhaseAPI = () =>{
    return dispatch =>{
        dispatch(actFetchCountEmployeesPhaseRequest())
        Axios({
            method:"GET",
            url:"http://localhost:9999/api/task/count/employee-phase"
        })
        .then(result =>{
            dispatch(actFetchCountEmployeesPhaseSuccess(result.data))
            console.log("data",result.data)
            console.log(1)
        })
        .catch(err =>{
            dispatch(actFetchCountEmployeesPhaseFailed(err))
        })

    }
}

export const actFetchCountEmployeesPhaseRequest = () =>{
    return {
        type:FETCH_COUNT_EMPLOYEES_PHASE_REQUEST
    }
}

export const actFetchCountEmployeesPhaseSuccess = data =>{
    return {
        type:FETCH_COUNT_EMPLOYEES_PHASE_SUCCESS,
        data
    }
}

export const actFetchCountEmployeesPhaseFailed = err =>{
    return {
        type:FETCH_COUNT_EMPLOYEES_PHASE_FALIED,
        err
    }
}
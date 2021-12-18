import{
    FETCH_LIST_TASK_TREE_REQUEST,
    FETCH_LIST_TASK_TREE_SUCCESS,
    FETCH_LIST_TASK_TREE_FALIED,
} from './constant'

import  Axios  from "axios"

export const actFetchListTaskTreeAPI = () =>{
    return dispatch =>{
        dispatch(actFetchListTaskTreeRequest())
        Axios({
            method:"GET",
            url:"http://movie0706.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=cgv&maNhom=GP01"
        })
        .then(result =>{
            dispatch(actFetchListTaskTreeSuccess(result.data))
            console.log("data",result.data)
        })
        .catch(err =>{
            dispatch(actFetchListTaskTreeFailed(err))
        })

    }
}

export const actFetchListTaskTreeRequest = () =>{
    return {
        type:FETCH_LIST_TASK_TREE_REQUEST
    }
}

export const actFetchListTaskTreeSuccess = data =>{
    return {
        type:FETCH_LIST_TASK_TREE_SUCCESS,
        data
    }
}

export const actFetchListTaskTreeFailed = err =>{
    return {
        type:FETCH_LIST_TASK_TREE_FALIED,
        err
    }
}


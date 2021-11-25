import {POST_SIGN_IN_REQUEST,
    POST_SIGN_IN_SUCCESS,
    POST_SIGN_IN_FAILED
} 
    from './constant'
import Axios from 'axios'

export const PostSignInAPI = (user,history) =>{
    return dispatch =>{
        dispatch(PostSignInRequest())
        Axios({
            method:'POST',
            url:'http://localhost:9999/api/staff/login',
            data:user
        })
        .then(result =>{
            dispatch(PostSignInSuccess(result.data))
            history.push("/admin/dashboard")
            console.log("login",result.data)
            localStorage.setItem("user",JSON.stringify(result.data.staff[0].FULL_NAME))
            localStorage.setItem("accessToken",JSON.stringify(result.data.access_token))
            

        })
        .catch(err =>{
            dispatch(PostSignInFalied(err))
           
           
        })
    }
}

export const PostSignInRequest = () =>{
    return{
        type:POST_SIGN_IN_REQUEST
    }
}

export const PostSignInSuccess = data =>{
    return{
        type:POST_SIGN_IN_SUCCESS,
        data
    }
}

export const PostSignInFalied = err =>{
    return{
        type:POST_SIGN_IN_FAILED,
        err
    }
}
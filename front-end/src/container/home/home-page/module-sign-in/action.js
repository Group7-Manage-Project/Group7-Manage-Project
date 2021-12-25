import {POST_SIGN_IN_REQUEST,
    POST_SIGN_IN_SUCCESS,
    POST_SIGN_IN_FAILED
} 
    from './constant'
import Axios from 'axios'
import  Cookies  from 'js-cookie';
import { toast} from "react-toastify"
import {Redirect} from 'react-router-dom'

export const PostSignInAPI = (user) =>{
    return dispatch =>{
        dispatch(PostSignInRequest())
        console.log("user", user)
        Axios({
            method:'POST',
            url:'http://localhost:9999/api/staff/login',
            data:user
        })
        .then(result =>{
            dispatch(PostSignInSuccess(result.data))
            Cookies.set('user', result.data.access_token , { expires: 1 })
            localStorage.setItem("user",JSON.stringify(result.data.staff))
            console.log("infor user", result.data)        
            // toast.success("Đăng nhập thành công ",{
            //     className: "custom-toast",
            //     draggable:true,
            //     position: toast.POSITION.TOP_RIGHT
            // })
            (<Redirect to ="/admin/dashboard" />)
            
        })
        .catch(err =>{
            dispatch(PostSignInFalied(err))
            toast.error("Đăng nhập thất bại",{
                className: "custom-toast",
                draggable:true,
                position: toast.POSITION.TOP_RIGHT
            })
            console.log("err", err)
            
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
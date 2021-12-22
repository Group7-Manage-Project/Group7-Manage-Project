import React, { Component } from 'react';
import logo from './images/logo.jpg'
import './index.css'
import {Link} from "react-router-dom"
import {PostSignInAPI} from './module-sign-in/action'
import {connect} from 'react-redux'
import {Redirect} from 'react-router-dom'
import  Cookies  from 'js-cookie';
import {ToastContainer, toast, Zoom} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

class HomePage extends Component {
    constructor(props){
        super(props)
        this.state={
            user:{
                user_name:"",
                password:"",
            }
        }
    }

    // componentWillUnmount(){
    //     const {userSignUp} = this.props
    //     if(userSignUp && userSignUp.access_token){
    //         return <Redirect to ="/admin/dashboard" /> 
    //     }  
    // }

    // renderRedirect = () =>{
    //     const {userSignUp} = this.props
    //     if(userSignUp && userSignUp.access_token){
    //         return(
    //             <Redirect to ="/admin/dashboard" />
    //         )
    //     }
    // }

    handleOnchange = e=>{
        const{name,value} = e.target
        this.setState({
            user:{...this.state.user, [name]:value}
        })
        console.log(name,value)
    }


    handleOnSubmit = e =>{
        e.preventDefault();
        console.log(this.state)
        this.props.PostSignIn(this.state.user)
    }

    render() {
        
        return (
            <div className="my-login-page" style={{position: 'relative', height: '100vh'}}>             
                {localStorage.getItem("user") && Cookies.get('user')  ? (<Redirect to ="/admin/dashboard" /> ) : null }
                {/* <video src={videoClass} autoPlay loop muted />
                <div>

                <button type="button" className="btn btn-outline-success" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{position: 'absolute', top:'50%', left: '50%'}}>
                    Login
                </button>

                    <form onSubmit={this.handleOnSubmit}className="modal fade login" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content login">
                            <div className="modal-header">
                            <h5 className="modal-title" id="staticBackdropLabel" style={{fontSize:"20px", color:"#9A9A9A", fontWeight:"600"}}>Login form</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                            </div>
                            <div className="modal-body login-form" >
                                <div className="input-group mb-3 login-form-item">
                                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-user" style={{marginRight:"10px", width:"20px",padding:"0 10px"}}></i>user-name</span>
                                    <input name="user_name" type="text" className="form-control" placeholder="Please enter user-name" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleOnchange}/>
                                </div>
                                <div className="input-group mb-3 login-form-item">
                                    <span className="input-group-text" id="basic-addon1"><i className="fa fa-lock" style={{marginRight:"10px", width:"25px",padding:"0 10px"}}></i>password</span>
                                    <input name="password" type="password" className="form-control" placeholder="Please enter password" aria-label="Username" aria-describedby="basic-addon1" onChange={this.handleOnchange}/>
                                </div>

                            </div>
                            <div className="modal-footer">
                            <button type="button" className="btn btn-outline-warning" data-bs-dismiss="modal">Close</button>
                            <button type="submit" className="btn btn-outline-success" >Login</button>
                            </div>
                        </div>
                        </div>
                    </form>
                </div> */}

                    <div className="h-100">
                        <div className="container h-100">
                            <div className="row justify-content-md-center h-100">
                                <div className="card-wrapper">
                                    <div className="brand">
                                    <img src= {logo} alt="logo" />
                                    </div>
                                    <div className="card fat">
                                        <div className="card-body">
                                            <h4 className="card-title">Login</h4>
                                            <form className="my-login-validation"  onSubmit={this.handleOnSubmit}>
                                                <div className="form-group">
                                                    <label htmlFor="basic-url" className="form-label">User Name:</label>
                                                    <div className="input-group mb-3">
                                                        <input type="text" className="form-control" name="user_name" id="user_name"  onChange={this.handleOnchange} aria-describedby="basic-addon3"   required autoFocus/>
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="password">Password:
                                                        <Link to="" style={{marginLeft:"120px"}}>Forgot Password?</Link>
                                                    </label>
                                                    <input id="password" type="password" className="form-control" name="password" onChange={this.handleOnchange} required data-eye style={{marginTop:"5px"}} />
                                                    <div className="invalid-feedback">
                                                        Password is required
                                                    </div>
                                                </div>
                                                <div className="form-group">
                                                    <div className="custom-checkbox custom-control d-flex">
                                                        <input type="checkbox" name="remember" id="remember" className="custom-control-input" /> &ensp;
                                                        <label htmlFor="remember" className="custom-control-label">Remember Me</label>
                                                    </div>
                                                </div>
                                                <div className="form-group m-0">
                                                    <button type="submit" className="btn btn-primary btn-block">
                                                    Login
                                                    </button>
                                                </div>
                                                <div className="mt-4 text-center">
                                                    Don't have an account? <a href="register.html">Create One</a>
                                                </div>
                                                <ToastContainer draggable={false} transition={Zoom} autoClose={6000} />
                                            </form>
                                        </div>
                                    </div>
                                    <div className="footer">
                                        Copyright © 2022 — JHS Group
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


            </div>
        );
    }
}


export const mapStateToProp = state => {
    return{
        userSignUp: state.userSignUpReducer.userSignUp
    }
}


export const mapDispatchToProp = dispatch =>{
    return{
        PostSignIn: (user) =>{
            dispatch(PostSignInAPI(user))
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(HomePage);
import React, { Component } from 'react';
import videoClass from './video/uef.mp4'
import './index.css'

import {PostSignInAPI} from './module-sign-in/action'
import {connect} from 'react-redux'

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
        this.props.PostSignIn(this.state.user, this.props.history)
        
    }

    render() {
        return (
            <div className="home-page" style={{position: 'relative', height: '100vh'}}>
                <video src={videoClass} autoPlay loop muted />
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
                </div>

            </div>
        );
    }
}



const mapDispatchToProp = dispatch =>{
    return{
        PostSignIn: (user,history) =>{
            dispatch(PostSignInAPI(user,history))
        }
    }
}

export default connect(null,mapDispatchToProp)(HomePage);
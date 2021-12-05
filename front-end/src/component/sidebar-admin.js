import React, { Component } from 'react';
import logo from "./images/Logo.png";
import {Link, NavLink} from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <Link to="/admin/dashboard" className="" >
                    <div className="bd-highlight">
                       <img src={logo} width="55" height="55" alt="admin" style={{marginTop:"20px"}}/>
                    </div>
                </Link>
                <div className="side-bar-content">
                    <div className="side-bar-item">
                        <div className="bd-highlight">
                            <i className="fa fa-paw"></i>
                        </div>
                        <div className="side-bar-item-content">
                            <h3>Project Management</h3>
                            <hr style={{width:"100%", height:"2px", backgroundColor:"#FFFFFF", margin:"0px"}} />
                            <div className="side-bar-item-content-link">
                                <Link to="/admin/dashboard" style={{width:"200px"}}>
                                    Requirement
                                </Link>
                            </div>
                        </div>                   
                    </div>
                    <div className="side-bar-item">
                        <div className="bd-highlight">
                            <i className="fa fa-tasks"></i>
                        </div>
                        <div className="side-bar-item-content">
                            <h3>Project Management</h3>
                            <hr style={{width:"100%", height:"2px", backgroundColor:"#FFFFFF", margin:"0px"}} />
                            <div className="side-bar-item-content-link">
                                <Link to="/admin/dashboard" style={{width:"200px"}}>
                                    Requirement
                                </Link>
                            </div>
                        </div> 
                        
                    </div>
                    <div  className="side-bar-item">
                        <div className="bd-highlight">
                            <i className="fa fa-user-friends"></i>
                        </div>
                        <div className="side-bar-item-content">
                            <h3>Project Management</h3>
                            <hr style={{width:"100%", height:"2px", backgroundColor:"#FFFFFF", margin:"0px"}} />
                            <div className="side-bar-item-content-link">
                                <Link to="/admin/dashboard" style={{width:"200px"}}>
                                    Requirement
                                </Link>
                            </div>
                        </div>                        
                    </div>
                    <div  className="side-bar-item">
                        <div className="bd-highlight">
                            <i className="fab fa-twitter"></i>
                        </div>
                        <div className="side-bar-item-content">
                            <h3>Project Management</h3>
                            <hr style={{width:"100%", height:"2px", backgroundColor:"#FFFFFF", margin:"0px"}} />
                            <div className="side-bar-item-content-link">
                                <Link to="/admin/dashboard" style={{width:"200px"}}>
                                    Requirement
                                </Link>
                            </div>
                        </div>                         
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
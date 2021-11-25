import React, { Component } from 'react';
import logo from "./images/Logo.png";
import {Link, NavLink} from 'react-router-dom';


class Sidebar extends Component {
    render() {
        return (
            <div className="side-bar">
                <Link to="/admin/dashboard" className="d-flex flex-row bd-highlight mb-3 side-bar-top" >
                    <div className="bd-highlight">
                       <img src={logo} width="60" height="60" alt="admin"/>
                    </div>
                </Link>
                <div className="side-bar-content container">
                    <div className="side-bar-item">
                        <NavLink to="/admin/dashboard" className="d-flex flex-row bd-highlight mb-3" activeClassName="main-nav-active" >
                            <div className="bd-highlight">
                                <i className="fa fa-paw"></i>
                            </div>
                            <div className="bd-highlight"><h5>DASHBOARD</h5></div>
                        </NavLink>
                        
                    </div>
                    <div className="side-bar-item">
                        <NavLink to="/admin/tasks" className="d-flex flex-row bd-highlight mb-3" activeClassName="main-nav-active">
                            <div className="bd-highlight">
                                <i className="fa fa-tasks"></i>
                            </div>
                            <div className="bd-highlight"><h5>TASK</h5></div>
                        </NavLink>
                        
                    </div>
                    <div  className="side-bar-item">
                        <NavLink to="/admin/employees" className="d-flex flex-row bd-highlight mb-3" activeClassName="main-nav-active">
                            <div className="bd-highlight">
                                <i className="fa fa-user-friends"></i>
                            </div>
                            <div className="bd-highlight"><h5>EMPLOYEES</h5></div>
                        </NavLink>
                        
                    </div>
                    <div  className="side-bar-item">
                        <NavLink to='/admin/customer' className="d-flex flex-row bd-highlight mb-3" activeClassName="main-nav-active">
                            <div className="bd-highlight">
                                <i className="fab fa-twitter"></i>
                            </div>
                            <div className="bd-highlight"><h5>CUSTOMER</h5></div>
                        </NavLink>
                        
                    </div>
                </div>
            </div>
        );
    }
}

export default Sidebar;
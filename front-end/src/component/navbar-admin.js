import React, { Component } from 'react';
import {Link} from "react-router-dom";
import NavbarClick from './navbar-click'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            title: "Title"
        }
    }

    logOut = () =>{
        localStorage.removeItem("accessToken");
        localStorage.removeItem("user");
    }

    componentWillMount(){
        const {path}= this.props;
        if(path && path === "/admin/dashboard") {
            this.setState({title: "Dashboard"})
        }
        else if(path && path === "/admin/tasks"){
            this.setState({title: "Task"})
        }
        else if(path && path === "/admin/employees"){
            this.setState({title: "Employees"})
        }

        else{
            this.setState({title: "Title"})
        }
        console.log("tilte", this.state.title)
    }

    render() {
        const full_name = localStorage.getItem("user")
        const full_name_split = full_name.split('"')[1]
        return (
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <h3><NavbarClick />&emsp;{this.state.title}</h3>
                        
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-right-item">
                            <Link to="#">{full_name_split}</Link>
                        </div>
                        <div className="navbar-right-item">
                            <Link to="/" onClick={this.logOut}>Log out</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



export default Navbar;
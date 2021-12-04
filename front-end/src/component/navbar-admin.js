import React, { Component,useRef } from 'react';
import {Link} from "react-router-dom";
import NavbarClick from './navbar-click'
import person from './images/logo.png'

class Navbar extends Component {
    constructor(props){
        super(props)
        this.state={
            title: "Title",
            stylePerson:"none"
        }
        this.stylePersonRef = React.createRef();
        this.hanleStylePersonOnClick = this.hanleStylePersonOnClick.bind(this);
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

        // document.addEventListener('click', this.handleOutsideClick)
        
    }

    // componentDidMount(){
    //     document.addEventListener('click', this.hanleStylePersonOnClick)
    // }

    // handleOutsideClick = (event) => {
    //     if (this.state.stylePerson === 'block' && this.stylePersonRef && !this.stylePersonRef.current.contains(event.target)) {
    //         this.setState({
    //             stylePerson: "block"
    //         })
    //     }
    //   }

    hanleStylePersonOnClick = event =>{
        if(this.state.stylePerson === "none"){
            this.setState({
                stylePerson: "block"
            })
            document.addEventListener('click', this.handleOutsideClick)
        }
        else if (this.state.stylePerson === 'block' && this.stylePersonRef && !this.stylePersonRef.current.contains(event.target)) {
            this.setState({
                stylePerson: "none"
            })
        }
        else{
            this.setState({
                stylePerson: "none"
            })
        }

        console.log("ref", this.stylePersonRef.current)
        console.log("document", document.activeElement)
        console.log("event",  this.stylePersonRef.current.contains(event.target))
        
    }
     

    render() {
        return (
            <div className="navbar">
                <div className="navbar-content">
                    <div className="navbar-left">
                        <h3><NavbarClick />&emsp;{this.state.title}</h3>                       
                    </div>
                    <div className="navbar-right">
                        <div className="navbar-right-item">
                            <i className="fab fa-weixin"></i>
                        </div>
                        <div className="navbar-right-item">
                            <i className="fa fa-bell"></i>
                        </div>
                        <div className="navbar-right-item navbar-right-item-person-content">
                            <img src={person} alt="" width={30} height={30} style={{borderRadius:"50%" , cursor:"pointer"}} onClick={this.hanleStylePersonOnClick}/>
                            <div className="navbar-right-item-person" style={{display:this.state.stylePerson}} ref={this.stylePersonRef}>
                                <div className="navbar-right-item-person-title">
                                    <div className="d-flex flex-row bd-highlight" style={{paddingTop:"10px"}}>
                                        <div className="bd-highlight">
                                           <img src={person} alt="" width={40} height={40} style={{borderRadius:"50%", marginRight:"15px",marginBottom:"10px"}}/>
                                        </div>
                                        <div className="bd-highlight" >
                                            <p><b>Mr. Hoang Nguyen Tran</b></p>
                                            <p>hoangnt18@uef.edu.vn</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="navbar-right-item-person-text">
                                    <p>Profile</p>
                                    <p>Log out</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}



export default Navbar;
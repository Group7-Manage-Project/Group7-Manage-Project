import React, { Component } from 'react';
import cardPersonBg from "./img/background-removebg-preview.png"
import personCard from "./img/logo.jpg"
import BottmBarTask from "./bottom-bar-task"
import {ToastContainer, toast, Zoom} from "react-toastify"

import {actPostSignUpEmployeesAPI} from "./module-sign-up/action"
import {actFetchListEmployeesAPI} from "./module-list-employees/action"
import {actUpdateEmployeesAPI} from "./module-update-employee/action"
import {actDeleteEmployeeAPI} from "./module-delete-employee/action"
import {actDeleteEmployeeFlgAPI} from "./module-delete-employee-flg/action"
import {connect} from 'react-redux'
import moment from "moment"



class Employees extends Component {
    constructor(props){
        super(props)
        this.state={
            employees:{
                employee_id:"", 
                image: personCard, 
                user_name:"",
                password:"",
                full_name:"", 
                email:"", 
                birth_day:"",
                position:"",
                roll:"", 
            },
            image_upload:personCard,
            filter_array:"",
            roll_input:"none",
            position_input:"none",
            roll_select:"block",
            position_select: "block",           
            employee_id_label:"none",
            insertBtn:"none",
            updateBtn:"none",
            deleteBtn:"none",
            itemOld:{},
            checked:`<i className="fa fa-wifi"></i>`
        }
        this.handleChange = this.handleOnChange.bind(this);
        this.handleSubmit = this.handleOnSubmit.bind(this);
    }

    handleOnFilterArray = event =>{
        this.setState({
            filter_array:event.target.value 
        })
    }

    handleOnChange = event =>{
        let {name,value} = event.target;
        if(event.target.files){
            this.setState({
                employees: {...this.state.employees, [name]:value, image: event.target.files[0]}, 
            })
            console.log("event",this.state.employees.image);
            const reader = new FileReader();
            reader.onload = () =>{
                if(reader.readyState === 2){
                    this.setState({
                        // image:reader.result
                        image_upload:reader.result
                    })
                }
                
            }
            
            reader.readAsDataURL(event.target.files[0])
            console.log("event.target.checked", event.target.checked)
        }
        else{
            this.setState({
                employees: {...this.state.employees, [name]:value},              
            })
            console.log("event.target.checked", event.target.checked)
        }
        console.log(name,value);
        // this.setState({
        //     checked: "false"
        // })
        console.log("checked", event.target.checked)
        
    }

    handleOnSubmit = event =>{
        event.preventDefault()
        console.log(this.state.employees)  
        let data = new FormData();
        data.append("image", this.state.employees.image)
        data.append("user_name", this.state.employees.user_name)
        data.append("password", this.state.employees.password)
        data.append("full_name", this.state.employees.full_name)
        data.append("email", this.state.employees.email)
        data.append("birth_day", this.state.employees.birth_day)
        data.append("position", this.state.employees.position)
        data.append("roll", this.state.employees.roll)
        // this.props.PostSignUp(data)
  
        setTimeout(() =>this.props.FetchListEmployees(),100)
        if(this.state.employees.employee_id === ""){
            console.log('data',Array.from(data))
            console.log( "this.props.listEmployees.result",this.props.listEmployees.result)

            this.props.PostSignUp(data)
        }
        else if(this.state.employee_id !== ""){
            data.append("employee_id", this.state.employees.employee_id)

            console.log('data',Array.from(data))
            console.log( "this.props.listEmployees.result",this.props.listEmployees.result)
            // this.setState({
            //     employee_id:"none"
            // })
            this.props.PostUpdateEmployee(data)
            // this.setState({
            //     employee_id:"block"
            // })
        }
     }



    componentDidMount(){
        this.props.FetchListEmployees();
    }

    getEmployeesInTable = user =>{
        // console.log("event in table", event)
        console.log("id from table", user)
    }

    newFormOnClick = () =>{
        this.setState({
            employees:{...this.state.employees, employee_id:""
                                              , user_name:""
                                              ,password:""
                                              ,full_name:""
                                              ,email:""
                                              ,birth_day:""
                                              ,position:""
                                              ,roll:""
                                              ,image:""
                                        },
                                        image_upload:personCard,
                                        roll_input:"none",
                                        position_input:"none",
                                        roll_select:"block",
                                        position_select:"block",
                                        employee_id_label:"none",
                                        insertBtn:"block",
                                        updateBtn:"none",
                                        deleteBtn:"none"                                        
        })

    }
    
    editFormOnClick = () =>{
        if(this.state.employees.employee_id !== ""){
            this.setState({
                updateBtn:"block",
                insertBtn:"none",
                deleteBtn:"none",
                roll_input:"none",
                position_input:"none",
                roll_select:"block",
                position_select:"block",
            })
        }

    }

    deleteEmployeeBtn = () => {
        if(this.state.employees.employee_id !== ""){
            this.setState({
                updateBtn:"none",
                insertBtn:"none",
                deleteBtn:"block" 
            })
        }
    }

    deleteEmployeeOnClick = () =>{
        this.props.DeleteEmployee(this.state.employees.employee_id)
        setTimeout(()=>this.props.FetchListEmployees, 10)
        console.log("employee_id in deleteEmployeeOnClick",this.state.employees.employee_id)
        this.setState({
            employees:{...this.state.employees, employee_id:""
                                              , user_name:""
                                              ,password:""
                                              ,full_name:""
                                              ,email:""
                                              ,birth_day:""
                                              ,position:""
                                              ,roll:""
                                              ,image:""
                                        },                                     
        })
    }

    deleteFlgEmployeeOnclick = event =>{
        event.preventDefault()
        const deleteFlgEmployee = {
            employee_id :this.state.employees.employee_id,
            delete_flag: "Y",
        }
        this.props.DeleteEmployeeFlg(deleteFlgEmployee)
    }



    renderHTMLAdmin = () =>{
        const {listEmployees} = this.props
        console.log("renderHTMLAdmin",listEmployees)
        // if(listEmployees.result){
        //     console.log("listEmployees.result",listEmployees.result.length)
        // }

        // const listEmployeesAdmin =  listEmployees.result.filter(item =>(item.ROLL === "ADMIN"))
        
        if(listEmployees.result && listEmployees.result.length > 0){
            const listFilterEmployees = listEmployees.result.filter(item => {
                if(this.state.filter_array === ""){
                    return listEmployees.result
                }
                else if(item.USER_NAME.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listEmployees.result
                }
                else if(item.PASSWORD.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listEmployees.result
                }
                else if(item.FULL_NAME.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listEmployees.result
                }
                else if(item.EMAIL.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listEmployees.result
                }
                else if(item.BIRTH_DAY.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listEmployees.result
                }
                else if(item.POSITION.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listEmployees.result
                }
                else if(item.ROLL.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listEmployees.result
                }
            })
            console.log("listFilterEmployees", listFilterEmployees)
            // console.log("listEmployeesAdmin",listEmployees.result.filter(item => item.ROLL === "ADMIN"))
            return listFilterEmployees.map((item, index)=>{
                return(
                    <tr className="" style={{cursor:"pointer"}} key={index} id ={item.EMPLOYEE_ID} onClick={event=>{
                        this.setState({
                            image_upload:item.IMAGE,
                            employees:{...this.state.employees, 
                                                                employee_id:item.EMPLOYEE_ID,
                                                                user_name:item.USER_NAME,
                                                                password:item.PASSWORD,
                                                                full_name:item.FULL_NAME,
                                                                email:item.EMAIL,
                                                                birth_day: moment(item.BIRTH_DAY).format("YYYY-DD-MM"), // can't not format YYYY-MM-DD 
                                                                position:item.POSITION,
                                                                roll:item.ROLL,
                                    },
                            roll_input:"block",
                            position_input:"block",
                            roll_select:"none",
                            position_select:"none",
                            employee_id_label:"block",
                            insertBtn:"none",
                            updateBtn:"none",
                                                              
                        })
                        
                           
                            event.target.parentNode.classList.add("table-selected-employee")
                            // console.log("event.target.parentNode",event.target.parentNode)
                            let itemOld = event.target.parentNode
                            this.setState({
                                itemOld : itemOld
                            })
                            
                            if(this.state.itemOld.children  && this.state.itemOld !== event.target.parentNode){
                                this.state.itemOld.classList.remove("table-selected-employee")
                                // console.log("item old click", this.state.itemOld.children)
                            }
                        
                    
                        

                        console.log("event", event)
                        console.log("item click", item)
                    }}>
                        <th scope="row" style={{display:"none"}}>{item.EMPLOYEE_ID}</th>
                        <td style={{display:"none"}}>{item.IMAGE}</td>
                        <td>{item.USER_NAME}</td>
                        <td>{item.PASSWORD}</td>
                        <td>{item.FULL_NAME}</td>
                        <td>{item.EMAIL}</td>
                        <td>{item.BIRTH_DAY}</td>
                        <td>{item.POSITION}</td>
                        <td>{item.ROLL}</td>
                    </tr>
                )
            })
        }
     }


    render() {
        const {listEmployees} = this.props
        return (
            <div style={{height: '100%'}}>
                <div className="employees-content row" >
                    <div className="employees-left col-lg-8">
                        <div className="employees-admin" style={{ borderRadius:"10px"}}>
                            {/* <h3 style={{paddingTop:"40px"}}>List user Admin</h3> */}
                            <div className="d-flex flex-row bd-highlight mb-3 employees-admin-action">
                                <div className="p-2 bd-highlight">
                                <label className="employees-admin-search" style={{marginBottom:"20px" }}>                               
                                    <input type="text" name="filter_array" placeholder="Search" value={this.state.filter_array} onChange={this.handleOnFilterArray}/><i className="fa fa-search"></i>
                                </label>
                                </div>
                                {/* <div className="p-2 bd-highlight employees-admin-action-i" style={{marginLeft:"20px"}}><i className="fa fa-chevron-left"></i></div>
                                <div className="p-2 bd-highlight employees-admin-action-i"><i className="fa fa-chevron-right"></i></div>
                                <div className="p-2 bd-highlight employees-admin-action-i" onClick={this.newFormOnClick}><i className="fa fa-plus"></i></div>
                                <div className="p-2 bd-highlight employees-admin-action-i" onClick={this.editFormOnClick}><i className="fa fa-edit"></i></div>
                                <div className="p-2 bd-highlight employees-admin-action-i" onClick={this.deleteEmployeeBtn}><i className="fa fa-trash"></i></div>                             */}
                            </div>

                            <table className="table" style={{height:"86%"}}>
                                <thead>
                                    <tr>                                
                                    <th scope="col">Username</th>
                                    <th scope="col">Password</th>
                                    <th scope="col">Full Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Birth Day</th>
                                    <th scope="col">Position</th>
                                    <th scope="col">Roll</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <tr>
                                        <th scope="row">EMPLOYEE ID</th>
                                        <td style={{display:"none"}}>EMPLOYEE ID</td>
                                        <td>USERNAME</td>
                                        <td>PASSWORD</td>
                                        <td>FULL NAME</td>
                                        <td>EMAIL</td>
                                        <td>BIRTH DAY</td>
                                        <td>POSITION</td>
                                        <td>ROLL</td>
                                    </tr> */}
                                    {this.renderHTMLAdmin()}
                                </tbody>
                            </table>

                        </div>
                    </div>
                    <form className="employees-right col-lg-4" onSubmit={this.handleOnSubmit} method="post">
                        <div className="employees-right-card">
                            <img src={cardPersonBg} name="image_upload"  alt="admin"/>
                            <div className="employees-right-card-person">
                                <img  src={this.state.image_upload} name="image_upload" alt="admin"/>
                                <label>
                                    <i className="fa fa-camera"></i><br/>
                                    <input type="file" name="image" id="image" style={{display:'none'}}  onChange={this.handleOnChange}/>
                                </label>
                            </div>
                        </div>
                        <div className="employees-right-form">
                            <label className="employees-right-item" style={{display:this.state.employee_id_label}}>
                                Employee ID:<br/>
                                <input type="text" name="employee_id" id="employee_id" value={this.state.employees.employee_id} style={{width:"100%"}} disabled="disabled" onChange={this.handleOnChange}/>
                            </label>
                            <div className="employees-right-item d-flex justify-content-between">
                                <label className="bd-highligh employees-right-item-seperate-2">
                                    UserName:<br/>
                                    <input type="text" name="user_name" value={this.state.employees.user_name} style={{width:"100%"}} onChange={this.handleOnChange}/>
                                </label>
                                <label className="bd-highlight employees-right-item-seperate-2">
                                    Password:<br/>
                                    <input type="password" name="password" value={this.state.employees.password} style={{width:"100%"}} onChange={this.handleOnChange}/>
                                </label>
                            </div>
                            <label className="employees-right-item">
                                Full Name:<br/>
                                <input type="text" name="full_name" value={this.state.employees.full_name} style={{width:"100%"}} onChange={this.handleOnChange}/>
                            </label>
                            <label className="employees-right-item">
                                Email:<br/>
                                <input type="text" name="email" value={this.state.employees.email} style={{width:"100%"}} onChange={this.handleOnChange}/>
                            </label>
                            <div className="employees-right-item d-flex justify-content-between">
                                <label className="bd-highligh employees-right-item-seperate-3">
                                    Birth Day:<br/>
                                    <input type="date" name="birth_day" data-date-format="DD/MM/YYYY" id="birth_day" value={this.state.employees.birth_day} style={{width:"100%"}} onChange={this.handleOnChange}/>
                                </label>
                                <label className="bd-highlight employees-right-item-seperate-3 ">
                                    Position:<br/>
                                    <input type="text" name="position" id="position" value={this.state.employees.position} style={{width:"100%", display : this.state.position_input}} onChange={this.handleOnChange}/>
                                    <select name="position" id="position_select" value={this.state.employees.position}  style={{width:"100%", display:this.state.position_select }} onChange={this.handleChange}>
                                        <option value="">Choose option</option>
                                        <option value="Leader">Leader</option>
                                        <option value="Developer">Developer</option>
                                    </select>
                                </label>
                                <label className="bd-highlight employees-right-item-seperate-3 final-class">
                                    Roll:<br/>
                                    <input type="text" name="roll" id="roll_input" value={this.state.employees.roll} style={{width:"100%", display : this.state.roll_input}} onChange={this.handleOnChange} />
                                    <select name="roll" id="roll_select" value={this.state.employees.roll}   style={{width:"100%", display:this.state.roll_select }} onChange={this.handleChange}>
                                        <option value="">Choose option</option>
                                        <option value="Admin">Admin</option>
                                        <option value="User">User</option>
                                    </select>
                                </label>
                            </div>
                            <button className="btn btn-outline-success" type="submit" style={{width:"100%", marginTop:"10px", marginBottom:"20px", display:this.state.insertBtn}}><i className="fa fa-plus"></i> Add Employee</button>
                            <button className="btn btn-outline-warning" type="submit" style={{width:"100%", marginTop:"10px", marginBottom:"20px", display:this.state.updateBtn}}><i className="fa fa-edit"></i> Update Employee</button>
                            <button className="btn btn-outline-danger" type="submit" style={{width:"100%", marginTop:"10px", marginBottom:"20px", display:this.state.deleteBtn}} onClick={this.deleteEmployeeOnClick}><i className="fa fa-trash"></i> Delete Employee</button>
                        </div>
                    </form>
                    <BottmBarTask  listEmployees = {listEmployees}  newFormOnClick={this.newFormOnClick} editFormOnClick={this.editFormOnClick}/>                                
                </div>
                
                <ToastContainer draggable={false} transition={Zoom} autoClose={6000} />
            </div>
        );
    }
}

export const mapStateToProp = state =>{
    return {
        listEmployees: state.listEmployeesReducer.listEmployees,
        userSignUp: state.userSignUpEmployeesReducer.userSignUp
    }
}

export const mapDispatchToProp = dispatch =>{
    return{

        FetchListEmployees: () =>{ 
            dispatch(actFetchListEmployeesAPI())
        },
        PostSignUp:( userSignUp) =>{
            dispatch(actPostSignUpEmployeesAPI(userSignUp));
        },
        PostUpdateEmployee: userUpdate =>{
            dispatch(actUpdateEmployeesAPI(userUpdate));
        },
        DeleteEmployee: employee_id =>{
            dispatch(actDeleteEmployeeAPI(employee_id));
        },
        DeleteEmployeeFlg: deleteFlgEmployee =>{
            dispatch(actDeleteEmployeeFlgAPI(deleteFlgEmployee))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (Employees)
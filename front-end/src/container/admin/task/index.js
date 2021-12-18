import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

import register from "./img/hoang2.JPG"

import ListTaskTree from './module-list-task-tree'

import {actPostTaskAPI} from "./module-insert-task/action"
import {actFetchListEmployeesSelectAPI} from "./module-list-employees-select/action"
import {actFetchListTaskAPI} from "./module-list-tasks/action"

import { connect } from 'react-redux';

import './css/index.css'
import BottmBarTask from './bottom-bar-task'




class Task extends Component {
    constructor(props) {
        super(props)
        this.state={
            task: {
                task_id:"",
                job:"Bug Fixing",
                status:"",
                category:"KFC",
                title:"",
                progress:"",
                assignee:"",
                register_user:"",
                start_date:"",
                end_date:"",
                effort:"",
                important:"Very Important",
                description:"",
                file:"",
                confirmation:"",
                implementation:"",
                test:"",
                approval:"",
                finish:"",
                step:"",             
            },
            search_task:{
                search_category:"All",
                search_job:"All",
                search_state:"All",
            },

            filter_array:"",
            nameFile:"Attachment",
            imgEmployeesSelectRegister:register,
            imgEmployeesSelectConfirmation:register,
            imgEmployeesSelectImplementation:register,
            imgEmployeesSelectTest:register,
            imgEmployeesSelectApproval:register,
            imgEmployeesSelectFinish:register,
            itemOld:{},

        }
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
    }

    componentDidMount(){
        this.props.FetchListEmployeesSlect()
        this.props.FetchListTask()
    }

    handleOnFilterArray = event =>{
        this.setState({
            filter_array:event.target.value 
        })
    }

    handleOnChange = event => {
        let{name,value} = event.target;
        if(event.target.files ) {
            this.setState({
                task:{...this.state.task, [name]:value, file:event.target.files[0]},
                // nameFile:event.target.files[0].name                    
            })
            if(this.state.nameFile !== undefined && this.state.nameFile !== "" && this.state.nameFile !== "Attachment") {
                this.setState({
                    nameFile:this.state.nameFile
                })
            }
            else if(this.state.nameFile === "Attachment"){
                this.setState({
                    nameFile:event.target.files[0].name 
                })
            }
            console.log("file", event.target.files[0])
            console.log(name,value)
            this.setState({
                // imgEmployeesSelectRegister : this.state.task.confirmation.split("noi chuoi")[0] 
            })
        }

        else{
            this.setState({
                task:{...this.state.task, [name]:value},
                // imgEmployeesSelectRegister : this.state.task.confirmation.split("noi chuoi")[0]

            })
            setTimeout(()=>{
                if( this.state.task.register_user !== ""){
                    setTimeout(()=>{
                        this.setState({
                            imgEmployeesSelectRegister : this.state.task.register_user.split("noi chuoi")[0]
                        })
                    },100)
                }
                if( this.state.task.confirmation !== ""){
                    setTimeout(()=>{
                        this.setState({
                            imgEmployeesSelectConfirmation : this.state.task.confirmation.split("noi chuoi")[0] 
                        })
                    },100)
                }
                if( this.state.task.implementation !== ""){
                    setTimeout(()=>{
                        this.setState({
                            imgEmployeesSelectImplementation : this.state.task.implementation.split("noi chuoi")[0] 
                        })
                    },100)
                }
                if( this.state.task.test !== ""){
                    setTimeout(()=>{
                        this.setState({
                            imgEmployeesSelectTest : this.state.task.test.split("noi chuoi")[0] 
                        })
                    },100)
                }
                if( this.state.task.approval !== ""){
                    setTimeout(()=>{
                        this.setState({
                            imgEmployeesSelectApproval : this.state.task.approval.split("noi chuoi")[0]
                        })
                    },100)
                }
                if( this.state.task.finish !== ""){
                    setTimeout(()=>{
                        this.setState({
                            imgEmployeesSelectFinish : this.state.task.finish.split("noi chuoi")[0]
                        })
                    },100)
                }
            },100)
            console.log("imgEmployeesSelectRegister",this.state.imgEmployeesSelectRegister)
            console.log("this.state.task.confirmation.split", this.state.task.confirmation.split("noi chuoi"))
            console.log(name,value)

            this.setState({
                search_task:{...this.state.search_task, [name]: value}
            })
            console.log("this.state.search_task ", this.state.search_task)
        }
    }

    handleOnSubmit = event => {
        event.preventDefault()
        let data = new FormData()
        data.append("job",this.state.task.job)
        data.append("status","In Processing")
        data.append("category",this.state.task.category)
        data.append("title",this.state.task.title)
        data.append("progress","10")
        data.append("assignee",this.state.task.register_user.split("noi chuoi")[1])
        data.append("register_user",this.state.task.register_user.split("noi chuoi")[1])
        // data.append("start_date",this.state.task.start_date)
        data.append("end_date",this.state.task.end_date)
        data.append("effort","30")
        data.append("important",this.state.task.important)
        data.append("description",this.state.task.description)
        data.append("file",this.state.task.file)
        data.append("confirmation",this.state.task.confirmation.split("noi chuoi")[1])
        data.append("implementation",this.state.task.implementation.split("noi chuoi")[1])
        data.append("test",this.state.task.test.split("noi chuoi")[1])
        data.append("approval",this.state.task.approval.split("noi chuoi")[1])
        data.append("finish",this.state.task.finish.split("noi chuoi")[1])
        data.append("step","1")
        console.log('data',Array.from(data))
        this.props.PostInsertTask(data)
    }

    handleSubmitSearchTaskOnSubmit = event => {
        event.preventDefault()
        let data = new FormData()
        data.append("search_category",this.state.search_task.search_category)
        data.append("search_job",this.state.search_task.search_job)
        data.append("search_state",this.state.search_task.search_state)
        console.log('data search',Array.from(data))
        this.props.PostInsertTask(data)
    }

    renderListEmployeesSelect = () =>{
        const listEmployeesSelect = this.props.listEmployeesSelect
        if(listEmployeesSelect.result && listEmployeesSelect.result.length > 0){
            return listEmployeesSelect.result.map((item,index) =>{
                return(
                    <option value= {item.IMAGE_URL + "noi chuoi" + item.EMPLOYEE_ID} key={index}>{item.FULL_NAME}</option>
                )
            })
        }
    }

    renderHTMLTask = () =>{
        const {listTask} = this.props
        console.log("renderHTMLAdmin",listTask)
        
        if(listTask.result && listTask.result.length > 0){
            const listFilterTask = listTask.result.filter(item => {
                if(this.state.filter_array === ""){
                    return listTask.result
                }
                else if(item.TASK_ID.toString().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.JOB.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.CATEGORY.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.TITLE.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.PROGRESS.toString().toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.REGISTER_USER_NAME.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.ASSIGNEE_NAME.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.START_DATE.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.END_DATE.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
                else if(item.EFFORT.toString().toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result
                }
            })
            return listFilterTask.map((item, index)=>{
                return(
                    <tr  className="" key={index} id ={item.TASK_ID} >
                        <th scope="row"><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.TASK_ID}</Link></th>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.JOB}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.STATUS}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.CATEGORY}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.TITLE}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{width: `${item.PROGRESS}%`}} >{`${item.PROGRESS}%`}</div>
                            </div>
                            </Link>
                        </td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.REGISTER_USER_NAME}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.ASSIGNEE_NAME}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.START_DATE}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.END_DATE}</Link></td>
                        <td><Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">{item.EFFORT}</Link></td>                     
                    </tr>
                )
            })
        }
     }



    render() {
        const {listTask} = this.props
        return (
            <div>
                <form className="task-admin-search-total" onSubmit={this.handleSubmitSearchTaskOnSubmit}>
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div className="bd-highlight" style={{marginRight:"20px"}}>
                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                    Category Task:&emsp;                                  
                                    <select name="search_category" id="search_category_task" value={this.state.search_task.search_category} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>                                          
                                        <option value="All">All</option>
                                        <option value="Information Techonology">Information Techonology</option>
                                        <option value="Digital Marketing">Digital Marketing</option>                                          
                                    </select>
                            </label>
                        </div>
                        <div className="bd-highlight" style={{marginRight:"20px"}}>
                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                     Job:&emsp;                                 
                                    <select name="search_job" id="search_job" value={this.state.search_task.search_job} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>                                          
                                        <option value="All">All</option>
                                        <option value="Document">Document</option>
                                        <option value="Fix Bug">Fix Bug</option>                                          
                                    </select>
                            </label>
                        </div>
                        <div className="bd-highlight" style={{marginRight:"20px"}}>
                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                    Status:&emsp;                                  
                                    <select name="search_state" id="search_state" value={this.state.search_task.search_state} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>                                                                                
                                        <option value="All">All</option>
                                        <option value="In Progressing">In Progressing</option>
                                        <option value="Pending">Pending</option>
                                        <option value="Finished">Finished</option>                                                                                
                                    </select>
                            </label>
                        </div>
                        <div className="bd-highlight">
                            <button type="submit" style={{backgroundColor:"#3f6aae", color:"#fff", padding:"2px 20px", fontSize:"14px",borderRadius:"6px" ,cursor:"pointer"}}>Search</button>
                        </div>
                    </div>
                </form>
                <div className="task-content row">
                    <div className="task-left col-lg-2">
                        <ListTaskTree />
                    </div>
                    <div className="col-lg-10 task-right task-admin" style={{backgroundColor:"#FFFFFF", borderRadius:"10px",padding:"0 20px", height:"83vh",overflow:"auto"}}>
                            <div className="d-flex flex-row bd-highlight mb-3 task-admin-action">
                                <div className="bd-highlight">
                                    <label className="task-admin-search" style={{marginBottom:"20px" }}>                               
                                        <input type="text" name="filter_array" placeholder="Search"  onChange={this.handleOnFilterArray} /><i className="fa fa-search"></i>
                                    </label>
                                </div>                          
                            </div>

                            <table className="table" id="table-list-task" style={{border:"1px solid #DADEE0",height:"85%"}}>
                                <thead>
                                    <tr>                                
                                    <th scope="col">#</th>
                                    <th scope="col">Job</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Category</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Progress</th>                                                              
                                    <th scope="col">Register User</th>
                                    <th scope="col">Assignee</th>                               
                                    <th scope="col">Registered Date</th>
                                    <th scope="col">Due Date</th>
                                    <th scope="col">Effort</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderHTMLTask()}
                                </tbody>
                            </table>
                    </div>

                    {/* Bottom Bar Task */}
                    <BottmBarTask   listTask={listTask}/>
                    
                    {/* Task Model Admin */}
                    <div className="task-admin-modal">
                        <div >
                        {/* Modal */}
                            <form onSubmit={this.handleOnSubmit} method="post" className="modal fade modal-dialog modal-dialog-centered modal-dialog-scrollable" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                                <div className="modal-dialog task-modal" style={{marginTop:"0px !important"}}>
                                    <div className="modal-content task-modal-content" style={{marginTop:"0px !important"}}>
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="staticBackdropLabel">New Task</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" ></button>
                                        </div>
                                        <div className="modal-body container">
                                        <div className="d-flex flex-row bd-highlight mb-3">
                                        <label className="bd-highlight task-right-item-seperate-3 final-class">
                                            JOB TYPE:<br/>                                       
                                            <select name="job" id="job" value={this.state.task.job} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>                                          
                                                <option value="Bug Fixing">Bug Fixing</option>
                                                <option value="Documentation">Documentation</option>
                                                <option value="Develope">Develope</option>
                                                <option value="Modification">Modification</option>
                                                <option value="Meta Data">Meta Data</option>
                                                <option value="New Request">New Request</option>
                                                <option value="Training">Training</option>
                                                <option value="Testing">Testing</option>
                                                <option value="Reporting">Reporting</option>
                                                <option value="Research">Research</option>
                                                <option value="Support">Support</option>
                                                <option value="Set Up Environments">Set Up Environments</option>                                            
                                            </select>
                                        </label>
                                        <label className="bd-highlight task-right-item-seperate-3 final-class">
                                            IMPORTANT:<br/>                                       
                                            <select name="important" id="important" value={this.state.task.important} onChange={this.handleOnChange}   style={{ padding:"2px", width:"200px", height:"30px", fontSize:"16px" }}>
                                                <option value="Very Important">Very Important</option>
                                                <option value="Important">Important</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Low">Low</option>
                                                <option value="Very Low">Very Low</option>
                                            </select>
                                        </label>
                                        <label className="bd-highlight task-right-item-seperate-3 final-class">
                                            CATEGORY:<br/>                                       
                                            <select name="category" id="category" value={this.state.task.category}  onChange={this.handleOnChange}  style={{ padding:"2px", width:"200px", height:"30px", fontSize:"16px" }}>
                                                <option value="KFC">KFC</option>
                                                <option value="CYBER">CYBER</option>
                                            </select>
                                        </label>
                                        <label className="bd-highligh task-right-item-seperate-3">
                                            DUE DATE:<br/>
                                            <input type="date" name="end_date" id="end_date" value={this.state.task.end_date} onChange={this.handleOnChange} style={{width:"200px", height:"30px", fontSize:"16px" }} />
                                        </label>
                                        </div>
                                        {/* body */}
                                        <div className="task-modal-body row" >
                                            <div className="task-model-body-left col-lg-8" >
                                                <div className="task-modal-body-item" style={{width:"100%", position:"relative"}}>
                                                    <input type="text" name="title" id="title" value={this.state.task.title} onChange={this.handleOnChange} placeholder="Write a title" style={{width:"100%", border:"2px solid  #DDDDDD",padding:"6px 0"}} />
                                                </div>
                                                <div className="task-modal-body-item" style={{width:"100%", position:"relative"}}>
                                                    <textarea name="description" id="description" value={this.state.task.description} onChange={this.handleOnChange} placeholder="Write description" style={{width:"100%",border:"2px solid  #DDDDDD",padding:"6px 0"}} rows="20" cols="200" />
                                                </div>
                                                <label className="task-modal-body-item" style={{width:"100%", position:"relative", border:"2px solid  #DDDDDD", height:"100px", backgroundColor:"#F2F2F2"}}>
                                                    <i className="fa fa-paperclip" style={{fontSize:"20px", marginLeft:"10px", marginTop:"10px", color:"#0097cc"}}></i> <i>{this.state.nameFile}</i>
                                                    <input type="file" name="file" id="file" onChange={this.handleOnChange}  placeholder="Write a title" style={{width:"100%", display:"none"}} />
                                                </label>
                                            </div>
                                            <div className="task-modal-body-right col-lg-4" style={{height:"642px",overflow:"auto", paddingLeft:"0px", paddingRight:"0px"}}>
                                                <div className="task-modal-body-right-item d-flex" style={{backgroundColor:"#0097CC", width:"100%", fontWeight:"700", color:"#FFFFFF"}}>                                               
                                                    <div className="w-45 bd-highlight" style={{textAlign:"center", width:"49%", padding:"8px 0px"}}>Phase</div>
                                                    <div className="task-model-line w-10" style = {{height:"40px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                    <div className="w-45" style={{textAlign:"center",  width:"49%", padding:"8px 0px", fontWeight:"700", color:"#FFFFFF"}}>PIC</div>
                                                </div>
                                                <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                    <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                        <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                        <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Register</p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-calendar-alt"></i></span>
                                                            <span>Nov 06, 2021</span>
                                                        </p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-clock"></i></span>
                                                            <span>17:30</span>
                                                        </p>
                                                    </div>
                                                    <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                    <div className="task-model-line w-10" style = {{height:"2px", width:"38px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"161px"}}></div>                                                
                                                    <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                        <img src={this.state.imgEmployeesSelectRegister} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                        <select name="register_user" id="register" value={this.state.task.register_user} onChange={this.handleOnChange}  style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                            <option value="">Choose option</option>
                                                            {this.renderListEmployeesSelect()}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                    <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                        <i className="fa fa-splotch" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                        <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Confirmation</p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-calendar-alt"></i></span>
                                                            <span>Nov 06, 2021</span>
                                                        </p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-clock"></i></span>
                                                            <span>17:30</span>
                                                        </p>
                                                    </div>
                                                    <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                    <div className="task-model-line w-10" style = {{height:"2px", width:"38px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"161px"}}></div>                                                
                                                    <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                        <img src={this.state.imgEmployeesSelectConfirmation} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                        <select name="confirmation" id="confirmation" value={this.state.task.confirmation} onChange={this.handleOnChange} style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                            <option value="">Choose option</option>
                                                            {this.renderListEmployeesSelect()}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                    <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                        <i className="fa fa-cogs" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                        <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Implementation</p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-calendar-alt"></i></span>
                                                            <span>Nov 06, 2021</span>
                                                        </p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-clock"></i></span>
                                                            <span>17:30</span>
                                                        </p>
                                                    </div>
                                                    <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                    <div className="task-model-line w-10" style = {{height:"2px", width:"38px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"161px"}}></div>                                                
                                                    <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                        <img src={this.state.imgEmployeesSelectImplementation} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                        <select name="implementation" id="implementation" onChange={this.handleOnChange} value={this.state.task.implementation}  style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                            <option value="">Choose option</option>
                                                            {this.renderListEmployeesSelect()}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                    <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                        <i className="fa fa-list" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                        <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Test</p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-calendar-alt"></i></span>
                                                            <span>Nov 06, 2021</span>
                                                        </p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-clock"></i></span>
                                                            <span>17:30</span>
                                                        </p>
                                                    </div>
                                                    <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                    <div className="task-model-line w-10" style = {{height:"2px", width:"38px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"161px"}}></div>                                                
                                                    <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                        <img src={this.state.imgEmployeesSelectTest} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                        <select name="test" id="test" value={this.state.task.test} onChange={this.handleOnChange}  style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                            <option value="">Choose option</option>
                                                            {this.renderListEmployeesSelect()}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                    <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                        <i className="fa fa-check" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                        <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Approval</p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-calendar-alt"></i></span>
                                                            <span>Nov 06, 2021</span>
                                                        </p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-clock"></i></span>
                                                            <span>17:30</span>
                                                        </p>
                                                    </div>
                                                    <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                    <div className="task-model-line w-10" style = {{height:"2px", width:"38px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"161px"}}></div>                                                
                                                    <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                        <img src={this.state.imgEmployeesSelectApproval} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                        <select name="approval" id="approval" value={this.state.task.approval} onChange={this.handleOnChange} style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                            <option value="">Choose option</option>
                                                            {this.renderListEmployeesSelect()}
                                                        </select>
                                                    </div>
                                                </div>
                                                <div className="task-modal-body-right-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                    <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"49%"}}>
                                                        <i className="fa fa-star-and-crescent" style={{color:"#0097cc", marginTop:"10px"}}></i>
                                                        <p style={{fontWeight:"600", color:"#0097cc", fontSize:"15px", marginTop:"5px"}}>Finish</p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-calendar-alt"></i></span>
                                                            <span>Nov 06, 2021</span>
                                                        </p>
                                                        <p className="task-modal-body-right-item-text">
                                                            <span><i className="fa fa-clock"></i></span>
                                                            <span>17:30</span>
                                                        </p>
                                                    </div>
                                                    <div className="task-model-line w-10" style = {{height:"170px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                    <div className="task-model-line w-10" style = {{height:"2px", width:"38px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"161px"}}></div>                                                
                                                    <div className="w-45" style={{textAlign:"center",  width:"49%", marginTop:"10px", position:"relative"}}>
                                                        <img src={this.state.imgEmployeesSelectFinish} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                        <select name="finish" id="finish" value={this.state.task.finish} onChange={this.handleOnChange} style={{width:"96%", marginTop:"10px", marginLeft:"6px"}}  >
                                                            <option value="">Choose option</option>
                                                            {this.renderListEmployeesSelect()}
                                                        </select>
                                                    </div>
                                                </div>
                                                                        
                                            </div>
                                        </div>
                                        {/* /body */}   
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                            <button type="submit" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                            {/* Modal */}
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export const mapStateToProp = state => {
    return {
        listEmployeesSelect:state.listEmployeesSelectReducer.listEmployeesSelect,
        listTask: state.listTaskReducer.listTask
    }
}

export const mapDispatchToProp = dispatch => {
    return {
        PostInsertTask: taskInsert =>{
            dispatch(actPostTaskAPI(taskInsert))
        },
        FetchListEmployeesSlect: () =>{
            dispatch(actFetchListEmployeesSelectAPI())
        },
        FetchListTask: () =>{
            dispatch(actFetchListTaskAPI())
        }
    }
}


export default connect(mapStateToProp,mapDispatchToProp)(Task);
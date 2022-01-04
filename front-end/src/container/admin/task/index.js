import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import register from "./img/logo.jpg"

import {actPostTaskAPI} from "./module-insert-task/action"
import {actFetchListEmployeesSelectAPI} from "./module-list-employees-select/action"
import {actFetchListTaskAPI} from "./module-list-tasks/action"
import {actFetchListCategoryAPI} from './module-list-category/action'
import {actFetchListDepartmentAPI} from './module-list-department/action'
import {actFetchListCategoryByDepartmentAPI} from './module-list-category-by-department/action'
import {actFetchListTaskTreeAPI} from './module-list-task-tree/module/actions'


import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';


import { connect } from 'react-redux';

import './css/index.css'
import BottmBarTask from './bottom-bar-task'
import  Cookies  from 'js-cookie';
import {ToastContainer, Zoom} from "react-toastify"




class Task extends Component {
    constructor(props) {
        super(props)
        this.state={
            task: {
                task_id:"",
                job:"Bug Fixing",
                status:"",
                category:"",
                title:"",
                progress:"",
                assignee:"",
                register_user:"",
                start_date:"",
                end_date:"",
                department_name:"",
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
                search_category:"ALL",
                search_job:"ALL",
                search_status:"ALL",
            },

            department:{
                department_name:"",
                department_description:"",
            },
            category:{
                category_name:"",
                delete_flg:"",
                department_id:"",
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
        this.props.FetchListTask(this.state.search_task)
        this.props.FetListCategoryTask()
        this.props.FetchListDepartment()
        this.props.FetchListTaskTree()
        console.log("componentDidMount")
    }

    handleSearchFetchListTaskOnClick = () =>{
        console.log("hthis.state.search_task click:", this.state.search_task)
        this.props.FetchListTask(this.state.search_task)
    }

    componentWillMountUpdate(){
        console.log("componentDidUpdate")
        setTimeout(() =>{
            if(this.state.task.department_name.split("noi chuoi")[0] !== ""){
                this.props.FetchListCategoryByDepartment({department_id: this.state.task.department_name.split("noi chuoi")[0]})
                console.log("da vao componentDidUpdate if")
            }
        },100)
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
            this.setState({
                department:{...this.state.department, [name]:value},
                // imgEmployeesSelectRegister : this.state.task.confirmation.split("noi chuoi")[0]

            })
            this.setState({
                category:{...this.state.category, [name]:value},
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
                if( this.state.task.department_name !== ""){
                    setTimeout(()=>{
                        this.setState({
                            department_name : this.state.task.department_name
                        })
                        console.log("this.state.task.department_name[0]: ", this.state.task.department_name.split("noi chuoi")[0])
                    },100)
                    
                }
            },100)
            setTimeout(() =>{
                if(this.state.task.department_name.split("noi chuoi")[0] !== ""){
                    this.props.FetchListCategoryByDepartment({department_id: this.state.task.department_name.split("noi chuoi")[0]})
                    console.log("da vao componentDidUpdate if")
                }
            },100)
            
            console.log("imgEmployeesSelectRegister",this.state.imgEmployeesSelectRegister)
            console.log("this.state.task.confirmation.split", this.state.task.confirmation.split("noi chuoi"))
            console.log(name,value)

            this.setState({
                search_task:{...this.state.search_task, [name]: value}
            })
            console.log("this.state.search_task ", this.state.search_task)
            console.log("this.state.department", this.state.department)
            console.log("this.state.category", this.state.category)
        }
    }
    

    handleOnSubmit = event => {
        event.preventDefault()
        let data = new FormData()
        data.append("job",this.state.task.job)
        data.append("status","In Processing")
        data.append("category",this.state.task.category.split("noi chuoi")[1])
        data.append("category_task_id",this.state.task.category.split("noi chuoi")[0])
        data.append("title",this.state.task.title)
        data.append("progress","10")
        data.append("assignee_id",this.state.task.register_user.split("noi chuoi")[1])
        data.append("register_user_id",this.state.task.register_user.split("noi chuoi")[1])
        // data.append("start_date",this.state.task.start_date)
        data.append("end_date",this.state.task.end_date)
        data.append("department_name",this.state.task.department_name.split("noi chuoi")[1])
        data.append("effort","30")
        data.append("important",this.state.task.important)
        data.append("description",this.state.task.description)
        data.append("file",this.state.task.file)
        data.append("confirmation_id",this.state.task.confirmation.split("noi chuoi")[1])
        data.append("implementation_id",this.state.task.implementation.split("noi chuoi")[1])
        data.append("test_id",this.state.task.test.split("noi chuoi")[1])
        data.append("approval_id",this.state.task.approval.split("noi chuoi")[1])
        data.append("finish_id",this.state.task.finish.split("noi chuoi")[1])
        data.append("step","1")
        console.log('data',Array.from(data))
        this.props.PostInsertTask(data)
        setTimeout(()=>{
            this.props.FetchListTask(this.state.search_task)
        },200)
    }

    handleSubmitSearchTaskOnSubmit = event => {
        event.preventDefault()
        let data = new FormData()
        data.append("search_category",this.state.search_task.search_category)
        data.append("search_job",this.state.search_task.search_job)
        data.append("search_status",this.state.search_task.search_status)
        console.log('data search',Array.from(data))
        this.props.PostInsertTask(data)
    }

    handleSubmitDepartmentOnSubmit = event => {

    }

    handleSubmitCategoryTasktOnSubmit = event => {
        
    }

    renderListDepartment = () =>{
        const {listDepartment} = this.props
        console.log('listDepartment', listDepartment.result)
        if(listDepartment.result && listDepartment.result.length > 0){
            return listDepartment.result.map(item => {
                return (
                    <option value= {item.DEPARTMENT_ID + "noi chuoi" + item.DEPARTMENT_NAME} key={item.DEPARTMENT_ID}>{item.DEPARTMENT_NAME}</option>
                )
            })
        }
    }

    renderListCategory = () =>{
        const {listCategoryTask} = this.props
        console.log("listCategoryTask", listCategoryTask)
        if(listCategoryTask.result && listCategoryTask.result.length > 0){
            return listCategoryTask.result.map(item =>{
                return (
                    <option key ={item.CATEGORY_TASK_ID} value={item.CATEGORY_NAME}>{item.CATEGORY_NAME}</option>
                )
            })
        }
    }

    renderListCategoryByDepartment = () =>{
        let {listCategoryByDepartment} = this.props
        console.log("listCategoryByDepartment", listCategoryByDepartment)
        if(listCategoryByDepartment.result && listCategoryByDepartment.result.length > 0){
            return listCategoryByDepartment.result.map(item =>{
                return(
                    <option value={item.CATEGORY_TASK_ID + "noi chuoi" + item.CATEGORY_NAME} key={item.CATEGORY_TASK_ID}>{item.CATEGORY_NAME}</option> 
                )
            })
        }
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

    renderParentNode = listParentNode =>{
        if(listParentNode && listParentNode.length > 0){
            return listParentNode.map((item, index) =>{
                return(
                        <TreeItem key = {item.DEPARTMENT_ID} nodeId={item.DEPARTMENT_NAME} label={item.DEPARTMENT_NAME}>
                            {this.renderChildrenNode(item.CATEGORY_TASK)}
                        </TreeItem>
                )
            })
        }
    }

    renderChildrenNode = (listChildrenNode) =>{
            
            console.log("listChildrenNode",listChildrenNode)
            if(listChildrenNode && listChildrenNode.length > 0){
                return listChildrenNode.map((item, index) =>{
                    return(
                            <TreeItem onClick={ () =>{
                                this.setState({
                                    search_task: {...this.state.search_task, search_category: item.CATEGORY_NAME}
                                    // task:{...this.state.task, [name]:value, file:event.target.files[0]}
                                })
                                setTimeout(() =>{ this.props.FetchListTask(this.state.search_task) },200)
                                
                            }} 
                                key = {item.CATEGORY_TASK_ID} 
                                nodeId={item.CATEGORY_NAME} 
                                label={item.CATEGORY_NAME}
                            />
                    )
                })
            }

    }

    renderListTaskTreeHTML = () =>{
        const {listTaskTree} = this.props
        console.log("listTaskTree renderHTML",listTaskTree)
        if(listTaskTree.result && listTaskTree.result.length > 0){

                return(
                    <div>
                            <TreeView
                                aria-label="multi-select"
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                                multiSelect
                                sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                            >
                                {/* <TreeItem nodeId={`${item.DEPARTMENT_NAME}`} label={item.DEPARTMENT_NAME}>
                                    {this.renderChildrenNode(item.CATEGORY_TASK)}
                                </TreeItem> */}
                                {this.renderParentNode(listTaskTree.result)}
                            </TreeView>
                    </div>

                )
            
        }
    }

    renderHTMLTask = () =>{
        console.log('Cookies.get', Cookies.get('user'))
        const {listTask} = this.props
        console.log("renderHTMLAdmin",listTask)
        
        if(listTask.result && listTask.result.task && listTask.result.task.length > 0){
            const listFilterTask = listTask.result.task.filter( item => {
                if(this.state.filter_array === ""){
                    return listTask.result.task
                }
                else if(item.TASK_ID.toString().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.JOB.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.CATEGORY.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.TITLE.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.PROGRESS.toString().toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.REGISTER_USER_NAME.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.ASSIGNEE_NAME.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.START_DATE.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.END_DATE.toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
                }
                else if(item.EFFORT.toString().toLowerCase().includes(this.state.filter_array.toLowerCase())){                   
                    return listTask.result.task
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
                <form className="task-admin-search-total" >
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <div className="bd-highlight" style={{marginRight:"20px"}}>
                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                    Department:&emsp;                                  
                                    <select name="search_category" id="search_category_task" value={this.state.search_task.search_category} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>                                          
                                        <option value="All">All</option>
                                        {/* <option value="Information Techonology">Information Techonology</option>
                                        <option value="Digital Marketing">Digital Marketing</option> */}
                                        {this.renderListDepartment()}                                          
                                    </select>
                            </label>
                        </div>
                        <div className="bd-highlight" style={{marginRight:"20px"}}>
                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                    Category Task:&emsp;                                  
                                    <select name="search_category" id="search_category_task" value={this.state.search_task.search_category} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>                                          
                                        <option value="All">All</option>
                                        {/* <option value="Information Techonology">Information Techonology</option>
                                        <option value="Digital Marketing">Digital Marketing</option> */}
                                        {this.renderListCategory()}                                          
                                    </select>
                            </label>
                        </div>
                        <div className="bd-highlight" style={{marginRight:"20px"}}>
                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                     Job:&emsp;                                 
                                    <select name="search_job" id="search_job" value={this.state.search_task.search_job} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"200px", height:"30px", fontSize:"16px"  }}>                                          
                                        <option value="All">All</option>
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
                            <button type="button" className="bd-highlight" onClick={this.handleSearchFetchListTaskOnClick} style={{backgroundColor:"#3f6aae", color:"#fff", padding:"2px 20px", fontSize:"14px",borderRadius:"6px" ,cursor:"pointer"}}>Search</button>
                        </div>
                    </div>
                </form>
                <div className="task-content row">
                    <div className="task-left col-lg-2">
                        {this.renderListTaskTreeHTML()}
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
                    <BottmBarTask listTask={listTask}/>
                    
                    {/* Task Model Admin */}
                    <div className="task-admin-modal">
                    <div >
                        {/* Modal */}

                        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalToggleLabel">Create Task</h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <form className="modal-body" onSubmit={this.handleOnSubmit}>
                                    <div className="d-flex flex-row bd-highlight mb-3">
                                        <label className="bd-highlight task-right-item-seperate-3 final-class">
                                            JOB TYPE:<br/>                                       
                                            <select name="job" id="job" value={this.state.task.job} onChange={this.handleOnChange}  style={{ padding:"2px",  width:"150px", height:"30px", fontSize:"16px", marginRight:"10px"  }}>                                          
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
                                            <select name="important" id="important" value={this.state.task.important} onChange={this.handleOnChange}   style={{ padding:"2px", width:"150px", height:"30px", fontSize:"16px", marginRight:"10px" }}>
                                                <option value="Very Important">Very Important</option>
                                                <option value="Important">Important</option>
                                                <option value="Normal">Normal</option>
                                                <option value="Low">Low</option>
                                                <option value="Very Low">Very Low</option>
                                            </select>
                                        </label>
                                        <label className="bd-highlight task-right-item-seperate-3 final-class">
                                            DEPARTMENT:<br/>                                       
                                            <select name="department_name" id="department_name" value={this.state.task.department}  onChange={this.handleOnChange}  style={{ padding:"2px", width:"150px", height:"30px", fontSize:"16px", marginRight:"10px" }}>
                                                <option value="">Choose Department</option>
                                                {this.renderListDepartment()}
                                            </select>
                                        </label>
                                        <label className="bd-highlight task-right-item-seperate-3 final-class">
                                            CATEGORY:<br/>                                       
                                            <select name="category" id="category" value={this.state.task.category}  onChange={this.handleOnChange}  style={{ padding:"2px", width:"150px", height:"30px", fontSize:"16px", marginRight:"10px" }}>
                                                <option value="">Choose Category</option>
                                                {this.renderListCategoryByDepartment()}
                                            </select>
                                        </label>
                                        <label className="bd-highligh task-right-item-seperate-3">
                                            DUE DATE:<br/>
                                            <input type="date" name="end_date" id="end_date" value={this.state.task.end_date} onChange={this.handleOnChange} style={{width:"150px", height:"30px", fontSize:"16px", marginRight:"10px" }} />
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
                                            <div className="modal-footer">
                                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                <button type="submit" className="btn btn-primary">Submit</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <a style={{display: "none"}} className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">New Task</a>
                        {/* Modal */}
                        

                        {/* Modal Department Category */}
                        <div>
                        <div className="modal fade" id="exampleModalToggleDepartmentCategory" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                            <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">CREATE DEPARTMENT | CATEGORY TASK</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-department-tab" data-bs-toggle="tab" data-bs-target="#nav-department" type="button" role="tab" aria-controls="nav-department" aria-selected="true">Department</button>
                                            <button className="nav-link" id="nav-category-task-tab" data-bs-toggle="tab" data-bs-target="#nav-category-task" type="button" role="tab" aria-controls="nav-category-task" aria-selected="false">Category Task</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <form className="tab-pane fade show active" id="nav-department" role="tabpanel" aria-labelledby="nav-department-tab" style={{marginTop:"15px"}}>
                                                    <div className="mb-3">
                                                        <label htmlFor="department_name" className="form-label">Name Department</label>
                                                        <input type="text" name="department_name" onChange={this.handleOnChange} className="form-control" id="department_name" placeholder="Enter Department Name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="department_description" className="form-label">Description</label>
                                                        <input type="text" name="department_description" onChange={this.handleOnChange} className="form-control" id="department_description" placeholder="Enter Description Name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <button className="btn btn-primary">Submit</button>
                                                    </div>
                                            </form>
                                            <div className="tab-pane fade" id="nav-category-task" role="tabpanel" aria-labelledby="nav-category-task-tab">
                                                <form className="tab-pane fade show active" id="nav-department" role="tabpanel" aria-labelledby="nav-department-tab" style={{marginTop:"15px"}}>
                                                        <div className="mb-3">
                                                            <label htmlFor="category_name" className="form-label">Category Name</label>
                                                            <input type="text" name="category_name" onChange={this.handleOnChange} className="form-control" id="category_name" placeholder="Enter Department Name" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                                                DEPARTMENT:<br/>                                       
                                                                <select name="department_name" id="department_name" value={this.state.task.department}  onChange={this.handleOnChange}  style={{ padding:"2px", width:"100%", height:"30px", fontSize:"16px", marginRight:"10px" }}>
                                                                    <option value="">Choose Department</option>
                                                                    {this.renderListDepartment()}
                                                                </select>
                                                            </label>
                                                        </div>
                                                        <div className="mb-3">
                                                            <button className="btn btn-primary">Submit</button>
                                                        </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>
                        </div>
                        <a style={{display:"none"}} className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggleDepartmentCategory" role="button">Create</a>
                        </div>

                        {/* Modal Department Category */}

                        {/* Modify Modal Department Category */}
                        <div>
                        <div className="modal fade" id="exampleModifyModalToggleDepartmentCategory" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                            <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalToggleLabel">MODIFY DEPARTMENT | CATEGORY TASK</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                </div>
                                <div className="modal-body">
                                    <div>
                                        <nav>
                                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                            <button className="nav-link active" id="nav-modify-department-tab" data-bs-toggle="tab" data-bs-target="#nav-modify-department" type="button" role="tab" aria-controls="nav-modify-department" aria-selected="true">Department</button>
                                            <button className="nav-link" id="nav-modify-category-task-tab" data-bs-toggle="tab" data-bs-target="#nav-modify-category-task" type="button" role="tab" aria-controls="nav-modify-category-task" aria-selected="false">Category Task</button>
                                            </div>
                                        </nav>
                                        <div className="tab-content" id="nav-tabContent">
                                            <form className="tab-pane fade show active" id="nav-modify-department" role="tabpanel" aria-labelledby="nav-modify-department-tab" style={{marginTop:"15px"}}>
                                                    <div className="mb-3">
                                                        <label htmlFor="department_name" className="form-label">Name Department</label>
                                                        <input type="text" name="department_name" onChange={this.handleOnChange} className="form-control" id="department_name" placeholder="Enter Department Name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <label htmlFor="department_description" className="form-label">Description</label>
                                                        <input type="text" name="department_description" onChange={this.handleOnChange} className="form-control" id="department_description" placeholder="Enter Description Name" />
                                                    </div>
                                                    <div className="mb-3">
                                                        <button className="btn btn-primary">Submit</button>
                                                    </div>
                                            </form>
                                            <div className="tab-pane fade" id="nav-modify-category-task" role="tabpanel" aria-labelledby="nav-modify-category-task-tab">
                                                <form className="tab-pane fade show active" id="nav-modify-department" role="tabpanel" aria-labelledby="nav-modify-department-tab" style={{marginTop:"15px"}}>
                                                        <div className="mb-3">
                                                            <label htmlFor="category_name" className="form-label">Category Name</label>
                                                            <input type="text" name="category_name" onChange={this.handleOnChange} className="form-control" id="category_name" placeholder="Enter Department Name" />
                                                        </div>
                                                        <div className="mb-3">
                                                            <label className="bd-highlight task-right-item-seperate-3 final-class">
                                                                DEPARTMENT:<br/>                                       
                                                                <select name="department_name" id="department_name" value={this.state.task.department}  onChange={this.handleOnChange}  style={{ padding:"2px", width:"100%", height:"30px", fontSize:"16px", marginRight:"10px" }}>
                                                                    <option value="">Choose Department</option>
                                                                    {this.renderListDepartment()}
                                                                </select>
                                                            </label>
                                                        </div>
                                                        <div className="mb-3">
                                                            <button className="btn btn-primary">Submit</button>
                                                        </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            </div>
                        </div>
                        <a  className="btn btn-primary" data-bs-toggle="modal" href="#exampleModifyModalToggleDepartmentCategory" role="button">Create</a>
                        </div>

                        {/* Modify Modal Department Category */}
            

                        </div>

                    </div>
                </div>
                <ToastContainer draggable={false} transition={Zoom} autoClose={6000} />
            </div>
        );
    }
}

export const mapStateToProp = state => {
    return {
        listEmployeesSelect:state.listEmployeesSelectReducer.listEmployeesSelect,
        listTask: state.listTaskReducer.listTask,
        listCategoryTask : state.listCategoryTaskReducer.listCategoryTask,
        listDepartment: state.listDepartmentReducer.listDepartment,
        listCategoryByDepartment: state.listCategoryByDepartmentReducer.listCategoryByDepartment,
        listTaskTree: state.listTaskTreeReducer.listTaskTree
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
        FetchListTask: search_task =>{
            dispatch(actFetchListTaskAPI(search_task))
        },
        FetListCategoryTask: () =>{
            dispatch(actFetchListCategoryAPI())
        },
        FetchListDepartment: () =>{
            dispatch(actFetchListDepartmentAPI())
        },
        FetchListCategoryByDepartment: department_id =>{
            dispatch(actFetchListCategoryByDepartmentAPI(department_id))
        },
        FetchListTaskTree: () =>{
            dispatch(actFetchListTaskTreeAPI())
        }
        
    }
}


export default connect(mapStateToProp,mapDispatchToProp)(Task);
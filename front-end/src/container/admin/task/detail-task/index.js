import React, { Component } from 'react';
import register from "../img/hoang2.JPG"

import {actFetchDetailTaskAPI} from './module-detail-task/action'
import {actPostCommentAPI} from './module-insert-comment/action'
import {actFetchListCommentAPI} from './module-list-comment/action'
import {actUpdateTasksAPI} from './module-update-task/action'

import {connect} from 'react-redux'
import './index.css'
import {ToastContainer, Zoom} from "react-toastify"

class DetailTask extends Component {
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
            comment_task:{
                user_comment_id: "",
                phase_name:"",
                comment:"",
                task_id:"",
                file_commment:"",
            },
            filter_array:"",
            nameFile:"Attachment",
            nameFileComment:"Attachment",
            imgEmployeesSelectRegister:register,
            imgEmployeesSelectConfirmation:register,
            imgEmployeesSelectImplementation:register,
            imgEmployeesSelectTest:register,
            imgEmployeesSelectApproval:register,
            imgEmployeesSelectFinish:register,

            styleRegister:"#DDDDDD",
            styleConfirmation:"#DDDDDD",
            styleImplementation:"#DDDDDD",
            styleTest:"#DDDDDD",
            styleApproval:"#DDDDDD",
            styleFinish:"#DDDDDD",

            disableTextComment: true

        }
    }

    componentWillMount(){
        const task_id = this.props.match.params.task_id
        // console.log("this.props.match.params.id",this.props.match.params.task_id)
        this.props.FetchDetailTask(task_id)
        this.props.FetListComment({task_id:task_id})
    }

    componentDidMount(){
        if(localStorage.getItem("user")){
            this.setState({
                comment_task:{...this.state.comment_task, user_comment_id:JSON.parse(localStorage.getItem("user"))[0].EMPLOYEE_ID}
            })
        }
        let detailTask = {}
        if(localStorage.getItem("task")){
            detailTask = JSON.parse(localStorage.getItem("task"));
        }
        setTimeout(()=>{
            if(document.getElementById("step").value && parseInt(document.getElementById("step").value) === 1){
                this.setState({
                    comment_task:{...this.state.comment_task, phase_name:"Register"},
                    task:{...this.state.task, assignee:detailTask.result.CONFIRMATION_ID, status:"In Progressing" },
                    styleRegister:"#0097CC"
                })
            }
            else if(document.getElementById("step").value && parseInt(document.getElementById("step").value) === 2){
                this.setState({
                    comment_task:{...this.state.comment_task, phase_name:"Confirmation"},
                    task:{...this.state.task, assignee:detailTask.result.IMPLEMENTATION_ID, status:"In Progressing" },
                    styleRegister:"#0097CC",
                    styleConfirmation:"#0097CC",
                })
            }
            else if(document.getElementById("step").value && parseInt(document.getElementById("step").value) === 3){
                this.setState({
                    comment_task:{...this.state.comment_task, phase_name:"Implementation"},
                    task:{...this.state.task, assignee:detailTask.result.TEST_ID, status:"In Progressing" },
                    styleRegister:"#0097CC",
                    styleConfirmation:"#0097CC",
                    styleImplementation:"#0097CC"
                })
            }
            else if(document.getElementById("step").value && parseInt(document.getElementById("step").value) === 4){
                this.setState({
                        omment_task:{...this.state.comment_task, phase_name:"Test"},
                        task:{...this.state.task, assignee:detailTask.result.APPROVAL_ID, status:"In Progressing" },
                        styleRegister:"#0097CC",
                        styleConfirmation:"#0097CC",
                        styleImplementation:"#0097CC",
                        styleTest:"#0097CC",
                })
            }
            else if(document.getElementById("step").value && parseInt(document.getElementById("step").value) === 5){
                this.setState({
                    comment_task:{...this.state.comment_task, phase_name:"Approval"},
                    task:{...this.state.task, assignee:detailTask.result.FINISH_ID, status:"In Progressing"  },
                    styleRegister:"#0097CC",
                    styleConfirmation:"#0097CC",
                    styleImplementation:"#0097CC",
                    styleTest:"#0097CC",
                    styleApproval:"#0097CC",
                })
            }
            else if(document.getElementById("step").value && parseInt(document.getElementById("step").value) === 6){
                this.setState({
                    comment_task:{...this.state.comment_task, phase_name:"Finish"},
                    task:{...this.state.task, assignee:'', status:"Finished" },
                    styleRegister:"#0097CC",
                    styleConfirmation:"#0097CC",
                    styleImplementation:"#0097CC",
                    styleTest:"#0097CC",
                    styleApproval:"#0097CC",
                    styleFinish:"#0097CC"
                })
            }
            this.setState({
                    comment_task:{...this.state.comment_task, task_id: detailTask.result.TASK_ID },
                    // nameFile:detailTask.result.FILE.split("http://localhost:9999/get-file/")[1]
            })
        },10)
    
        console.log("da vao vong if")
        console.log("detailTask result", detailTask.result)

        console.log("da vao vong setTimeOut")
        console.log("detailTask result", detailTask.result)
        setTimeout(()=>{
            console.log("this.state.comment_task", this.state.comment_task)
        },200)

    }


    handleOnChange = event => {
        let{name,value} = event.target;
        if(event.target.files ) {
            this.setState({
                comment_task:{...this.state.comment_task, [name]:value, file_commment:event.target.files[0]},
                task:{...this.state.task, [name]:value, file:event.target.files[0]}                
            })
            if(this.state.nameFileComment !== undefined && this.state.nameFileComment !== "" && this.state.nameFileComment !== "Attachment") {
                this.setState({
                    nameFileComment:this.state.nameFileComment
                })
            }
            else if(this.state.nameFileComment === "Attachment"){
                this.setState({
                    nameFileComment:event.target.files[0].name 
                })
            }

            if(this.state.nameFile !== undefined && this.state.nameFile!== "" && this.state.nameFile!== "Attachment") {
                this.setState({
                    nameFile:this.state.nameFile
                })
            }
            else if(this.state.nameFile === "Attachment"){
                this.setState({
                    nameFile:event.target.files[0].name 
                })
            }
        }
        else{
            this.setState({
                comment_task:{...this.state.comment_task, [name]:value},
                task:{...this.state.task, [name]:value}
            })
            console.log(name, value)
        }
    }

    hanleCommentTaskOnClick = event =>{
        event.preventDefault()
        let data = new FormData()
        data.append("user_comment_id",this.state.comment_task.user_comment_id)
        // data.append("phase_name",this.state.comment_task.phase_name)
        data.append("phase_name","Comment")
        data.append("task_id",this.state.comment_task.task_id)
        data.append("comment",this.state.comment_task.comment)
        data.append("file",this.state.comment_task.file_commment)
        console.log('data',Array.from(data))
        this.props.PostComment(data)
        setTimeout(()=>{
            const task_id = this.props.match.params.task_id
            this.props.FetListComment({task_id:task_id})
            if(this.state.nameFileComment !== "Attachment"){
                this.setState({
                    comment_task:{...this.state.comment_task, comment:'', file: 'Attachment'},
                    nameFileComment: "Attachment"
                })
            }
            else{
                this.setState({
                    comment_task:{...this.state.comment_task, comment:''},
                })
            }

        },200)
    }
    
    handleUpdateDetailtask = event =>{
        event.preventDefault();
        if(this.state.disableTextComment === true){
            this.setState({
                disableTextComment : false,
            })
        }
        else{
            this.setState({
                disableTextComment : true,
            })
            let detailTask = {}
            if(localStorage.getItem("task")){
                detailTask = JSON.parse(localStorage.getItem("task"));
            }

            let data = new FormData()
            data.append("user_comment_id",this.state.comment_task.user_comment_id)
            data.append("phase_name",this.state.comment_task.phase_name)
            data.append("task_id",this.state.comment_task.task_id)
            data.append("comment",this.state.task.description)
            data.append("file",this.state.task.file)
            console.log('data',Array.from(data))
            this.props.PostComment(data)

            let dataUpdate = new FormData()
            dataUpdate.append("step", detailTask.result.STEP + 1)
            dataUpdate.append("assignee_id",this.state.task.assignee)
            dataUpdate.append("effort", detailTask.result.EFFORT + 30)
            dataUpdate.append("task_id",this.state.comment_task.task_id)
            dataUpdate.append("progress", detailTask.result.PROGRESS + 15)
            if(detailTask.result.FILE !== "" ||  detailTask.result.FILE !== undefined){
                dataUpdate.append("file",this.state.task.file)
            }
            if(detailTask.result.STEP ===6){
                dataUpdate.append("status", "Finished")
            }
            else{
                dataUpdate.append("status", "In Progressing")
            }
            this.props.UpdateTask(dataUpdate)
            setTimeout(()=>{
                const task_id = this.props.match.params.task_id
                this.props.FetListComment({task_id:task_id})
                if(this.state.nameFileComment !== "Attachment"){
                    this.setState({
                        task:{...this.state.task , description:'', file: 'Attachment'},
                        nameFile: "Attachment"
                    })
                }
                else{
                    this.setState({
                        task:{...this.state.task, description: detailTask.result.DESCRIPTION},
                    })
                }
                window.close();
    
            },200)
            
        }
    }

    renderHTML = () => {
        const {detailTask,listComment} = this.props
        console.log("detailTask", detailTask)
        console.log("listComment", listComment)
        
        console.log("name user", JSON.parse(localStorage.getItem("user"))[0].USER_NAME)
        if(detailTask.result && detailTask !== undefined && listComment.result && listComment.result.length > 0) {
            return listComment.result.map(item =>{
                return (
                    <div className="d-flex flex-row bd-highlight" style={{marginTop:"20px"}} key ={item.COMMENT_TASK_ID}>
                        <div className="p-2 bd-highlight"><img src={item.IMAGE} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} /></div>
                        <div className="p-2 bd-highlight">
                            <span style={{marginBottom:"0px"}}>{item.FULL_NAME}</span> <span>&emsp;{item.CREATE_COMMENT_DATE}</span>
                            <p style={{marginBottom:"0px", fontWeight:"700"}}>  • {item.PHASE_NAME}:  </p>
                            <p style={{marginBottom:"0px", marginLeft:"15px"}}>  {item.COMMENT} </p>
                            {item.FILE !== "" ?  (<p> <i> <a href={item.FILE} target="_blank" >{item.FILE.split("http://localhost:9999/get-file/")[1]}</a> </i> </p>) : null}
                        </div>
                    </div>
                )
            })

        }
    }

    render() {
        const {detailTask} = this.props
        console.log("detailTask", detailTask)
        if(detailTask.result && detailTask !== undefined) {
            return (
                <div style={{height: '100vh', overflow: 'hidden'}}>
                    <div className="detail-task-top">
                        <p style={{marginBottom:"0px"}}># {detailTask.result.TASK_ID}</p>
                        <input name="step" id="step" type="hidden" value={detailTask.result.STEP ? detailTask.result.STEP : 1}/>
                    </div>
                    <div className="detail-task-container row" style={{marginLeft:"0px", marginRight:"0px"}}>
                        <div className="detail-task-left col-lg-9" style={{position:"relative", paddingLeft:"0px"}}>
                            <div className="detail-task-left-top d-flex flex-row bd-highlight " style={{width:"100%"}}>
                                <div className="bd-highlight detail-task-left-top-item">
                                    <p style={{marginBottom:"0px", fontSize:"14px", color:"#313131"}}>CATEGORY</p>
                                    <p style={{marginLeft:"20px", marginBottom:"0px" , fontSize:"12px", color:"#a4a4a4"}}><i className="fa fa-play"></i> {detailTask.result.CATEGORY}</p>
                                </div>
                                <div className="bd-highlight detail-task-left-top-item">
                                    <p style={{marginBottom:"0px", fontSize:"14px", color:"#313131"}}>ITERATION</p>
                                    <p style={{marginLeft:"20px", marginBottom:"0px",  fontSize:"12px", color:"#a4a4a4"}}><i className="fab fa-joomla"></i> {detailTask.result.JOB}</p>
                                </div>
                            </div>
                            <div className="detail-task-left-body">
                                <div className="d-flex flex-row-reverse bd-highlight detail-task-left-body-top" style={{ marginTop:"10px"}}>
                                    <div className="p-1 bd-highlight detail-task-left-body-top-item" style={{marginRight:"0px"}}>
                                        <h5>DUE DATE</h5>
                                        <h6>{detailTask.result.END_DATE}</h6>
                                    </div>
                                    <div className="p-1 bd-highlight detail-task-left-body-top-item">
                                        <h5>EFFORT POINT</h5>
                                        <h6>{detailTask.result.EFFORT}</h6>
                                    </div>
                                    <div className="p-1 bd-highlight detail-task-left-body-top-item">
                                        <h5>STATUS</h5>
                                        <h6>{detailTask.result.STATUS}</h6>
                                    </div>
                                </div>
                                <div className="detail-task-left-body-center-bottom row" style={{paddingLeft:"10px", paddingRight:"0px"}}>
                                    <div className="detail-task-detail-task-left-body-center-bottom-left col-lg-4" >
                                        <div >
                                            <div className="task-modal-body-right-item d-flex " style={{backgroundColor:"#0097CC", width:"100%", fontWeight:"700", color:"#FFFFFF"}}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center", width:"49%", padding:"8px 0px"}}>Phase</div>
                                                <div className="task-model-line w-10" style = {{height:"40px", width:"1px",padding:"1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="w-45" style={{textAlign:"center",  width:"49%", padding:"8px 0px", fontWeight:"700", color:"#FFFFFF"}}>PIC</div>
                                            </div>
                                        </div>
                                        <div className="phase_item" style={{height:"75vh",overflow: "auto", paddingbottom: "120px"}}>
                                            <div className="detail-task-left-body-center-bottom-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"52%", paddingLeft:"10px"}}>
                                                    <i className="fa fa-pencil-alt" style={{color:"#0097cc", marginTop:"10px", fontSize:"25px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"14px", marginTop:"5px"}}>Register</p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:this.state.styleRegister }}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"68px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:this.state.styleRegister, position:"absolute", top:"50px", left:"230px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",   marginTop:"10px", position:"relative", width:"50%"}}>
                                                    <img src={detailTask.result.IMAGE_REGISTER} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <p style={{fontSize:"16px", textAlign:"center", marginTop:"10px",marginBottom:"0px" ,paddingLeft:"5px", color:"#a1a1a1"}}>{detailTask.result.FULL_NAME_REGISTER}</p>
                                                </div>
                                            </div>
                                            <div className="detail-task-left-body-center-bottom-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"52%", paddingLeft:"10px"}}>
                                                    <i className="fa fa-splotch" style={{color:"#0097cc", marginTop:"10px", fontSize:"25px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"14px", marginTop:"5px"}}>Confirmation</p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:this.state.styleConfirmation}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:this.state.styleConfirmation, position:"absolute", top:"50px", left:"230px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",   marginTop:"10px", position:"relative", width:"50%"}}>
                                                    <img src={detailTask.result.IMAGE_CONFIRMATION} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <p style={{fontSize:"16px", textAlign:"center", marginTop:"10px",marginBottom:"0px" ,paddingLeft:"5px", color:"#a1a1a1"}}>{detailTask.result.FULL_NAME_CONFIRMATION}</p>
                                                </div>
                                            </div>
                                            <div className="detail-task-left-body-center-bottom-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"52%", paddingLeft:"10px"}}>
                                                    <i className="fa fa-cogs" style={{color:"#0097cc", marginTop:"10px", fontSize:"25px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"14px", marginTop:"5px"}}>Implementation</p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:this.state.styleImplementation}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:this.state.styleImplementation, position:"absolute", top:"50px", left:"230px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",   marginTop:"10px", position:"relative", width:"50%"}}>
                                                    <img src={detailTask.result.IMAGE_IMPLEMENTATION} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <p style={{fontSize:"16px", textAlign:"center", marginTop:"10px",marginBottom:"0px" ,paddingLeft:"5px", color:"#a1a1a1"}}>{detailTask.result.FULL_NAME_IMPLEMENTATION}</p>
                                                </div>
                                            </div>
                                            <div className="detail-task-left-body-center-bottom-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"52%", paddingLeft:"10px"}}>
                                                    <i className="fa fa-list" style={{color:"#0097cc", marginTop:"10px", fontSize:"25px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"14px", marginTop:"5px"}}>Test</p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:this.state.styleTest}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:this.state.styleTest, position:"absolute", top:"50px", left:"230px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",   marginTop:"10px", position:"relative", width:"50%"}}>
                                                    <img src={detailTask.result.IMAGE_TEST} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <p style={{fontSize:"16px", textAlign:"center", marginTop:"10px",marginBottom:"0px" ,paddingLeft:"5px", color:"#a1a1a1"}}>{detailTask.result.FULL_NAME_TEST}</p>
                                                </div>
                                            </div>
                                            <div className="detail-task-left-body-center-bottom-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"52%", paddingLeft:"10px"}}>
                                                    <i className="fa fa-check" style={{color:"#0097cc", marginTop:"10px", fontSize:"25px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"14px", marginTop:"5px"}}>Approval</p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:this.state.styleApproval,}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:this.state.styleApproval, position:"absolute", top:"50px", left:"230px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",   marginTop:"10px", position:"relative", width:"50%"}}>
                                                    <img src={detailTask.result.IMAGE_APPROVAL} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <p style={{fontSize:"16px", textAlign:"center", marginTop:"10px",marginBottom:"0px" ,paddingLeft:"5px", color:"#a1a1a1"}}>{detailTask.result.FULL_NAME_APPROVAL}</p>
                                                </div>
                                            </div>
                                            <div className="detail-task-left-body-center-bottom-item d-flex" style={{ width:"100%", position:"relative" }}>                                               
                                                <div className="w-45 bd-highlight" style={{textAlign:"center",  width:"52%", paddingLeft:"10px"}}>
                                                    <i className="fa fa-star-and-crescent" style={{color:"#0097cc", marginTop:"10px", fontSize:"25px"}}></i>
                                                    <p style={{fontWeight:"600", color:"#0097cc", fontSize:"14px", marginTop:"5px"}}>Finish</p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-calendar-alt"></i></span>
                                                        <span>Nov 06, 2021</span>
                                                    </p>
                                                    <p className="detail-task-left-body-center-bottom-item-text">
                                                        <span><i className="fa fa-clock"></i></span>
                                                        <span>17:30</span>
                                                    </p>
                                                </div>
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:this.state.styleFinish}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:this.state.styleFinish, position:"absolute", top:"50px", left:"230px"}}></div>                                                
                                                <div className="w-45" style={{textAlign:"center",   marginTop:"10px", position:"relative", width:"50%"}}>
                                                    <img src={detailTask.result.IMAGE_FINISH} name="register" alt="register" style={{width:"80px", height:"80px", borderRadius:"50%"}} />
                                                    <p style={{fontSize:"16px", textAlign:"center", marginTop:"10px",marginBottom:"0px" ,paddingLeft:"5px", color:"#a1a1a1"}}>{detailTask.result.FULL_NAME_FINISH}</p>
                                                </div>
                                            </div>
                                        </div>                                    
                                    </div>
                                    <div className="detail-task-detail-task-left-body-center-bottom-right col-lg-8" style={{position:"relative"}}>
                                        <div className="d-flex flex-row bd-highlight  text-center" style={{width:"100%"}}>
                                            <div className=" bd-highlight detail-task-detail-task-left-body-center-bottom-right-item" style={{width:"25%"}}>
                                                <p style={{marginBottom:"0px", color:"#fff", backgroundColor:"#0097CC", fontSize:"16px", padding:"8px 0px"}}>Type</p>
                                                <div style={{padding:"20px"}}>
                                                    <p style={{marginBottom:"0px", borderRadius:"25px", backgroundColor:"rgb(231, 76, 60)", padding:"5px", color:"#fff"}} >{detailTask.result.JOB}</p>
                                                </div>
                                            </div>
                                            <div className="bd-highlight detail-task-detail-task-left-body-center-bottom-right-item" style={{width:"50%"}}>
                                                <p style={{marginBottom:"0px", color:"#fff", backgroundColor:"#0097CC", fontSize:"16px", padding:"8px 0px"}}>Title</p>                                            
                                                <div style={{padding:"20px"}}>
                                                    <p style={{marginBottom:"0px" ,color:"#666666"}}>{detailTask.result.TITLE}</p>
                                                </div>
                                            </div>
                                            <div className="bd-highlight detail-task-detail-task-left-body-center-bottom-right-item" style={{width:"25%"}}>
                                                <p style={{marginBottom:"0px", color:"#fff", backgroundColor:"#0097CC", fontSize:"16px", padding:"8px 0px"}}>Important</p>
                                                <div style={{padding:"20px"}}>
                                                    <p style={{marginBottom:"0px",color:"#666666",backgroundColor:"#ebebeb", borderRadius:"25px", padding:"5px"}}>{detailTask.result.IMPORTANT} <i className="fa fa-long-arrow-alt-up"></i></p>
                                                </div>                                            
                                            </div>
                                        </div>
                                        <div className="task-modal-body-item detail-task-detail-task-left-body-center-bottom-right-item-textarea" style={{width:"100%", position:"relative"}}>
                                                <textarea name="description" disabled={this.state.disableTextComment} onChange={this.handleOnChange} value={this.state.task.description}  id="description" placeholder={detailTask.result.DESCRIPTION}  style={{width:"100%",border:"2px solid  #DDDDDD"}} rows="20" cols="200" />
                                        </div>
                                        <label className="task-modal-body-item" style={{width:"100%", position:"relative", border:"2px solid  #DDDDDD", height:"100px", backgroundColor:"#F2F2F2"}}>
                                                <i className="fa fa-paperclip" style={{fontSize:"20px", marginLeft:"10px", marginTop:"10px", color:"#0097cc"}}></i> <i> <a href={detailTask.result.FILE} target="_blank" >{this.state.nameFile !== "Attachment" ? this.state.nameFile  : <i>{detailTask.result.FILE.split("http://localhost:9999/get-file/")[1]}</i> }</a> </i>
                                                <input type="file" name="file" id="file" onChange={this.handleOnChange}  placeholder="Write a title" style={{width:"100%", display:"none"}} />
                                        </label>
                                        <button type="submit" onClick={this.handleUpdateDetailtask} className="btn btn-outline-primary" style={{float:"right", marginTop:"20px"}}>Submit</button>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                        <div className="detail-task-left-comment col-lg-3">
                            <div className="detail-task-container" style={{height:"70vh", overflowY:"auto", marginBottom:"20px"}}>
                                {this.renderHTML()}
                            </div>
                            <div className="task-modal-body-item-comment" style={{width:"100%", position:"relative"}}>
                                <textarea name="comment" value={this.state.comment_task.comment} placeholder="Write comment" onChange={this.handleOnChange} style={{width:"100%",border:"2px solid  #DDDDDD",padding:"0px 0"}} rows="5" cols="100" />
                            </div>
                            <div className="d-flex bd-highlight" style={{position:"relative"}}>
                                <div className=" w-100 bd-highlight">
                                    <label className="task-modal-body-item" style={{width:"100%", position:"relative", border:"2px solid  #DDDDDD", height:"80px", backgroundColor:"#F2F2F2"}}>
                                        <i className="fa fa-paperclip" style={{fontSize:"20px", marginLeft:"10px", marginTop:"10px", color:"#0097cc"}}></i> <i>{this.state.nameFileComment}</i>
                                        <input type="file" name="file_commment" id="file" onChange={this.handleOnChange} placeholder="Write a title" style={{width:"100%", display:"none"}} />
                                        
                                    </label>
                                </div>
                                <div className="flex-shrink-1 bd-highlight">
                                    <button type="submit" onClick={this.hanleCommentTaskOnClick} className="detail-task-button-submit" ><i className="fa fa-paper-plane"></i></button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <ToastContainer draggable={false} transition={Zoom} autoClose={6000} />
                </div>
            );
        }
        else{
            return null
        }

    }
}

export const mapStateToProp = state => {
    return {
        detailTask: state.detailTaskReducer.detailTask,
        listComment: state.listCommentReducer.listComment
    }
}

export const mapDispatchToProp = dispatch =>{
    return {
        FetchDetailTask: task_id =>{
            dispatch(actFetchDetailTaskAPI(task_id))
        },
        PostComment: comment =>{
            dispatch(actPostCommentAPI(comment))
        },
        FetListComment: task_id =>{
            dispatch(actFetchListCommentAPI(task_id))
        },
        UpdateTask: task =>{
            dispatch(actUpdateTasksAPI(task)) 
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (DetailTask);
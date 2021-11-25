import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import register from "../img/hoang2.JPG"

import HoangNguyen from "../img/hoang2.JPG"
import ThuQuyen from "../img/Quyen.jpg"
import TanQuoi from "../img/quoi.jpg"
import PhutPhan from "../img/Phut.jpg"
import HoangLong from "../img/140962701_1784042098431729_6866337980522035164_n.jpg"

import {actFetchDetailTaskAPI} from './module-detail-task/action'
import {connect} from 'react-redux'

import './index.css'

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
            filter_array:"",
            nameFile:"Attachment",
            imgEmployeesSelectRegister:register,
            imgEmployeesSelectConfirmation:register,
            imgEmployeesSelectImplementation:register,
            imgEmployeesSelectTest:register,
            imgEmployeesSelectApproval:register,
            imgEmployeesSelectFinish:register,

        }
    }

    componentWillMount(){
        const task_id = this.props.match.params.task_id
        // console.log("this.props.match.params.id",this.props.match.params.task_id)
        this.props.FetchDetailTask(task_id)

    }
    render() {
        const {detailTask} = this.props
        console.log("detailTask", detailTask)
        if(detailTask.result && detailTask !== undefined) {
            return (
                <div style={{height: '100vh', overflow: 'hidden'}}>
                    <div className="detail-task-top">
                        <p style={{marginBottom:"0px"}}># {detailTask.result.TASK_ID}</p>
                    </div>
                    <div className="detail-task-container row" style={{marginLeft:"0px", marginRight:"0px"}}>
                        <div className="detail-task-left col-lg-8" style={{position:"relative", paddingLeft:"0px"}}>
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
                                <div className="detail-task-left-body-center-bottom row" style={{paddingLeft:"0px", paddingRight:"0px"}}>
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
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"63px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"200px"}}></div>                                                
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
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"200px"}}></div>                                                
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
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"200px"}}></div>                                                
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
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"200px"}}></div>                                                
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
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"200px"}}></div>                                                
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
                                                <div className="task-model-line w-10" style = {{height:"140px", width:"1px",padding:"0px 1px", border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD"}}></div>
                                                <div className="task-model-line w-10" style = {{height:"2px", width:"70px",padding:"1px 1px" , border:"2px solid #DDDDDD", backgroundColor:"#DDDDDD", position:"absolute", top:"50px", left:"200px"}}></div>                                                
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
                                                <textarea name="description" id="description" placeholder={detailTask.result.DESCRIPTION}  style={{width:"100%",border:"2px solid  #DDDDDD"}} rows="20" cols="200" />
                                        </div>
                                        <label className="task-modal-body-item" style={{width:"100%", position:"relative", border:"2px solid  #DDDDDD", height:"100px", backgroundColor:"#F2F2F2"}}>
                                                <i className="fa fa-paperclip" style={{fontSize:"20px", marginLeft:"10px", marginTop:"10px", color:"#0097cc"}}></i> <i> <a href={detailTask.result.FILE} target="_blank" >{detailTask.result.FILE.split("http://localhost:9999/get-file/")[1]}</a> </i>
                                                <input type="text" name="file" id="file"  placeholder="Write a title" style={{width:"100%", display:"none"}} />
                                        </label>
                                        <button type="submit" className="btn btn-outline-primary" style={{float:"right", marginTop:"20px"}}>submit</button>
                                    </div>
                                </div>                        
                            </div>
                        </div>
                            <div className="detail-task-left-comment col-lg-4">
                                <div className="d-flex flex-row bd-highlight" style={{marginTop:"20px"}}>
                                    <div className="p-2 bd-highlight"><img src={HoangNguyen} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} /></div>
                                    <div className="p-2 bd-highlight">
                                        <p style={{marginBottom:"0px"}}>Nguyễn Trần Hoàng</p>
                                        <p style={{marginBottom:"0px", fontWeight:"700"}}>  • Submitted:  </p>
                                        <p style={{marginBottom:"0px"}}>  Keep going </p>
                                    </div>
                                </div>
    
                                <div className="d-flex flex-row bd-highlight" style={{marginTop:"20px"}}>
                                    <div className="p-2 bd-highlight"><img src={HoangLong} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} /></div>
                                    <div className="p-2 bd-highlight">
                                        <p style={{marginBottom:"0px"}}>Nguyễn Viết Hoàng Long</p>
                                        <p style={{marginBottom:"0px", fontWeight:"700"}}>  • Submitted:  </p>
                                        <p style={{marginBottom:"0px"}}>  Dear Mr Trần Tấn Quới <br/> I finshed task, you can check to help me again <br/> Thank you & Best Regards. </p>
                                    </div>
                                </div>
    
                                <div className="d-flex flex-row bd-highlight" style={{marginTop:"20px"}}>
                                    <div className="p-2 bd-highlight"><img src={TanQuoi} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} /></div>
                                    <div className="p-2 bd-highlight">
                                        <p style={{marginBottom:"0px"}}>Trần Tấn Quới</p>
                                        <p style={{marginBottom:"0px", fontWeight:"700"}}>  • Submitted:  </p>
                                        <p style={{marginBottom:"0px"}}>  Dear Mr Nguyễn Trần Hoàng <br/> I tested and dont't have bugs. You can Approve </p>
                                    </div>
                                </div>
    
                                <div className="d-flex flex-row bd-highlight" style={{marginTop:"20px"}}>
                                    <div className="p-2 bd-highlight"><img src={HoangNguyen} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} /></div>
                                    <div className="p-2 bd-highlight">
                                        <p style={{marginBottom:"0px"}}>Nguyễn Trần Hoàng </p>
                                        <p style={{marginBottom:"0px" , fontWeight:"700"}}>  • Changed Nguyễn Thị Thu Quyên Approval </p>
                                    </div>
                                </div>
    
                                <div className="d-flex flex-row bd-highlight" style={{marginTop:"20px"}}>
                                    <div className="p-2 bd-highlight"><img src={ThuQuyen} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} /></div>
                                    <div className="p-2 bd-highlight">
                                        <p style={{marginBottom:"0px"}}>Nguyễn Thị Thu Quyên </p>
                                        <p style={{marginBottom:"0px", fontWeight:"700"}}>  • Submitted:  </p>
                                        <p style={{marginBottom:"0px"}}>  Dear Mr Phút Phan <br/> I cheked again, bug is fixed, we can finish task </p>
                                    </div>
                                </div>
    
                                <div className="d-flex flex-row bd-highlight" style={{marginTop:"20px"}}>
                                    <div className="p-2 bd-highlight"><img src={PhutPhan} alt="" style={{width:"60px", height:"60px", borderRadius:"50%"}} /></div>
                                    <div className="p-2 bd-highlight">
                                        <p style={{marginBottom:"0px"}}>Phút Phan</p>
                                        <p style={{marginBottom:"0px" , fontWeight:"700"}}>  • Submitted:  </p>
                                        <p style={{marginBottom:"0px"}}>  I finished task</p>
                                    </div>
                                </div>
    
                                <div className="task-modal-body-item-comment" style={{width:"100%", position:"relative"}}>
                                    <textarea name="description"  placeholder="Write description" style={{width:"100%",border:"2px solid  #DDDDDD",padding:"0px 0"}} rows="5" cols="100" />
                                </div>
                                <label className="task-modal-body-item" style={{width:"100%", position:"relative", border:"2px solid  #DDDDDD", height:"80px", backgroundColor:"#F2F2F2"}}>
                                    <i className="fa fa-paperclip" style={{fontSize:"20px", marginLeft:"10px", marginTop:"10px", color:"#0097cc"}}></i> <i>{this.state.nameFile}</i>
                                    <input type="file" name="file" id="file" placeholder="Write a title" style={{width:"100%", display:"none"}} />
                                </label>
    
                            </div>
                    </div>
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
        detailTask: state.detailTaskReducer.detailTask
    }
}

export const mapDispatchToProp = dispatch =>{
    return {
        FetchDetailTask: task_id =>{
            dispatch(actFetchDetailTaskAPI(task_id))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (DetailTask);
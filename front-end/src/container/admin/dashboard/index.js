import React, { Component } from 'react';
import {Link} from "react-router-dom";
import {actFetchCountEmployeesPhaseAPI} from './module-count-employees-phase/action'
import {actFetchCountCategoryAPI} from './module-count-category/action'
import {actFetchListTaskToDoAPI} from './module-list-task-to-do/action'
import {actFetchListTaskDoingAPI} from './module-list-task-doing/action'
import {actFetchListTaskDoneAPI} from './module-list-task-done/action'
import './css/index.css'
import { connect } from 'react-redux';


class Dashboard extends Component {

    componentWillMount() {
        let user = {}
        if(localStorage.getItem("user")){
            user = JSON.parse(localStorage.getItem("user"))[0]
            this.props.FetchListToDo({employee_id:user.EMPLOYEE_ID})
            this.props.FetchListDoing({employee_id:user.EMPLOYEE_ID})
            this.props.FetListDone({employee_id:user.EMPLOYEE_ID})
        }
        
        
    }

    componentDidMount(){
        this.props.FetchCountEmployessPhase()
        this.props.FetchCountCategory()
    }

    renderToDoHTml = () =>{
        const {listTaskToDo} = this.props
        if(listTaskToDo.result && listTaskToDo.result.length > 0){
            listTaskToDo.result = listTaskToDo.result.filter(item => item.STATUS !== "FINISHED" && item.STATUS !== null && item.STATUS !== "")
            console.log("listTaskToDo.result.filter to do: ", listTaskToDo.result)
            return listTaskToDo.result.map(item =>{
                return(
                    <div  className="dashboard-ticket" key={item.TASK_ID}>
                            <Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">
                                <div className="d-flex" style={{marginTop:"10px"}}>
                                    <div className="w-100">
                                        <h6>{item.TITLE}</h6>
                                    </div>
                                    <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                        <p>{item.TASK_ID}</p>
                                    </div>
                                </div>
                                <p>{item.TITLE}</p>
                                <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                    <div className="w-100">
                                        <p><i className="fa fa-folder"></i> {item.CATEGORY_NAME}</p>
                                        <p><i className="fa fa-stream"></i> {item.PHASE}</p>
                                        <p><i className="fa fa-clock"></i>{item.END_DATE}</p>
                                    </div>
                                    <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                        <p>7 day(s)</p>
                                        <p>{item.USER_NAME} <img src={item.IMAGE} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                        <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 15px", borderRadius:"30px"}}>{item.STATUS}</p>
                                    </div>
                                </div>
                            </Link>
                    </div>
            )
            })
        }

    }

    renderDoingHTml = () =>{
        const {listTaskDoing} = this.props
        if(listTaskDoing.result && listTaskDoing.result.length > 0){
            listTaskDoing.result = listTaskDoing.result.filter(item => item.STATUS !== "FINISHED" && item.STATUS !== null && item.STATUS !== "")
            console.log("istTaskDoing.result.filter doing: ", listTaskDoing.result)
            return listTaskDoing.result.map(item =>{
                return(
                    <div className="dashboard-ticket" key={item.TASK_ID}>
                            <Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">
                                <div className="d-flex" style={{marginTop:"10px"}}>
                                    <div className="w-100">
                                        <h6>{item.TITLE}</h6>
                                    </div>
                                    <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                        <p>{item.TASK_ID}</p>
                                    </div>
                                </div>
                                <p>{item.TITLE}</p>
                                <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                    <div className="w-100">
                                        <p><i className="fa fa-folder"></i> {item.CATEGORY_NAME}</p>
                                        <p><i className="fa fa-stream"></i> {item.PHASE}</p>
                                        <p><i className="fa fa-clock"></i>{item.END_DATE}</p>
                                    </div>
                                    <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                        <p>7 day(s)</p>
                                        <p>{item.USER_NAME} <img src={item.IMAGE} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                        <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 15px", borderRadius:"30px"}}>{item.STATUS}</p>
                                    </div>
                                </div>
                            </Link>
                    </div>
            )
            })
        }
    }

    renderTaskDoneHTml = () =>{
        const {listTaskDone} = this.props
        if(listTaskDone.result && listTaskDone.result.length > 0){
            listTaskDone.result = listTaskDone.result.filter(item => item.STATUS !== "FINISHED" && item.STATUS !== null && item.STATUS !== "")
            console.log("listTaskDone.result.filter to do: ", listTaskDone.result)
            return listTaskDone.result.map(item =>{
                return(
                    <div className="dashboard-ticket" key={item.TASK_ID}>
                            <Link to={`/admin/task/detail-task/${item.TASK_ID}`} target="_blank">
                                <div className="d-flex" style={{marginTop:"10px"}}>
                                    <div className="w-100">
                                        <h6>{item.TITLE}</h6>
                                    </div>
                                    <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                        <p>{item.TASK_ID}</p>
                                    </div>
                                </div>
                                <p>{item.TITLE}</p>
                                <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                    <div className="w-100">
                                        <p><i className="fa fa-folder"></i> {item.CATEGORY_NAME}</p>
                                        <p><i className="fa fa-stream"></i> {item.PHASE}</p>
                                        <p><i className="fa fa-clock"></i>{item.END_DATE}</p>
                                    </div>
                                    <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                        <p>7 day(s)</p>
                                        <p>{item.USER_NAME} <img src={item.IMAGE} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                        <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 15px", borderRadius:"30px"}}>{item.STATUS}</p>
                                    </div>
                                </div>
                            </Link>
                    </div>
            )
            })
        }

    }

    render() {
        const {listTaskToDo} = this.props
        const {listTaskDoing} = this.props
        const {listTaskDone} = this.props
        return(
            <div className="dashboard-content row">
                <div className="dashboard-left col-md-4">
                    <div className="dashboard-container">
                        <div className="dashboard-title">               
                            <div className="d-flex">
                                <div className="w-100"><h5>To do</h5></div>
                                <div className="flex-shrink-1">
                                    <p>{listTaskToDo.result && listTaskToDo.result.length > 0 ? listTaskToDo.result.length : 0}</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-list-ticket">
                            {this.renderToDoHTml()}
                        </div>
                        
                         
                    </div>           
                </div>
                <div className="dashboard-center col-md-4">
                    <div className="dashboard-container">
                        <div className="dashboard-title">               
                            <div className="d-flex">
                                <div className="w-100"><h5>Doing</h5></div>
                                <div className="flex-shrink-1">
                                    <p>{listTaskDone.result && listTaskDone.result.length > 0 ? listTaskDone.result.length : 0}</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-list-ticket">
                            {this.renderDoingHTml()}
                        </div> 
                    </div>                    
                </div>
                <div className="dashboard-right col-md-4">
                    <div className="dashboard-container">
                    <div className="dashboard-title">               
                            <div className="d-flex">
                                <div className="w-100"><h5>Done</h5></div>
                                <div className="flex-shrink-1">
                                    <p>{listTaskToDo.result && listTaskToDo.result.length > 0 ? listTaskToDo.result.length : 0}</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-list-ticket">
                            {this.renderTaskDoneHTml()}
                        </div> 
                    </div>          
                </div>
            </div>
        )

            
    }
}

export const mapStateToProp = state => {
    return {
        listCountEmployeesPhase: state.listCountEmployeesReducer.listCountEmployeesPhase,
        listCountCategory:state.listCountCategoryReducer.listCountCategory,
        listTaskToDo: state.listTaskToDoReducer.listTaskToDo,
        listTaskDoing:state.listTaskDoingReducer.listTaskDoing,
        listTaskDone:state.listTaskDoneReducer.listTaskDone
    }
}

export const mapDispatchToProp = dispatch =>{
    return{
        FetchCountEmployessPhase: () =>{
            dispatch(actFetchCountEmployeesPhaseAPI())
        },
        FetchCountCategory: () =>{
            dispatch(actFetchCountCategoryAPI())
        },
        FetchListToDo: user =>{
            dispatch(actFetchListTaskToDoAPI(user))
        },
        FetchListDoing: user=>{
            dispatch(actFetchListTaskDoingAPI(user))
        },
        FetListDone: user =>{
            dispatch(actFetchListTaskDoneAPI(user))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (Dashboard);
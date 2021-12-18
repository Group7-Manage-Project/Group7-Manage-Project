import React, { Component } from 'react';
import user from './image/hoang2.JPG'
import {actFetchCountEmployeesPhaseAPI} from './module-count-employees-phase/action'
import {actFetchCountCategoryAPI} from './module-count-category/action'
import './css/index.css'
import { connect } from 'react-redux';


class Dashboard extends Component {

    componentDidMount(){
        this.props.FetchCountEmployessPhase()
        this.props.FetchCountCategory()
    }

    render() {
        return(
            <div className="dashboard-content row">
                <div className="dashboard-left col-md-4">
                    <div className="dashboard-container">
                        <div className="dashboard-title">               
                            <div className="d-flex">
                                <div className="w-100"><h5>To do</h5></div>
                                <div className="flex-shrink-1">
                                    <p>9</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-list-ticket">
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                         
                    </div>           
                </div>
                <div className="dashboard-center col-md-4">
                    <div className="dashboard-container">
                        <div className="dashboard-title">               
                            <div className="d-flex">
                                <div className="w-100"><h5>Doing</h5></div>
                                <div className="flex-shrink-1">
                                    <p>9</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-list-ticket">
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                        </div> 
                    </div>                    
                </div>
                <div className="dashboard-right col-md-4">
                    <div className="dashboard-container">
                    <div className="dashboard-title">               
                            <div className="d-flex">
                                <div className="w-100"><h5>Done</h5></div>
                                <div className="flex-shrink-1">
                                    <p>9</p>
                                </div>
                            </div>
                        </div>
                        <div className="dashboard-list-ticket">
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
                            <div className="dashboard-ticket">
                                    <div className="d-flex" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <h6>Documentation</h6>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", paddingRight:"10px"}}>
                                            <p>6636</p>
                                        </div>
                                    </div>
                                    <p>[OCMP][OCMP-908][Hoang Nguyen] SQL Conversion (Ora > Pg) 11th Iteration - 006 - Part 2</p>
                                    <div className="d-flex dashboard-ticket-body" style={{marginTop:"10px"}}>
                                        <div className="w-100">
                                            <p><i className="fa fa-folder"></i> Khoa Công nghệ - thông tin</p>
                                            <p><i className="fa fa-stream"></i> Implementation</p>
                                            <p><i className="fa fa-clock"></i> Dec 10, 2021</p>
                                        </div>
                                        <div className="flex-shrink-1" style={{paddingLeft:"10px", textAlign:"right"}}>
                                            <p>7 day(s)</p>
                                            <p>Hoang Nguyen <img src={user} style={{borderRadius:"50%"}} width="30" height="30" alt="user-phase" /></p>
                                            <p style={{fontSize:"15px", fontWeight:"500", backgroundColor:"#80b983", color:"#FFF", textAlign:"center", padding:"3px 0px", borderRadius:"30px"}}>IN-PROGRESS</p>
                                        </div>
                                    </div>
                            </div>
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
        listCountCategory:state.listCountCategoryReducer.listCountCategory
    }
}

export const mapDispatchToProp = dispatch =>{
    return{
        FetchCountEmployessPhase: () =>{
            dispatch(actFetchCountEmployeesPhaseAPI())
        },
        FetchCountCategory: () =>{
            dispatch(actFetchCountCategoryAPI())
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp) (Dashboard);
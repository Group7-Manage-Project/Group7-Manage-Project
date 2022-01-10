import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2'
import './css/index.css'
import {actFetchListCountAPI} from './module-list-count/action'
import { connect } from 'react-redux';
import  Cookies  from 'js-cookie';


class DeTailPerson extends Component {
    constructor(props) {
        super(props);
        this.state={
            employee_id:""
        }
    }

    componentWillMount() {
        let user = {}
        if(localStorage.getItem("user")){
            user = JSON.parse(localStorage.getItem("user"))[0]
            this.setState({
                employee_id: user.EMPLOYEE_ID
            })
            console.log("user.EMPLOYEE_ID: ",user.EMPLOYEE_ID)
        }
        
    }

    componentDidMount() {
        this.props.FetchListCount(this.state.employee_id)
    }

    hanleLogoutOnClick = () =>{
        Cookies.remove('user')
        localStorage.removeItem("user")
        window.location.reload()
    }

    renderBarChart = () =>{
        const {listCount} = this.props
        if(listCount.result && listCount.result.length > 0 ){
            return(
                <Bar
            data={{
                labels: ['REGISTER_USER', 'CONFIRMATION', 'IMPLEMENTATION', 'TEST', 'APPROVAL', 'FINISH'], 
                datasets:[
                    {
                        label: 'Employees',
                        data: [listCount.result[0].COUNT_REGISTER,listCount.result[0].COUNT_CONFIRMATION,listCount.result[0].COUNT_IMPLEMENTATION,listCount.result[0].COUNT_TEST,listCount.result[0].COUNT_APPROVAL,listCount.result[0].COUNT_FINISH ] ,
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor:[
                            'rgba(255, 99, 132, 1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }
                ]
            }}
            
            height={0}
            width={0}
            options = {{
                maintainAspectRatio: false,
                scales:{
                    yAxes: [
                        {
                            ticks:{
                                beginAtzero: true
                            }
                        }
                    ]
                }
            }}
        />
            )
        }
    }




    render() {
        let user = {}
        if(localStorage.getItem("user")){
            user = JSON.parse(localStorage.getItem("user"))[0]
        }
        return (
            <div>
                <div className="" style={{position:"relative",height:"370px"}}>
                    <div className="profile-content">
                        <img className="mx-auto" src={user.IMAGE} width="250" height="250" alt="person-card" />
                        <h3>{user.FULL_NAME}</h3>
                        <button className="btn btn-outline-primary" onClick={this.hanleLogoutOnClick}>Log Out</button>
                    </div>
                </div>
                <div style={{height: '350px', marginTop: '50px'}}>
                    {this.renderBarChart()}
                </div>
            </div>

        );
    }
}

export const mapStateToProp = state => {
    return {
        listCount:state.listCountReducer.listCount
    }
}

export const mapDispatchToProp = dispatch =>{
    return{
        FetchListCount : employee_id =>{
            dispatch(actFetchListCountAPI(employee_id))
        }
    }
}

export default connect(mapStateToProp, mapDispatchToProp)(DeTailPerson);
import React, { Component } from 'react';
import { Bar , Line , Pie, Radar, PolarArea} from 'react-chartjs-2'

import {actFetchCountEmployeesPhaseAPI} from './module-count-employees-phase/action'
import {actFetchCountCategoryAPI} from './module-count-category/action'
import { connect } from 'react-redux';


class Statistical extends Component {

    componentDidMount(){
        this.props.FetchCountEmployessPhase()
        this.props.FetchCountCategory()
    }

    render() {
        const {listCountEmployeesPhase,listCountCategory} = this.props;
        if(listCountEmployeesPhase.result && listCountEmployeesPhase.result.length > 0 && listCountCategory.result && listCountCategory.result.length > 0){
            return (
                <div style={{height:"90vh",overflow: 'auto', overflowX: 'hidden', padding:"50px 0"}}>  
                    <div className="count-employees-phase-container row" style={{padding:"50px"}}>
                        <div className="count-employees-phase-container-left col-lg-7">
                            <div className="bar">
                                <Bar
                                    data={{
                                        labels: ['REGISTER_USER', 'CONFIRMATION', 'IMPLEMENTATION', 'TEST', 'APPROVAL', 'FINISH'], 
                                        datasets:[
                                            {
                                                label: 'Employees',
                                                data: [listCountEmployeesPhase.result[0].COUNT_REGISTER_USER,listCountEmployeesPhase.result[0].COUNT_CONFIRMATION,listCountEmployeesPhase.result[0].COUNT_IMPLEMENTATION,listCountEmployeesPhase.result[0].COUNT_TEST,listCountEmployeesPhase.result[0].COUNT_APPROVAL,listCountEmployeesPhase.result[0].COUNT_FINISH ] ,
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
                                            },
                                            {
                                                label: 'Total Employees in Team',
                                                data: [listCountEmployeesPhase.result[0].COUNT_EMPLOYEES,listCountEmployeesPhase.result[0].COUNT_EMPLOYEES,listCountEmployeesPhase.result[0].COUNT_EMPLOYEES,listCountEmployeesPhase.result[0].COUNT_EMPLOYEES,listCountEmployeesPhase.result[0].COUNT_EMPLOYEES,listCountEmployeesPhase.result[0].COUNT_EMPLOYEES],
                                                backgroundColor: 'orange',
                                                boderColor:'red'
    
                                            }
                                        ]
                                    }}
                                    
                                    height={300}
                                    width={300}
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
                        </div>
                        </div>
                        <div className="count-employees-phase-container-right col-lg-5">
                            <div className="radar">
                                <Radar
                                    data={{
                                        labels: ['REGISTER_USER', 'CONFIRMATION', 'IMPLEMENTATION', 'TEST', 'APPROVAL', 'FINISH'], 
                                        datasets:[
                                            {
                                                label: '# of votes',
                                                data: [listCountEmployeesPhase.result[0].COUNT_REGISTER_USER,listCountEmployeesPhase.result[0].COUNT_CONFIRMATION,listCountEmployeesPhase.result[0].COUNT_IMPLEMENTATION,listCountEmployeesPhase.result[0].COUNT_TEST,listCountEmployeesPhase.result[0].COUNT_APPROVAL,listCountEmployeesPhase.result[0].COUNT_FINISH],
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
                                            },
                                        ]
                                    }}
                                    
                                    height={300}
                                    width={300}
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
                        </div>
                        </div>
    
                    </div>
    
    
                    <div className="line" style={{padding:"50px"}}>
                        <Line
                            data={{
                                labels: ['REGISTER_USER', 'CONFIRMATION', 'IMPLEMENTATION', 'TEST', 'APPROVAL', 'FINISH'], 
                                datasets:[
                                    {
                                        label: 'Employees',
                                        data: [listCountEmployeesPhase.result[0].COUNT_REGISTER_USER,listCountEmployeesPhase.result[0].COUNT_CONFIRMATION,listCountEmployeesPhase.result[0].COUNT_IMPLEMENTATION,listCountEmployeesPhase.result[0].COUNT_TEST,listCountEmployeesPhase.result[0].COUNT_APPROVAL,listCountEmployeesPhase.result[0].COUNT_FINISH],
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
                                    },
                                    // {
                                    //     label: 'Category',
                                    //     data: [listCountCategory.result[0].COUNT_TOTAL_TASK,listCountCategory.result[0].COUNT_TOTAL_TASK],
                                    //     backgroundColor: 'orange',
                                    //     boderColor:'red'
    
                                    // }
                                ]
                            }}
                            
                            height={260}
                            width={300}
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
                    </div>
    
                
                </div>
            );
        }
        else{
            return null;
        }

            
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

export default connect(mapStateToProp, mapDispatchToProp) (Statistical);
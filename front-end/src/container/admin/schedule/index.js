import React, { Component } from 'react';
import {ScheduleComponent, Day, Week,WorkWeek,Month,Agenda,Inject,ViewsDirective, ViewDirective} from '@syncfusion/ej2-react-schedule'
import {actPostSchedulesAPI} from './module-insert-schedule/action'
import {actFetchListScheduleAPI} from './module-list-schedule/action'
import {actUpdateSchedulesAPI} from './module-update-schedule/action'
import {actDeleteDeleteAPI} from './module-delete-schedule/action'
import { connect } from 'react-redux';

import {ToastContainer, Zoom} from "react-toastify"

class Schedule extends Component {
    constructor() {
        super(...arguments);
        this.data = [];
        this.state={
            employee_id:""
        }
    }

    componentWillMount(){
        let user = {}
        if(localStorage.getItem("user")){
            user = JSON.parse(localStorage.getItem("user"))[0]
            console.log("user",user)
            this.setState({
                employee_id : user.EMPLOYEE_ID
            })
        }
    }

    componentDidMount() {
        if(localStorage.getItem("user")){
            this.props.FetchListSchedule(this.state.employee_id)
        }
        
    }

    onActionBegin(args) {
        let weekEnds = [0, 6];
        console.log("args.requestType", args.requestType)
        if (args.requestType === 'eventCreate') {
            console.log('click add')
            console.log('args.data', args.data)
            console.log('&& weekEnds.indexOf((args.data[0].StartTime).getDay()) >= 0', weekEnds.indexOf((args.data[0].StartTime).getDay()))
            args.data[0].EMPLOYEE_ID = this.state.employee_id
            this.props.PostSignUp(args.data[0])
            console.log("args.data[0]", args.data[0])
        }

        else if (args.requestType === 'eventChange' ) {
            
            // args.data[0].EMPLOYEE_ID = this.state.employee_id
            if(args.data.occurrence){
                this.props.UpdateSchedule(args.data.occurrence)
                console.log("args.data.occurrence: ", args.data.occurrence)
            }
            
            else{
                this.props.UpdateSchedule(args.data)
                console.log('args.data edit', args.data)
            }
            
        }

        else if (args.requestType === 'eventRemove' ) {
            console.log("args.data remove: ",args.data)
            this.props.DeleteSchedule(args.data[0].IdSchedule)    
        }
        
        
    }




    render() {
        let {listSchedule} = this.props
        console.log("listSchedule", listSchedule)
        return (
            <div>
                
                <ScheduleComponent  currentView="Month" height='88vh'  eventSettings={{ dataSource: listSchedule.result,
                    fields: {
                        id: 'Id',
                        subject: { name: 'Subject' },
                        isAllDay: { name: 'IsAllDay' },
                        startTime: { name: 'StartTime' },
                        endTime: { name: 'EndTime' }
                    } 
                }} actionBegin={this.onActionBegin.bind(this)}>


                <ViewsDirective>
                    <ViewDirective option='WorkWeek' startHour='12:00' endHour='12:00' showWeekend={true}/>
                    <ViewDirective option='Week' startHour='12:00' endHour='12:00' showWeekend={true}/>
                    <ViewDirective option='Month' showWeekend={true}/>
                    <ViewDirective option='Agenda' showWeekend={true}/>
                </ViewsDirective>


                <Inject services={[Day, Week, WorkWeek, Month, Agenda]}/>
            </ScheduleComponent>
            <ToastContainer draggable={false} transition={Zoom} autoClose={6000} />
            </div>
        );
    }
}

export const mapStateToProp = state => {
    return {
        listSchedule: state.listScheduleReducer.listSchedule
    }
}

export const mapDispatchToProp = dispatch => {
    return {
        PostSignUp: schedule =>{
            dispatch(actPostSchedulesAPI(schedule));
        },
        FetchListSchedule: (employee_id) =>{
            dispatch(actFetchListScheduleAPI(employee_id))
        },
        UpdateSchedule : scheduleUpdate =>{
            dispatch(actUpdateSchedulesAPI(scheduleUpdate))
        },
        DeleteSchedule : IdSchedule =>{
            dispatch(actDeleteDeleteAPI(IdSchedule))
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp)(Schedule);
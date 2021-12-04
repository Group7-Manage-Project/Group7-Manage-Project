import React, { Component } from 'react';
import { Bar , Line , Pie, Radar, PolarArea} from 'react-chartjs-2'

import {actFetchCountEmployeesPhaseAPI} from './module-count-employees-phase/action'
import {actFetchCountCategoryAPI} from './module-count-category/action'
import { connect } from 'react-redux';


class Dashboard extends Component {

    componentDidMount(){
        this.props.FetchCountEmployessPhase()
        this.props.FetchCountCategory()
    }

    render() {
        return(
            <h1>Dashboard</h1>
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
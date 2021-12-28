import React, { Component } from 'react';
import ReactExport from 'react-data-export'
// import ExportListTaskToExcel  from "react-html-table-to-excel"

class BottmBarTask extends Component {
    constructor(props){
        super(props)
        this.state = {
            page: 1,
        }
    }
    componentWillMount(){
        if(!localStorage.getItem("page")){
            localStorage.setItem("page",JSON.stringify(this.state.page))
        }
        
    }

    firstPageClick = () =>{
        const {listTask} = this.props
        if(listTask.result && listTask.result.total_page  && this.state.page < listTask.result.total_page)
        this.setState({
            page : 1
        })
        setTimeout(()=>{
            localStorage.setItem("page",JSON.stringify(this.state.page))
            console.log("this.state.page + 1", this.state.page)
        },100)
    }

    finalPageClick = () =>{
        const {listTask} = this.props
        if(listTask.result && listTask.result.total_page  && this.state.page < listTask.result.total_page)
        this.setState({
            page : listTask.result.total_page
        })
        setTimeout(()=>{
            localStorage.setItem("page",JSON.stringify(this.state.page))
            console.log("this.state.page + 1", this.state.page)
        },100) 
    }

    nextPageOnClick = () =>{
        const {listTask} = this.props
        if(listTask.result && listTask.result.total_page  && this.state.page < listTask.result.total_page)
        this.setState({
            page : this.state.page + 1
        })
        setTimeout(()=>{
            localStorage.setItem("page",JSON.stringify(this.state.page))
            console.log("this.state.page + 1", this.state.page)
        },100) 
    }

    prevPageOnClick = () =>{
        if(this.state.page > 1){
            this.setState({
                page : this.state.page - 1
            })
        }
        setTimeout(()=>{
            localStorage.setItem("page",JSON.stringify(this.state.page))
            console.log("this.state.page + 1", this.state.page)
        },100) 
    }

    render() {
        const {listEmployees} = this.props
        const ExcelFile = ReactExport.ExcelFile
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
        let DataSet = []
        console.log("listTask in BottmBarTask", listEmployees.result)
        if(listEmployees.result && listEmployees.result.length > 0){
                DataSet = [
                {
                    columns:[
                        {title:"EMPLOYEE_ID", style: {font:{sz:"13", bold:true, }}, width:{wpx:100}}, // wch : width character , wpx: width character
                        {title:"FULL NAME", style: {font:{sz:"13", bold:true, }}, width:{wpx:180}},
                        {title:"EMAIL", style: {font:{sz:"13", bold:true, }}, width:{wpx:250}},
                        {title:"BIRTH_DAY", style: {font:{sz:"13", bold:true, }}, width:{wpx:200}},
                        {title:"USER NAME", style: {font:{sz:"13", bold:true, }}, width:{wpx:150}},
                        {title:"PASSWORD", style: {font:{sz:"13", bold:true, }}, width:{wpx:300}},
                        {title:"POSITION", style: {font:{sz:"13", bold:true, }}, width:{wpx:100}},
                        {title:"ROLL", style: {font:{sz:"13", bold:true, }}, width:{wpx:250}},
                        {title:"IMAGE", style: {font:{sz:"13", bold:true, }}, width:{wpx:500}},
                    ],
                    data: listEmployees.result.map((item)=>[
                        {value: item.EMPLOYEE_ID, style: {font: {sz:"13"} }},
                        {value: item.FULL_NAME, style: {font: {sz:"13"} }},
                        {value: item.EMAIL, style: {font: {sz:"13"} }},
                        {value: item.BIRTH_DAY, style: {font: {sz:"13"} }},
                        {value: item.USER_NAME, style: {font: {sz:"13"} }},
                        {value: item.PASSWORD, style: {font: {sz:"13"} }},
                        {value: item.POSITION, style: {font: {sz:"13"} }},
                        {value: item.ROLL, style: {font: {sz:"13"} }},
                        {value: item.IMAGE, style: {font: {sz:"13"} }},

                    ])
                }
            ]
            console.log("da vao if")
        }
        

        return (
            <div className="bottom-bar-task">
                <div className="d-flex d-flex justify-content-between bd-highlight">
                    <div className="bd-highlight">
                        <div className="category-action d-flex">
                            <button className="btn-task-page">Create</button>
                            <button className="btn-task-page">Modify</button>
                            <button className="btn-task-page">Delete</button>                           
                        </div>
                    </div>
                    <div className="bd-highlight">
                        <div className="category-action d-flex">
                                <button className="btn-task-page" onClick={this.firstPageClick}><i className="fa fa-angle-double-left"></i></button>
                                <button className="btn-task-page" onClick={this.prevPageOnClick}> <i className="fa fa-angle-left"></i> </button>
                                <span>&ensp;  {this.state.page} / </span> {listEmployees.result && listEmployees.result.total_page ? (<span> {listEmployees.result.total_page} </span>): null } &ensp;
                                <button className="btn-task-page" onClick={this.nextPageOnClick}> <i className="fa fa-angle-right"></i> </button>
                                <button className="btn-task-page" onClick={this.finalPageClick}><i className="fa fa-angle-double-right"></i></button>                          
                        </div>
                    </div>
                    <div className="bd-highlight">
                        <div className="bd-highlight">
                            <div className="category-action d-flex">
                                    <button className="btn-task-page" onClick={this.props.newFormOnClick}>New Employee</button>
                                    <button className="btn-task-page" onClick={this.props.editFormOnClick}>Edit Employee </button>
                                    {/* <button className="btn-task-page">Export</button>                           */}
                                    {/* <ExportListTaskToExcel className="btn-task-page" table="table-list-task" filename="list-task-file-excel" sheet="Sheet" buttonText="Export"/> */}
                                    {listEmployees.result && listEmployees.result.length > 0 ? (
                                        <ExcelFile 
                                            filename="list-task-file-excel"
                                            element={<button className="btn-task-page">Export</button>}>
                                            <ExcelSheet dataSet={DataSet} name="List Employees"  />
                                        </ExcelFile>
                                    ): null}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BottmBarTask;
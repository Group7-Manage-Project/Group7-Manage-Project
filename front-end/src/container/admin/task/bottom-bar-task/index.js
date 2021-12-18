import React, { Component } from 'react';
import ReactExport from 'react-data-export'
// import ExportListTaskToExcel  from "react-html-table-to-excel"

class BottmBarTask extends Component {
    render() {
        const {listTask} = this.props
        const ExcelFile = ReactExport.ExcelFile
        const ExcelSheet = ReactExport.ExcelFile.ExcelSheet
        let DataSet = []
        console.log("listTask in BottmBarTask", listTask.result)
        if(listTask.result && listTask.result.length > 0){
                DataSet = [
                {
                    columns:[
                        {title:"ID Task", style: {font:{sz:"13", bold:true, }}, width:{wpx:100}}, // wch : width character , wpx: width character
                        {title:"Status", style: {font:{sz:"13", bold:true, }}, width:{wpx:180}},
                        {title:"Category", style: {font:{sz:"13", bold:true, }}, width:{wpx:150}},
                        {title:"Title", style: {font:{sz:"13", bold:true, }}, width:{wpx:300}},
                        {title:"Progress", style: {font:{sz:"13", bold:true, }}, width:{wpx:100}},
                        {title:"Register User", style: {font:{sz:"13", bold:true, }}, width:{wpx:250}},
                        {title:"Assignee", style: {font:{sz:"13", bold:true, }}, width:{wpx:250}},
                        {title:"Registered Date", style: {font:{sz:"13", bold:true, }}, width:{wpx:200}},
                        {title:"Due Date", style: {font:{sz:"13", bold:true, }}, width:{wpx:200}},
                        {title:"Effort", style: {font:{sz:"13", bold:true, }}, width:{wpx:100}}
                    ],
                    data: listTask.result.map((item)=>[
                        {value: item.TASK_ID, style: {font: {sz:"13"} }},
                        {value: item.JOB, style: {font: {sz:"13"} }},
                        {value: item.CATEGORY, style: {font: {sz:"13"} }},
                        {value: item.TITLE, style: {font: {sz:"13"} }},
                        {value: item.PROGRESS, style: {font: {sz:"13"} }},
                        {value: item.REGISTER_USER_NAME, style: {font: {sz:"13"} }},
                        {value: item.ASSIGNEE_NAME, style: {font: {sz:"13"} }},
                        {value: item.START_DATE, style: {font: {sz:"13"} }},
                        {value: item.END_DATE, style: {font: {sz:"13"} }},
                        {value: item.EFFORT, style: {font: {sz:"13"} }},
                        // {value: item.JOB, style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"3461eb"}} }},
                        // {value: item.CATEGORY, sstyle: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"eb1027"}} }},
                        // {value: item.TITLE, style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"49bd909"}} }},
                        // {value: item.PROGRESS, style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"ebc907"}} }},
                        // {value: item.REGISTER_USER_NAME, style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"35bdb4"}} }},
                        // {value: item.ASSIGNEE_NAME, style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"ed14f5"}} }},
                        // {value: item.START_DATE, style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"3461eb"}} }},
                        // {value: item.END_DATE,style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"ed14f5"}} }},
                        // {value: item.EFFORT, style: {font: {color: {rgb:"ffffff"}}, fill:{patternType: "solid" , fgColor: {rgb:"000000"}} }},
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
                                <button className="btn-task-page"><i className="fa fa-angle-double-left"></i></button>
                                <button className="btn-task-page"><i className="fa fa-angle-left"></i></button>
                                <p>&ensp;  1/8  &ensp;</p>
                                <button className="btn-task-page"><i className="fa fa-angle-right"></i></button>
                                <button className="btn-task-page"><i className="fa fa-angle-double-right"></i></button>                          
                        </div>
                    </div>
                    <div className="bd-highlight">
                        <div className="bd-highlight">
                            <div className="category-action d-flex">
                                    <button className="btn-task-page" data-bs-toggle="modal" data-bs-target="#staticBackdrop">New Task</button>
                                    {/* <button className="btn-task-page">Export</button>                           */}
                                    {/* <ExportListTaskToExcel className="btn-task-page" table="table-list-task" filename="list-task-file-excel" sheet="Sheet" buttonText="Export"/> */}
                                    {/* {listTask.result.length > 0 ? (
                                        <ExcelFile 
                                            filename="list-task-file-excel"
                                            element={<button className="btn-task-page">Export</button>}>
                                            <ExcelSheet dataSet={DataSet} name="List Task"  />
                                        </ExcelFile>
                                    ): null} */}
                                        <ExcelFile 
                                            filename="list-task-file-excel"
                                            element={<button className="btn-task-page">Export</button>}>
                                            <ExcelSheet dataSet={DataSet} name="List Task"  />
                                        </ExcelFile>

                            </div>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default BottmBarTask;
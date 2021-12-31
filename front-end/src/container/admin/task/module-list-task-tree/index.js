import React, { Component } from 'react';

import {actFetchListTaskTreeAPI} from './module/actions'
import {connect} from 'react-redux'

import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';



class LisTaskTree extends Component {

    componentDidMount() {
        this.props.FetchListTaskTree()
        
    }

    // Nếu mà duyệt chung 1 mãng thì NodeId chỉ nhận "", ta nên chia ra 2 lần duyệt để tránh lỗi Focus từ NodeId
    renderHTML = () =>{
        const {listTaskTree} = this.props
        console.log("listTaskTree renderHTML",listTaskTree)
        if(listTaskTree.result && listTaskTree.result.length > 0){

                return(
                    <div>
                            <TreeView
                                aria-label="multi-select"
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                                multiSelect
                                sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                            >
                                {/* <TreeItem nodeId={`${item.DEPARTMENT_NAME}`} label={item.DEPARTMENT_NAME}>
                                    {this.renderChildrenNode(item.CATEGORY_TASK)}
                                </TreeItem> */}
                                {this.renderParentNode(listTaskTree.result)}
                            </TreeView>
                    </div>

                )
            
        }
    }

    renderParentNode = listParentNode =>{
        if(listParentNode && listParentNode.length > 0){
            return listParentNode.map((item, index) =>{
                return(
                        <TreeItem key = {item.DEPARTMENT_ID} nodeId={item.DEPARTMENT_NAME} label={item.DEPARTMENT_NAME}>
                            {this.renderChildrenNode(item.CATEGORY_TASK)}
                        </TreeItem>
                )
            })
        }
    }

    renderChildrenNode = (listChildrenNode) =>{
            
            console.log("listChildrenNode",listChildrenNode)
            if(listChildrenNode && listChildrenNode.length > 0){
                return listChildrenNode.map((item, index) =>{
                    return(
                            <TreeItem onClick={ () =>{
                                this.props.search_task.search_category = item.CATEGORY_NAME
                                console.log("this.props.search_task", this.props.search_task)
                                
                            }} 
                                key = {item.CATEGORY_TASK_ID} 
                                nodeId={item.CATEGORY_NAME} 
                                label={item.CATEGORY_NAME}
                            />
                    )
                })
            }

    }

    render() {
        return (
            <div>
                {this.renderHTML()}
            </div>
        );
    }
}

export const mapStateToProp = state => {
    return {
        listTaskTree: state.listTaskTreeReducer.listTaskTree
    }
}

export const mapDispatchToProp = dispatch => {
    return {
        FetchListTaskTree: () =>{
            dispatch(actFetchListTaskTreeAPI())
        },
    }
}

export default connect(mapStateToProp,mapDispatchToProp) (LisTaskTree);
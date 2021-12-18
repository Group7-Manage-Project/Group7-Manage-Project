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

    renderHTML = () =>{
        const {listTaskTree} = this.props
        console.log("listTaskTree renderHTML",listTaskTree)
        if(listTaskTree && listTaskTree.length > 0){
            return listTaskTree[0].lstCumRap.map((item,index) =>{
                return(
                    <div key={index}>
                            <TreeView
                                aria-label="multi-select"
                                defaultCollapseIcon={<ExpandMoreIcon />}
                                defaultExpandIcon={<ChevronRightIcon />}
                                multiSelect
                                sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                            >
                            <TreeItem nodeId="1" label={item.tenCumRap}>
                                {this.renderChildrenNode(item.danhSachPhim)}
                            </TreeItem>
                        </TreeView>
                    </div>

                )
            })
        }
    }

    renderChildrenNode = (listChildrenNode) =>{
            
            console.log("listChildrenNode",listChildrenNode)
            if(listChildrenNode && listChildrenNode.length > 0){
                return listChildrenNode.map((item, index) =>{
                    return(
                            <TreeItem key = {index} nodeId='10' label={item.tenPhim}/>

                    )
                })
            }

    }

    render() {
        return (
            <div>
                {/* <TreeView
                    aria-label="multi-select"
                    defaultCollapseIcon={<ExpandMoreIcon />}
                    defaultExpandIcon={<ChevronRightIcon />}
                    multiSelect
                    sx={{ flexGrow: 1, maxWidth: 400, overflowY: 'auto' }}
                    >
                    <TreeItem nodeId="1" label="Applications">
                        <TreeItem nodeId="2" label="Calendar" />
                        <TreeItem nodeId="3" label="Chrome" />
                        <TreeItem nodeId="4" label="Webstorm" />
                    </TreeItem>
                    <TreeItem nodeId="5" label="Documents">
                        <TreeItem nodeId="6" label="MUI">
                        <TreeItem nodeId="7" label="src">
                            <TreeItem nodeId="8" label="index.js" />
                            <TreeItem nodeId="9" label="tree-view.js" />
                        </TreeItem>
                        </TreeItem>
                    </TreeItem>
                </TreeView> */}
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
        }
    }
}

export default connect(mapStateToProp,mapDispatchToProp) (LisTaskTree);
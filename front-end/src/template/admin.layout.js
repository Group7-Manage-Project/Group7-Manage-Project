import React from 'react'
import { Route   , Redirect} from "react-router-dom";
import Sidebar from "../component/sidebar-admin"
import Navbar from "../component/navbar-admin"
import "./index.css"



function AdminLayout(props){
    const path = props.children.props.location.pathname
    console.log("path", path)
    console.log("props.children.props",props.children)
    return(
        <div className="row admin-layout-container" style={{margin: "0px"}}>
            <div className="col-md-2 admin-layout-left" >
                <Sidebar />
            </div>
            <div className="col-md-10 admin-layout-right container" style={{overflow: "hidden"}}>
                <Navbar path= {path}/>
                <div className="admin-layout-right-container">
                    {props.children}
                </div>
            </div>
        </div>
    )
}

export default function AdminTemplate({Component,...props}){
    return(
        <Route {...props}
            render = {(propsComponent)=>{
                console.log("propsComponent from admin.layout",propsComponent);
                if(localStorage.getItem("accessToken")){
                    return(
                        <AdminLayout>
                            <Component {...propsComponent} />
                        </AdminLayout>           
                    )
                }

                return <Redirect to="/" />
            }}
        />
    //     <Route {...props}
    //     render={(propsComponent) => {
    //         if(localStorage.getItem("accessToken")){
    //             return(
    //                 <AdminLayout >
    //                     <Component {...propsComponent} />
    //                 </AdminLayout>
    //             )
    //         }
    //         return <Redirect to="/" />
    //     }}
           
    // />
    )
}


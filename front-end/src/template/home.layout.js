import React from 'react'
import { Route  } from "react-router-dom";
import "./index.css"



function HomeLayout(props){
    const path = props.children.props.location.pathname
    console.log("path", path)
    console.log("props.children.props",props.children)
    return(
        <div>
            {props.children}          
        </div>
    )
}

export default function HomeTemplate({Component,...props}){
    return(
        <Route {...props}
            render = {(propsComponent)=>{
                console.log("propsComponent from home.layout",propsComponent);
                return(
                    <HomeLayout>
                        <Component {...propsComponent} />
                    </HomeLayout>           
                )
                
            }}
        />
    )
}
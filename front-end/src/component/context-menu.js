import React, { Component } from 'react';

class ContextMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            xPos: "0px",
            yPos: "0px",
            showMenu: false,
        }
    }

    componentDidMount() {
        document.addEventListener("click", this.handleClick)
        document.addEventListener("contextmenu", this.handleContexntMenu)
    }

    componentWillMount(){
        document.addEventListener("click", this.handleClick)
        document.addEventListener("contextmenu", this.handleContexntMenu)
    }

    handleClick = e =>{
        if(this.state.showMenu){
            this.setState({
                showMenu: false
            })
        }
    }

    handleContexntMenu = e =>{
        e.preventDefault()
        if(this.state.showMenu === false){
            this.setState({
                xPos: `${e.pageX}px`,
                yPos:`${e.pageY}px`,
                showMenu: true,
                count: this.state.count + 1
            })
        }
        else if(this.state.showMenu === true){
            this.setState({
                showMenu: false
            })
        }

    }

    render() {
        const {showMenu, xPos, yPos} = this.state
        if(showMenu)
        return (
            <div>
                <ul className="menu" style={{top:yPos, left:xPos, }}>
                    <li>Login</li>
                    <li>Register</li>
                    <li>Open Profile</li>
                </ul>
            </div>
        );
        else return null;
    }
}

export default ContextMenu;
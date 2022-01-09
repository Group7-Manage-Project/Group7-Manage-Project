import React, { Component } from 'react';
import personImg from './images/logo.jpg'
import './css/index.css'


class DeTailPerson extends Component {
    render() {
        return (
            <div className="" style={{position:"relative"}}>
                <div className="profile-content">
                    <img className="mx-auto" src={personImg} width="250" height="250" alt="person-card" />
                    <h3>Nguyễn Trần Hoàng</h3>
                    <button className="btn btn-outline-primary">Log out</button>
                </div>
            </div>
        );
    }
}

export default DeTailPerson;
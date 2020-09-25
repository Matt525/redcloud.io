import React, { Component } from 'react'
import './navStyles.css';

export default class Navigation extends Component {
    render() {
        return (
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand">
                        <img src={require("./ImageSource/cloud_circle_48px.svg")} width="30" height="30" className="logo" alt="" />
                        <strong style={{color: 'red'}}>Red </strong>| Coud
                    </a>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup" className="header">
                        <ul class="navbar-nav justify-content-center">
                                <li class="nav-item mx-3">
                                    <a class="nav-link " href="#">Home</a>
                                </li>
                                <li class="nav-item mx-2">
                                    <a class="nav-link" href="#">Progress</a>
                                </li>
                                <li class="nav-item mx-2">
                                    <a class="nav-link" href="#">Road Map</a>
                                </li>
                                <li class="nav-item mx-2">
                                    <a class="nav-link" href="#" >Connect</a>
                                </li>
                            </ul>
                        </div>
                </nav>
            </header>
        )
  }
}

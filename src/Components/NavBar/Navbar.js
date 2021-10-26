import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
function Navbar(props) {
    const darkmodehandle = ()=>{
        props.toggleMode()
    }
    return (
        <>
          <nav className={`navbar navbar-expand-lg navbar-${props.appMode} bg-${props.appMode} border-bottom`}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">TextUtiles</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link active" to="/">Text Transforms</Link>
                        </li>
                        <li className="nav-item">
                        <Link className="nav-link" to="/about">About Us</Link>
                        </li>
                    </ul>
                    <div className={`form-check form-switch text-${props.appMode === "light"? "dark": "light"}`}>
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={darkmodehandle}/>
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
                    </div>
                    </div>
                </div>
            </nav>  
        </>

    )
}

export default Navbar

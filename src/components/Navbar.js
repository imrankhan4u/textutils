import React from 'react';
import { Link } from "react-router-dom";

import moon from '../images/moon.svg';
import sun from '../images/sun.svg';
export default function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.lightmode ? props.lightPallette.graygreen : props.darkPallette.blue, fontWeight: 'bold' }}>
            <div className="container-fluid" >
                <Link className="navbar-brand" to="/" style={{ color: props.lightmode ? props.lightPallette.darkgreen : props.darkPallette.darklue, fontWeight: 'bold' }} >{"Imran :)"}</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/" style={{ color: 'white', fontWeight: '500' }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/About" style={{ color: 'white', fontWeight: '500' }}>About</Link>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <img src={props.lightmode ? (sun) : (moon)} alt="switch mode" onClick={props.modeHandler} />
                    </div>
                </div>
            </div>
        </nav>
    )
}

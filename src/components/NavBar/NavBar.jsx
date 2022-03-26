import { render } from '@testing-library/react';
import React, {Component} from 'react';
import './NavBar.css';

// class NavBar extends Component{
//     render() {
//         return (<div>
//             <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="/#">My App</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <li className="nav-item">
//                             <a className="nav-link" href="/#">Home</a>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </div>
//         );
//     }
// }
const NavBar = () => {
    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <h1>V! NGUYEN</h1>
            </div>
            <ul className="app__navbar-links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#project">Project</a></li>
                <li className="p__opensans"><a href="#resume">Resume</a></li>
                <li className="p__opensans"><a href="#contact">Contact</a></li>
            </ul>
            <div className="app_navbar-login">
                <a href="login" className="p__opensans">Login</a>
                <a href="register" className="p__opensans">Register</a>
            </div>
        </nav>
    );
};
export default NavBar;
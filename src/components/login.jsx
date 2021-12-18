import React from "react";
import Navbar from "./navbar";
import {NavLink} from "react-router-dom";
import login from "../images/login.png";

function Login() {
    return (
        <div className="App">
            <Navbar h="Login" />
            <div className="chooseDiv">
                <div className="jumbotron">
                    <div className="display-4">
                        <div className="login">
                        <img style={{width: "130px", marginLeft: "auto", marginRight: "auto"}} src={login} alt="" />
                        </div>
                    </div>
                    <div>
                        <input type="text" className="input" placeholder="Enter ID" />
                        <input type="password" className="input" placeholder="Enter password" />
                        <NavLink to="/caste"><button type="button" className="agree btn btn-dark px-4 mt-3">Login</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;

//https://lh3.googleusercontent.com/proxy/EcHTv8NNPLCvXaLYFQkaI5D1A7CtWRtyLrQzWz6biqM9MI_j0FMURSVC2ZwCFXu6-YvLJWE1faJf0EiBusbXCRpYkjO1hTzUzqH3Vpbd8ZnRzBMgLw
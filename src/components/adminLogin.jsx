import React from "react";
import Navbar from "./navbar";
import {NavLink} from "react-router-dom";
import login from "../images/boss.png";

function AdminLogin(){
    return(
        <div className="App">
            <Navbar h="Login" />
            <div className="chooseDiv">
                <div className="jumbotron">
                    <div className="display-4">
                        <div className="login">
                        <img style={{width: "140px", marginLeft: "auto", marginRight: "auto"}} src={login} alt="" />
                        </div>
                    </div>
                    <div>
                        <input type="text" className="input" placeholder="Enter ID" />
                        <input type="password" className="input" placeholder="Enter password" />
                        <NavLink to="/adminOptions"><button type="button" className="agree btn btn-dark px-4 mt-3">Admin Login</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdminLogin;
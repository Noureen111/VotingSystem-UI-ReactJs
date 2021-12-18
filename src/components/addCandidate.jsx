import React, { useState } from "react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";
import "../App.css";
import addUser from "../images/addUser.png";
import { Alert } from "react-bootstrap";

function AddCandidate() {

    function handle(){
        alert("Added successfully");
    }

    return (
        <div className="App">

            <Navbar h="Add Candidate" />
            <div className="chooseDiv">
                <div className="jumbotron">
                    <div className="display-4">
                        <div className="login">
                            <img style={{ width: "130px", marginLeft: "auto", marginRight: "auto" }} src={addUser} alt="" />
                        </div>
                    </div>
                    <div>
                        <input type="text" className="input" placeholder="Candidate name" />
                        <input type="password" className="input" placeholder="Cnic number" />
                        <select required id="position" className="dropbtn mt-2">
                            <option className="option" value="Selected">--Position--</option>
                            <option className="option" value="a">Provincial Gov</option>
                            <option className="option" value="b">Vice President</option>
                        </select>
                        <NavLink to="#"><button onClick={handle} type="button" className="agree btn btn-dark px-4 mt-3">Add</button></NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddCandidate;
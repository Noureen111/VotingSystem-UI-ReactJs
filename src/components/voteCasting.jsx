import React from "react";
import Navbar from "./navbar";
import { NavLink } from "react-router-dom";
import "../App.css";

function VoteCasting() {
    return (
        <div className="App">
            <Navbar h="Vote Casting" />
            <div className="chooseDiv">
                <div className="jumbotron">
                    <form action="">

                        <input required type="text" id="cnic" className="input" placeholder="Enter CNIC" />

                        <select required id="position" className="dropbtn">
                            <option className="option" value="Selected">--Position--</option>
                            <option className="option" value="a">Provincial Gov</option>
                            <option className="option" value="b">Vice President</option>
                        </select>

                        <NavLink to="/succeeded">
                            <button type="button" className="agree btn btn-dark px-4 my-3">Vote</button></NavLink>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default VoteCasting;
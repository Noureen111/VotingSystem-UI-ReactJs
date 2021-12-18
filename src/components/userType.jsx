import React from "react";
import "../App.css";
import { NavLink} from "react-router-dom";

function Choose() {
    return (
        
        <div className="chooseDiv">
            <div className="space">
            <NavLink to="/home"> <button type="button" class="chose btn btn-secondary btn-lg my-3 col-12">Voter</button></NavLink>
            <br />
            <NavLink to="/adminLogin"> <button type="button" class="chose btn btn-secondary btn-lg col-12">Admin</button></NavLink>
            </div>
        </div>
        
    );
}

export default Choose;
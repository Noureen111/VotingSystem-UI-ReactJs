import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";


function AdminOptions(){
    return(
        <div className="chooseDiv">
            <div className="space">
            <NavLink to="/addCandidate"> <button type="button" class="chose btn btn-secondary btn-lg my-3 col-12">Add Candidate</button></NavLink>
            <br />
            <NavLink to="/result"> <button type="button" class="chose btn btn-secondary btn-lg col-12">View Results</button></NavLink>
            </div>
        </div>
    );
}

export default AdminOptions;
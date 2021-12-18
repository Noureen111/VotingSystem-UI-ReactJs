import React from "react";
import "../App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';

function Introduction() {
    return (
        <div className="jumbotron">
            <h1 className="display-4">User Agreement</h1>
            <ul className="ul">

                <p className="jumbotronPara">
                    As a responsible citizen you are going to vote to select your leader for a particular time period. To continue and vote you need to agree the following conditions.
                </p>
                <li>You are going to vote according to your choice.</li>
                <li>
                    You can vote only once for any of the positions.
                </li>
                <li>
                    Your vote is a huge contribution in the selection that who is going to govern you.
                </li>
                <li>
                    The selected governemnt will stay for 5 years of time period.
                </li>
                <li>
                    You won't be able to undo your vote once you voted.
                </li>
                <li>
                    You agree with the changes the government will make in upcoming years of their leadership.
                </li>
            </ul>
            
                <NavLink to="/login"><button type="button" className="agree btn btn-dark px-4">I Agree</button></NavLink>
            
        </div>
    );
}

export default Introduction;
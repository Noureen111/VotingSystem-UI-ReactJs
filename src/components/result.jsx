import React from "react";
import Navbar from "../components/navbar";

function Result() {
    return (
        <div className="App">
            <Navbar h="Results" />
            <div className="chooseDiv">
                <div>
                    <div className="row">
                        <div className="col-lg-6 col-md-6 col-sm-12 mt-4"  style={{border: "none", margin: "auto"}}>
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th colSpan="2" style={{textAlign:"center", border: "none"}}>
                                            PRESIDENT
                                        </th>
                                    </tr>
                                    <tr>
                                        <th scope="col">Candidates</th>
                                        <th scope="col">Votes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Noureen</td>
                                        <td>6</td>
                                    </tr>
                                    <tr>
                                        <td>Aleena</td>
                                        <td>5</td>
                                    </tr>
                                    <tr>
                                        <td>Seema</td>
                                        <td>3</td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Result;
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import {check-square} from ''


function VotedSuccessfully() {
    return (
        <div className="App">
            <div className="chooseDiv">
                <div className="jumbotron">
                    <div className="display-4">
                        <div className="warning"><img src="https://www.freeiconspng.com/thumbs/check-tick-icon/black-check-tick-icon-4.png" alt="" />
                        </div>
                            <h1 style={{textAlign:"center"}}>Voted Successfully!</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default VotedSuccessfully;
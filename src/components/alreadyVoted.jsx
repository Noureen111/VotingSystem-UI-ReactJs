import React from "react";

function AlreadyVoted(){
    return(
        <div className="App">
            <div className="chooseDiv">
                <div className="jumbotron">
                    <div className="display-4">
                        <div><img className="warning" src="https://www.freeiconspng.com/thumbs/warning-icon-png/status-warning-icon-png-29.png" alt="" />
                        </div>
                            <h1 style={{textAlign:"center"}}>Already Voted!</h1>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AlreadyVoted;
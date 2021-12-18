import React from "react";

function Navbar(props) {
    return (
        <nav className="navbar navBackground">
            <span className="navbar-brand mb-0 h1">{props.h}</span>
        </nav>
    );
}

export default Navbar;
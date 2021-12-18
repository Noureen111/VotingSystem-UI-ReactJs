import React from "react";
import { Routes, Route } from "react-router-dom";
import Choose from "../components/userType";
import Home from "../components/home";
import Login from "../components/login";

function AppRouter() {
    return (
        <Routes>
            <Route exact path="/" element={<Choose />} />
            <Route exact path="/home" element={<Home />} />
            <Route exact path="/login" element={<Login />} />
        </Routes>
    );
}

export default AppRouter;
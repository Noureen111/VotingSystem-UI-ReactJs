import React from "react";
import { Routes, Route } from "react-router-dom";
import Choose from "./components/userType";
import Home from "./components/home";
import VoteCasting from "./components/voteCasting";
import Result from "./components/result";
import VotedSuccessfully from "./components/votedSuccessfully";
import AlreadyVoted from "./components/alreadyVoted";
import Login from "./components/login";
import AdminOptions from "./components/adminOptions";
import AddCandidate from "./components/addCandidate";
import AdminLogin from "./components/adminLogin";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Choose />} />
            <Route path="/home" element={<Home />} />
            <Route path="/caste" element={<VoteCasting />} />
            <Route path="/result" element={<Result />} />
            <Route path="/succeeded" element={<VotedSuccessfully />} />
            <Route path="/alreadyVoted" element={<AlreadyVoted />} />
            <Route path="/login" element={<Login />} />
            <Route path="/adminOptions" element={<AdminOptions />} />
            <Route path="/addCandidate" element={<AddCandidate />} />
            <Route path="/adminLogin" element={<AdminLogin />} />
        </Routes>
    );
}

export default App;
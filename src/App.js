import React from "react";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Recommended from "./components/recommended/Recommended";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Header />
            <div className="app-page">
                <Sidebar />
                <Recommended />
            </div>
        </div>
    );
}

export default App;

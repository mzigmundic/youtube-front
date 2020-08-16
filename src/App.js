import React from "react";

import Header from "./components/header/Header";
import Sidebar from "./components/sidebar/Sidebar";
import Recommended from "./components/recommended/Recommended";
import SearchPage from "./components/searchPage/SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <div className="app">
            <Router>
                <Header />
                <Switch>
                    <Route path="/search/:searchTerm">
                        <div className="app-page">
                            <Sidebar />
                            <SearchPage />
                        </div>
                    </Route>
                    <Route path="/">
                        <div className="app-page">
                            <Sidebar />
                            <Recommended />
                        </div>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;

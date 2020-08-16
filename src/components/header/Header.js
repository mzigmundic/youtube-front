import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";

function Header() {
    const [inputSearch, setInputSearch] = useState("");
    return (
        <div className="header">
            <div className="header-left">
                <MenuIcon className="hamburger-button" />
                <Link to="/">
                    <img
                        className="header-logo-icon"
                        src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                        alt=""
                    />
                    <p className="header-logo-text">YouTube</p>
                </Link>
            </div>
            <span className="header-input">
                <input
                    onChange={(e) => setInputSearch(e.target.value)}
                    value={inputSearch}
                    placeholder="Search"
                    type="text"
                />
                <Link
                    to={`/search/${inputSearch}`}
                    className="header-input-btn"
                >
                    <SearchIcon className="header-input-btn-icon" />
                </Link>
            </span>
            <div className="header-icons">
                <VideoCallIcon className="header-icon" />
                <AppsIcon className="header-icon" />
                <NotificationsIcon className="header-icon" />
                <Avatar className="header-icon-avatar" />
            </div>
        </div>
    );
}

export default Header;

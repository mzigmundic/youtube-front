import React from "react";
import "./Row.css";

function Row({ selected, Icon, title }) {
    return (
        <div className={`sidebar-row ${selected && "selected"}`}>
            <Icon className="sidebar-row-icon" />
            <h2 className="sidebar-row-title">{title}</h2>
        </div>
    );
}

export default Row;

import React from "react";
import "./VideoRow.css";

function VideoRow({
    views,
    subs,
    description,
    timestamp,
    channel,
    title,
    image,
}) {
    return (
        <div className="video-row">
            <img src={image} alt="" />
            <div className="video-row-text">
                <h3>{title}</h3>
                <p className="video-row-headline">
                    {channel} &#183;{" "}
                    <span className="video-row-subs">{subs}</span> Subscribers{" "}
                    {views} views &#183;
                    {timestamp}
                </p>
                <p className="video-row-description">{description}</p>
            </div>
        </div>
    );
}

export default VideoRow;

import React from "react";
import "./VideoCard.css";
import Avatar from "@material-ui/core/Avatar";

function VideoCard({ image, title, channel, views, timestamp, channelImage }) {
    return (
        <div className="video-card">
            <img className="video-card-thumbnail" src={image} alt="" />
            <div className="video-card-info">
                <Avatar
                    className="video-card-info-avatar"
                    alt={channel}
                    src={channelImage}
                />
                <div className="video-card-info-text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} &#183; {timestamp}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default VideoCard;

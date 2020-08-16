import React from "react";
import { Avatar } from "@material-ui/core";
import "./ChannelRow.css";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

function ChannelRow({
    image,
    channel,
    subs,
    numOfVideos,
    description,
    verified,
}) {
    return (
        <div className="channel-row">
            <Avatar className="channel-row-logo" alt={channel} src={image} />
            <div className="channel-row-text">
                <h4>
                    {channel} {verified && <CheckCircleIcon />}
                </h4>
                <p>
                    {subs} subcribers &#183; {numOfVideos} videos
                </p>
                <p>{description}</p>
            </div>
        </div>
    );
}

export default ChannelRow;

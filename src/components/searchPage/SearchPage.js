import React from "react";
import ChannelRow from "./channelRow/ChannelRow";
import VideoRow from "./videoRow/VideoRow";
import "./SearchPage.css";
import TuneOutlinedIcon from "@material-ui/icons/TuneOutlined";

function SearchPage() {
    return (
        <div className="search-page">
            <div className="search-page-filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://media.istockphoto.com/photos/industrial-worker-welding-steel-picture-id1012745854"
                channel="Some Channel"
                verified
                subs="100K"
                numOfVideos={120}
                description="Some cool description"
            />

            <hr />

            <VideoRow
                views="1.9M"
                subs="600K"
                description="Cool description lorem ipsum vita est, civitate vordum terra magistre bla bla bla "
                timestamp="16 minutes ago"
                channel="Some Channel"
                title="Some Cool Titel"
                image="https://media.istockphoto.com/photos/industrial-worker-welding-steel-picture-id1012745854"
            />

            <VideoRow
                views="1.9M"
                subs="600K"
                description="Cool description lorem ipsum vita est, civitate vordum terra magistre bla bla bla "
                timestamp="16 minutes ago"
                channel="Some Channel"
                title="Some Cool Titel"
                image="https://media.istockphoto.com/photos/industrial-worker-welding-steel-picture-id1012745854"
            />

            <VideoRow
                views="1.9M"
                subs="600K"
                description="Cool description lorem ipsum vita est, civitate vordum terra magistre bla bla bla "
                timestamp="16 minutes ago"
                channel="Some Channel"
                title="Some Cool Titel"
                image="https://media.istockphoto.com/photos/industrial-worker-welding-steel-picture-id1012745854"
            />

            <VideoRow
                views="1.9M"
                subs="600K"
                description="Cool description lorem ipsum vita est, civitate vordum terra magistre bla bla bla "
                timestamp="16 minutes ago"
                channel="Some Channel"
                title="Some Cool Titel"
                image="https://media.istockphoto.com/photos/industrial-worker-welding-steel-picture-id1012745854"
            />

            <VideoRow
                views="1.9M"
                subs="600K"
                description="Cool description lorem ipsum vita est, civitate vordum terra magistre bla bla bla "
                timestamp="16 minutes ago"
                channel="Some Channel"
                title="Some Cool Titel"
                image="https://media.istockphoto.com/photos/industrial-worker-welding-steel-picture-id1012745854"
            />

            <VideoRow
                views="1.9M"
                subs="600K"
                description="Cool description lorem ipsum vita est, civitate vordum terra magistre bla bla bla "
                timestamp="16 minutes ago"
                channel="Some Channel"
                title="Some Cool Titel"
                image="https://media.istockphoto.com/photos/industrial-worker-welding-steel-picture-id1012745854"
            />
        </div>
    );
}

export default SearchPage;

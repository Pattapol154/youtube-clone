import React from 'react';
import "./SearchPage.css";
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow";

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://images.unsplash.com/photo-1485394735640-56c0356b62cf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                channel="Pattapol Program"
                verified
                subs="660k"
                noOfVideos={382}
                description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus porro illum distinctio quisquam eum iste explicabo aut, temporibus doloribus odit."
            />
            <hr />

            <VideoRow
                views="1.4M"
                subs="659K"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, voluptatibus vero? Nihil nisi possimus fugit placeat hic nesciunt corrupti? Minus."
                timestamp="s9 second ago"
                channel="Pattapol Program"
                title="Let's Build a Youtube Clone with React"
                image="https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
            />

        </div>
    )
}

export default SearchPage

import React from 'react';
import "./recommendedVideo.css";
import VideoCard from "./VideoCard";

function RecommendedVideos() {
    return (
        <div className="recommendedVideo">
            <h4>Recommended</h4>
            <div className="recommendedVideos_views">
                <VideoCard
                    title="Become a web"
                    views="2.3M Views"
                    timestamp="3 day ago"
                    channelImage="https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    channel="Sonny day"
                    image="https://i.pinimg.com/564x/df/b9/87/dfb98718e75d8ff3df53203f138de5eb.jpg"
                />
                <VideoCard
                    title="The Ultimate Beginner's Guide to Starting a Blog"
                    views="1.1M Views"
                    timestamp="10 day ago"
                    channelImage="https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    channel="Lauren Bless'er House"
                    image="https://i.pinimg.com/564x/ea/5a/62/ea5a625997f22c3c75857cbfe7cb18f8.jpg"
                />
                <VideoCard
                    title="MakeUseOf - Technology, Simplified"
                    views="224.7K Views"
                    timestamp="1 year"
                    channelImage="https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    channel="MakeUseOf - Technology, Simplified"
                    image="https://i.pinimg.com/564x/39/ee/9b/39ee9bc562fbc9f8518fd703454c99b3.jpg"
                />
                <VideoCard
                    title="How To Start A Money-Making Blog This Year"
                    views="4.74K Views"
                    timestamp="1 secord"
                    channelImage="https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    channel="Meghan | WordPress & Blog Tips"
                    image="https://i.pinimg.com/564x/04/cd/2d/04cd2d263a57e1bd587ae8aadf7b7a5e.jpg"
                />
                <VideoCard
                    title="14 Newspaper Headlines From the Past That Document History’s Most Important Moments"
                    views="32K Views"
                    timestamp="1 minute"
                    channelImage="https://images.unsplash.com/photo-1475563011407-6bf489b1c361?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
                    channel="Themindcircle"
                    image="https://i.pinimg.com/564x/01/5b/d8/015bd8e2512011143f70208c988374b0.jpg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos

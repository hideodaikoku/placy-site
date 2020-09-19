import React from "react";
import appStyles from "../styles/app.module.scss";

const Video  = () => {
    
    const videoSrcURL = "https://www.youtube.com/embed/0ILP0i2y05U?autoplay=1&loop=1&mute=1&playlist=0ILP0i2y05U";
    const videoTitle = "Placy. Find your rhythm";
    return(
        <div className={appStyles.introContainer} id={appStyles.videoContainer}>
                <iframe
                    src={videoSrcURL}
                    title={videoTitle}
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                    webkitallowfullscreen="true"
                    mozallowfullscreen="true"
                    allowFullScreen
                    mute
                    style={{height:"75vh", width:"100%", margin:"0px", padding:"0px"}}
                />
        </div>
    )
}

export default Video;
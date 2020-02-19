import React from "react";
import playlistStyles from "../styles/playlist.module.scss";
import video from "../images/home_gif.mp4";

const PlaylistSection = () => {

    return(
        <div className={playlistStyles.container}>
            <video autoPlay muted loop>
                <source src={video} type="video/mp4"/>
            </video>
        </div>
    )
}

export default PlaylistSection;
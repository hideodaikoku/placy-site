import React from "react";
import playlistStyles from "../styles/playlist.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import { Video } from "gatsby-video";

const PlaylistSection = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: { eq: "home_gif.mp4" }) {
            childVideoFfmpeg {
              webm: transcode(
                outputOptions: ["-crf 20", "-b:v 0"]
                maxWidth: 900
                maxHeight: 480
                fileExtension: "webm"
                codec: "libvpx-vp9"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
              mp4: transcode(
                maxWidth: 900
                maxHeight: 480
                fileExtension: "mp4"
                codec: "libx264"
              ) {
                width
                src
                presentationMaxWidth
                presentationMaxHeight
                originalName
                height
                fileExtension
                aspectRatio
              }
            }
        }
    }
    `)
    const videos = data.file.childVideoFfmpeg;

    return(
        <div className={playlistStyles.container}>
            <Video
                autoPlay
                loop
                muted
                sources = {[videos.webm, videos.mp4]}
            />
        </div>
    )
}

export default PlaylistSection;
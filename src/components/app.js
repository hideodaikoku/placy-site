import React from "react";
import appStyles from "../styles/app.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import { Video } from "gatsby-video";
import Img from "gatsby-image";

const AppSection  = () => {
    
    const data = useStaticQuery(graphql`
    query{
        video:file(relativePath: { eq: "placy-vid.mp4" }) {
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
        image: file(relativePath: {eq: "iphone.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)
    const videos = data.video.childVideoFfmpeg;
    return(
        <div className={appStyles.appContainer}>
            <h2 className={appStyles.heading}>音楽で場所を探せる地図アプリ</h2>
            <div className={appStyles.container}>
                <Img fluid={data.image.childImageSharp.fluid} className={appStyles.image}/>
                <div className={appStyles.rightContainer}>
                    <Video
                        autoPlay
                        muted
                        loop
                        sources = {[videos.webm, videos.mp4]}
                    />
                    <div className={appStyles.textContainer}>
                        <h2 className={appStyles.header}> 音楽の趣味に基づいて場所を探せる地図アプリを提供しています。</h2>
                        <p className={appStyles.text}>    自分と似た音楽を聞いている人が行っている場所を見つけることもできますし、「この音楽聞いている人はどこに行っているんだろう」という使い方もできます。
                            好きな音楽を元に、あなたの街をdigってみましょう。 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AppSection;
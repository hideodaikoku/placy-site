import React from "react";
import appStyles from "../styles/app.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import video from "../images/placy-vid.mp4?autoplay=1";
const AppSection  = () => {
    
    const data = useStaticQuery(graphql`
    query{
        image: file(relativePath: {eq: "iphone.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)

    return(
        <div className={appStyles.appContainer}>
            <h2 className={appStyles.heading}>音楽で場所を探せる地図アプリ</h2>
            <div className={appStyles.container}>
                <Img fluid={data.image.childImageSharp.fluid} className={appStyles.image}/>
                <div className={appStyles.rightContainer}>
                    <div>
                        <video autoPlay muted loop id="video">
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
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
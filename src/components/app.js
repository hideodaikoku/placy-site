import React from "react";
import appStyles from "../styles/app.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
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
        <div className={appStyles.introContainer}>
            <div className={appStyles.textContent}>
                <h1 className={appStyles.title}>
                    Forget the reviews. <br/>
                    Follow your rhythm.
                </h1>
                <p className={appStyles.dec}>
                    Placyは音楽の趣味に基づいて場所を探せる地図アプリです。<br/>
                    レビューやランキングだけでは汲み取ることの難しい、<br/>
                    あなたの「リズム」の流れる場所を見つけてみませんか？
                </p>
                <div className={appStyles.buttonContainers}>
                    <div className={appStyles.button}>
                    </div>
                    <div className={appStyles.button}>
                    </div>
                </div>
            </div>
            <div className={appStyles.image}>
            </div>
        </div>
    )
}

export default AppSection;
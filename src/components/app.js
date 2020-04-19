import React from "react";
import appStyles from "../styles/app.module.scss";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
const AppSection  = () => {
    
    const data = useStaticQuery(graphql`
    query{
        apple: file(relativePath: {eq: "btn_apple.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        android: file(relativePath: {eq: "btn_googleplay.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        app: file(relativePath: {eq: "iphone.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
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
                <p className={appStyles.desc}>
                    Placyは音楽の趣味に基づいて場所を探せる地図アプリです。<br/>
                    レビューやランキングだけでは汲み取ることの難しい、<br/>
                    あなたの「リズム」の流れる場所を見つけてみませんか？
                </p>
                <div className={appStyles.buttonContainer}>
                    <div className={appStyles.button}>
                        <a 
                            href='https://apps.apple.com/jp/app/placy/id1474567327'
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="App Store"
                        >
                        <Img fluid={data.apple.childImageSharp.fluid} />
                        </a>
                    </div>
                    <div className={appStyles.button} id={appStyles.android}>
                        <a 
                            href='https://play.google.com/store/apps/details?id=com.placy.placyapp'
                            target="_blank"
                            rel="noopener noreferrer"
                            alt="Play Store"
                        >
                        <Img fluid={data.android.childImageSharp.fluid}/>
                        </a>
                    </div>
                </div>
            </div>
            <div className={appStyles.right}>
                <div className={appStyles.imgContainer}>
                    <Img fluid={data.app.childImageSharp.fluid}/>
                </div>
            </div>
        </div>
    )
}

export default AppSection;
import React from "react";
import appStyles from "../styles/app.module.scss";

import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const AppSection  = () => {

    const data = useStaticQuery(graphql`
    query{
        about: file(relativePath: {eq: "home_main.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        twitter: file(relativePath: {eq: "twitter.png"}){
            childImageSharp{
                fixed(width: 25, height: 22){
                    ...GatsbyImageSharpFixed
                }
            }
        }
        instagram: file(relativePath: {eq: "instagram.png"}){
            childImageSharp{
                fixed(width: 22, height: 22){
                    ...GatsbyImageSharpFixed
                }
            }
        }
        facebook: file(relativePath: {eq: "facebook.png"}){
            childImageSharp{
                fixed(width: 22, height: 22){
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
`)

    console.log(data);
    
    return(
        <div className={appStyles.appContainer}>
            <h2 className={appStyles.heading}>音楽で場所を探せる地図アプリ</h2>
        </div>
    )
}

export default AppSection;
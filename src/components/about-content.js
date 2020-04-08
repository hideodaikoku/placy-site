import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Mission from "./mission";
import Explanation from "./explanation";
import ProfileSection from "./profile";

import aboutContentStlyes from "../styles/aboutContent.module.scss"

const AboutContent = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "about_main.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)
    return(
        <div className={aboutContentStlyes.container}>
            <div className={aboutContentStlyes.section}>
                <div className={aboutContentStlyes.left}>

                </div>
                <div className={aboutContentStlyes.rightContent}>
                    <h1>
                        Connect space to <br/>
                        its meaning.
                    </h1>
                </div>
            </div>
            <div className={aboutContentStlyes.section}>
                <div className={aboutContentStlyes.leftContent}>
                    <Mission/>
                </div>
                <div className={aboutContentStlyes.right}>
                </div>
            </div>
            <div className={aboutContentStlyes.section}>
                <div className={aboutContentStlyes.left}>
                </div>
                <div className={aboutContentStlyes.rightContent}>
                    <Explanation/>
                </div>
            </div>
            <div className={aboutContentStlyes.section}>
                <div className={aboutContentStlyes.leftContent}>
                    <ProfileSection/>
                </div>
                <div className={aboutContentStlyes.right}>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
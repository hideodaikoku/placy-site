import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image";
import Mission from "./mission";
import Explanation from "./explanation";
import ProfileSection from "./profile";

import aboutContentStyles from "../styles/aboutContent.module.scss"

const AboutContent = () => {
    const data = useStaticQuery(graphql`
    query{
        about: file(relativePath: {eq: "about_0407.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mission: file(relativePath: {eq: "mission.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        explanation: file(relativePath: {eq: "explanation.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }           
    }
    `)
    return(
        <div className={aboutContentStyles.container}>
            <div className={aboutContentStyles.section}>
                <div className={aboutContentStyles.left}>
                    <div className={aboutContentStyles.imgContainer}>
                        <Img fluid={data.about.childImageSharp.fluid}/>
                    </div>
                </div>
                <div className={aboutContentStyles.rightContent}>
                    <h1 className={aboutContentStyles.title}>
                        Connect space to
                        its meaning.
                    </h1>
                </div>
            </div>
            <div className={aboutContentStyles.section} id={aboutContentStyles.miss}>
                <div className={aboutContentStyles.leftContent}>
                    <Mission/>
                </div>
                <div className={aboutContentStyles.right}>
                    <Img fluid={data.mission.childImageSharp.fluid} className={aboutContentStyles.fixedImage}/>
                </div>
            </div>
            <div className={aboutContentStyles.section}>
                <div className={aboutContentStyles.left}>
                    <Img fluid={data.explanation.childImageSharp.fluid} className={aboutContentStyles.imgContainer}/>
                </div>
                <div className={aboutContentStyles.rightContent}>
                    <Explanation/>
                </div>
            </div>
            <div className={aboutContentStyles.section} id={aboutContentStyles.last}>
                <div className={aboutContentStyles.leftContent}>
                    <ProfileSection/>
                </div>
                <div className={aboutContentStyles.right}>
                </div>
            </div>
        </div>
    )
}

export default AboutContent;
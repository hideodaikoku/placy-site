import React from "React"

import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import contentStyle from "../styles/content.module.scss"; 

const MissionSection = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "placy-convert.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)
    return(
        <div className={contentStyle.container}>
            <span className={contentStyle.square}></span>
            <h2 className={contentStyle.heading}>MISSION AND VISION</h2>
            <hr className={contentStyle.rule}/>
            <div className={contentStyle.imageContainer}>
                <Img fluid={data.file.childImageSharp.fluid}/>
            </div>
            <p className={contentStyle.text}>
                Placyは個人と法人を対象にした、2つのサービスを提供しています。
                <br/>
                両者のサービスは独立して存在するのではなく、互いに強化しあいます。
            </p>
        </div>
    )
}

export default MissionSection;
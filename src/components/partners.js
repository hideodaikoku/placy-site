import React from "React"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import partnerStyle from "../styles/partners.module.scss"; 

const PartnersSection = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "logos.png"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)
    return(
        <div className={partnerStyle.container}>
            <h2 className={partnerStyle.heading}>OUR PARTNERS AND MEDIA COVERAGE</h2>
            <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
    )
}

export default PartnersSection;
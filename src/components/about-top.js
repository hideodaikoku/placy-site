import React from "React"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"


const AboutTopSection = () => {
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
        <div>
            <Img fluid={data.file.childImageSharp.fluid}/>
        </div>
    )
}

export default AboutTopSection;
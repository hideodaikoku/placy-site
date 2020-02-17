import React from "React"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const CareerTopSection = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "career_main.png"}){
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

export default CareerTopSection;
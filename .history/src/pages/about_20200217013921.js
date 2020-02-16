import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutPage = () => {

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
        <Layout>
            <Img fluid={data.file.childImageSharp.fluid}/>
        </Layout>
    )
}

export default AboutPage
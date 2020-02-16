import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const AboutPage = () => {

    const data = useStaticQuery(graphql`
        query{
            about: file(relativePath: {eq: "about_main.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            twitter: file(relativePath: {eq: "twitter.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            instagram: file(relativePath: {eq: "instagram.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            facebook: file(relativePath: {eq: "facebook.ppg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
    console.log(data)
    return(
        <Layout>
            <Img fluid={data.about.file.childImageSharp.fluid}/>
        </Layout>
    )
}

export default AboutPage
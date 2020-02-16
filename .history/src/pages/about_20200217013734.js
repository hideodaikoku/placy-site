import React from "react"
import { Link } from "gatsby"
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
    console.log(data)
    return(
        <Layout>
            <Img fluid={data.file.childImageSharp.fluid}/>
        </Layout>
    )
}

export default AboutPage
import React from "react"
import "../styles/index.module.scss"
import Layout from "../components/layout"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query{
            file(relativePath: {eq: "home_main.jpg"}){
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

export default IndexPage
import React from "react"
import Layout from "../components/layout"
import {useStaticQuery, graphql } from "gatsby-image";
import Img from "gatsby-image";

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
            <h1>Welcome to Placy</h1>
        </Layout>
    )
}

export default IndexPage
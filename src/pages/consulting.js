import React from "react"
import Layout from "../components/layout"

import consultingStyles from "../styles/consulting.module.scss";
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import Head from "../components/head";

const ConsultingPage = () => {
    const data = useStaticQuery(graphql`
    query{
        file(relativePath: {eq: "consulting.jpg"}){
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
            <Head/>
            <Img fluid={data.file.childImageSharp.fluid}/>
            <h2 className={consultingStyles.heading}>COMING SOON</h2>
        </Layout>
    )
}

export default ConsultingPage
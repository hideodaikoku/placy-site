import React from "react"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";


import Layout from "../components/layout";
import AppSection from "../components/app";
import PartnersSection from "../components/partners";
import Head from "../components/head";
import Top from "../components/top";

const IndexPage = () => {
    const data = useStaticQuery(graphql`
        query{
            about: file(relativePath: {eq: "home_main.jpg"}){
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
            <Top/>
            <AppSection/>
            <PartnersSection/>
        </Layout>
    )
}

export default IndexPage
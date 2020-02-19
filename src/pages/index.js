import React from "react"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";


import Layout from "../components/layout"
import IntroSection from "../components/intro";
import AppSection from "../components/app";
import PlaylistSection from "../components/playlist";
import PartnersSection from "../components/partners";
import NewsSection from "../components/news";
import Head from "../components/head";

import indexStyles from "../styles/index.module.scss"
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
            twitter: file(relativePath: {eq: "twitter.png"}){
                childImageSharp{
                    fixed(width: 25, height: 22){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            instagram: file(relativePath: {eq: "instagram.png"}){
                childImageSharp{
                    fixed(width: 22, height: 22){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            facebook: file(relativePath: {eq: "facebook.png"}){
                childImageSharp{
                    fixed(width: 22, height: 22){
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `)
    return(
        <Layout>
            <Head/>
            <div className={indexStyles.topContainer}>
                <Img fluid={data.about.childImageSharp.fluid} className={indexStyles.image}/>
                <div className={indexStyles.container}>
                    <div className={indexStyles.containerText}>
                        <strong>Placy is a spatial data company. </strong><br/>
                        <strong>We identify underlying value of your space by uncovering unseen spatial parameters.</strong>
                    </div>
                    <div className={indexStyles.socialContainer}>
                        <a  href="https://twitter.com/placy_city" 
                            target="_blank" rel="noopener noreferrer" 
                            className={indexStyles.socialImage}>
                            <Img fixed={data.twitter.childImageSharp.fixed}/>
                        </a>
                        <a  href="https://www.facebook.com/placy.city/" 
                            target="_blank" rel="noopener noreferrer" 
                            className={indexStyles.socialImage}>
                            <Img fixed={data.instagram.childImageSharp.fixed}/>
                        </a>
                        <a  href="https://www.instagram.com/placy_city/" 
                            target="_blank" rel="noopener noreferrer" 
                            className={indexStyles.socialImage}>
                            <Img fixed={data.facebook.childImageSharp.fixed}/>
                        </a>
                    </div>
                </div>
            </div>
            <IntroSection/>
            <AppSection/>
            <PlaylistSection/>
            <PartnersSection/>
            <NewsSection/>
        </Layout>
    )
}

export default IndexPage
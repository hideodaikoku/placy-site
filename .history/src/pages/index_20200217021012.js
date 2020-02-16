import React from "react"
import Layout from "../components/layout"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

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
            facebook: file(relativePath: {eq: "facebook.png"}){
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
            <div className={indexStyles.topContainer}>
                <Img fluid={data.about.childImageSharp.fluid} className={indexStyles.image}/>
                <div className={indexStyles.container}>
                    <div className={indexStyles.containerText}>
                        <strong>Placy is a spatial data company. </strong><br/>
                        <strong>We identify underlying value of your space by uncovering unseen spatial parameters.</strong>
                    </div>
                    <div className={indexStyles.socialContainer}>
                        <a className={indexStyles.socialImage}>
                            <Img fluid={data.twitter.childImageSharp.fluid}/>
                        </a>
                        <a className={indexStyles.socialImage}>    
                            <Img fluid={data.instagram.childImageSharp.fluid}/>
                        </a>
                        <a className={indexStyles.socialImage}>
                            <Img fluid={data.facebook.childImageSharp.fluid}/>
                        </a>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
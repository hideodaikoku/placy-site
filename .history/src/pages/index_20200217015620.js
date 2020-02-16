import React from "react"
import indexStyles from "../styles/index.module.scss"
import Layout from "../components/layout"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

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
            <div className={indexStyles.topContainer}>
                {/* <Img fluid={data.about.file.childImageSharp.fluid} className={indexStyles.image}/> */}
                <div className={indexStyles.container}>
                    <strong>Placy is a spatial data company. </strong><br/>
                    <strong>We identify underlying value of your space by uncovering unseen spatial parameters.</strong>
                </div>
            </div>
        </Layout>
    )
}

export default IndexPage
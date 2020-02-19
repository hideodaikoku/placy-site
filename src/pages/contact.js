import React from "react"

import contentStyle from "../styles/content.module.scss";
import indexStyles from "../styles/index.module.scss";

import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";
import Layout from "../components/layout"
import Head from "../components/head";

const ContactPage = () => {
    const data = useStaticQuery(graphql`
        query{
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
            <h2 className={contentStyle.heading}>Contact Us</h2>
            <p className={contentStyle.textLeft}>Email us at soma [at] placy [dot] city</p>
            <div className={contentStyle.socialContent}>
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
        </Layout>
    )
}
export default ContactPage
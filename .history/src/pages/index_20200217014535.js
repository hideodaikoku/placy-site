import React from "react"
import indexStyles from "../styles/index.module.scss"
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
            <Img fluid={data.file.childImageSharp.fluid} className={indexStyles.image}/>
            <div>
                <h1>Placy is a spatial data company.</h1>
                <h1>We identify underlying value of your space by uncovering unseen spatial parameters.</h1>
            </div>
        </Layout>
    )
}

export default IndexPage
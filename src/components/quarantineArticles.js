import React from "react";
import quarantineArticleStyles from "../styles/quarantinearticle.module.scss";
import quarantineData from "../data/quarantine.json";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const QuarantineArticles = () => {
    const data = useStaticQuery(graphql`
        query{
            china: file(relativePath: {eq: "china.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            zurich: file(relativePath: {eq: "zurich.png"}){
                childImageSharp{
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            athens: file(relativePath: {eq: "greece.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hkg: file(relativePath: {eq: "hkg.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
        
    `)
    return(
        <div className={quarantineArticleStyles.container}>
            <div className={quarantineArticleStyles.articleContainer}>
            {quarantineData.map( (quarantine,idx) =>(
                <div key={idx} className={quarantineArticleStyles.article}>
                    <div className={quarantineArticleStyles.imageContainer}>
                        <a href={quarantine.medium} target="_blank" rel="noopener noreferrer">
                        <Img fluid={data[quarantine.img].childImageSharp.fluid} className={quarantineArticleStyles.image}/>
                        <div className={quarantineArticleStyles.overlay}></div>
                        </a>
                    </div>
                    <h1 className={quarantineArticleStyles.country}>{quarantine.place}</h1>
                    <small>{quarantine.date}</small>
                    <p className={quarantineArticleStyles.author}><i>{quarantine.author}</i></p>
                    <p className={quarantineArticleStyles.title}>{quarantine.title}</p>
                </div>
            ))}
            </div>
        </div>
    )
}

export default QuarantineArticles;
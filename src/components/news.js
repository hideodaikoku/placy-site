import React from "react";

import { useStaticQuery, graphql } from "gatsby";

import Article from "./article";
import newsStyle from "../styles/news.module.scss";

const NewsSection = () => {
    const data = useStaticQuery(graphql`
        query{
            campfire: file(relativePath: {eq: "campfire.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            cityBlend: file(relativePath: {eq: "city-blend.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            forbes: file(relativePath: {eq: "forbes.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            metacity: file(relativePath: {eq: "metacity.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            microsoftPlacy: file(relativePath: {eq: "microsoft-placy.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            mit: file(relativePath: {eq: "mit.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            neut: file(relativePath: {eq: "neut.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            roofBlend: file(relativePath: {eq: "roof-blend.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            sampo: file(relativePath: {eq: "sampo.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            twitterExperiment: file(relativePath: {eq: "twitter-experiment.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            wiredNext: file(relativePath: {eq: "wired-next-generation.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
    return(
        <div className={newsStyle.container}>
            <h2 className={newsStyle.heading}>NEWS</h2>
            <div className={newsStyle.articleContainer}>
                <Article
                 image = {data.microsoftPlacy.childImageSharp.fluid}
                 id = {"microsoftPlacy"}
                />
                <Article
                 image = {data.mit.childImageSharp.fluid}
                 id = {"mit"}
                />
                <Article
                 image = {data.forbes.childImageSharp.fluid}
                 id = {"forbes"}
                />
                <Article
                 image = {data.cityBlend.childImageSharp.fluid}
                 id = {"cityBlend"}
                />
                <Article
                 image = {data.neut.childImageSharp.fluid}
                 id = {"neut"}
                />
                <Article
                 image = {data.campfire.childImageSharp.fluid}
                 id = {"campfire"}
                />
                <Article
                 image = {data.sampo.childImageSharp.fluid}
                 id = {"sampo"}
                />
                <Article
                 image = {data.twitterExperiment.childImageSharp.fluid}
                 id = {"twitterExperiment"}
                />
                <Article
                 image = {data.roofBlend.childImageSharp.fluid}
                 id = {"roofBlend"}
                />
                <Article
                 image = {data.metacity.childImageSharp.fluid}
                 id = {"metacity"}
                />
                <Article
                 image = {data.wiredNext.childImageSharp.fluid}
                 id = {"wiredNext"}
                />
            </div>
        </div>
    )
}

export default NewsSection;
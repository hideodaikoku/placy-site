import React from "react";
import { Link } from "gatsby";
import quarantineArticleStyles from "../styles/quarantinearticle.module.scss";
import quarantineData from "../data/quarantine.json";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const QuarantineArticles = () => {
    const data = useStaticQuery(graphql`
        query{
            china: file(relativePath: {eq: "china.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            zurich: file(relativePath: {eq: "zurich.png"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            athens: file(relativePath: {eq: "greece.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hkg: file(relativePath: {eq: "hkg.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }

            london: file(relativePath: {eq: "london.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            russia: file(relativePath: {eq: "russia.png"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            australia: file(relativePath: {eq: "australia.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tokyo: file(relativePath: {eq: "tokyo.png"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            chile: file(relativePath: {eq: "chile.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            rio: file(relativePath: {eq: "rio.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            berlin: file(relativePath: {eq: "berlin.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kyiv: file(relativePath: {eq: "kyiv.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            capeTown: file(relativePath: {eq: "cape-town.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            venice: file(relativePath: {eq: "venice.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            singapore: file(relativePath: {eq: "singapore.jpeg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            zagreb: file(relativePath: {eq: "croatia.jpeg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            luxembourg: file(relativePath: {eq: "lux.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            wales: file(relativePath: {eq: "wales.png"}){
                childImageSharp{
                    fluid(maxWidth: 400){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            saopaolo: file(relativePath: {eq: "saop.jpeg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            valencia: file(relativePath: {eq: "valencia.jpeg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            excerpt: allMarkdownRemark{
                nodes{
                  frontmatter{
                    excerpt
                    author
                  }
                }
            }
        }
    `)
    console.log()
    return(
        <div className={quarantineArticleStyles.container}>
            <div className={quarantineArticleStyles.articleContainer}>
            {quarantineData.slice(0).reverse().map( (quarantine,idx) =>{
                    if(idx==0){
                        return(
                            <div key={idx} className={quarantineArticleStyles.mainArticle}>
                                <div className={quarantineArticleStyles.imageContainer}>
                                    <Link to={"/post-quarantine-urbanism/"+quarantine.slug}>
                                    <Img fluid={data[quarantine.img].childImageSharp.fluid} className={quarantineArticleStyles.image}/>
                                    <div className={quarantineArticleStyles.overlay}></div>
                                    </Link>
                                </div>
                                <div className={quarantineArticleStyles.mainTextContainer}>
                                    <h2>Latest Article</h2>
                                    <h3 className={quarantineArticleStyles.country}>{quarantine.title}</h3>
                                    <small>{quarantine.date}</small>
                                    <p className={quarantineArticleStyles.author}><i>{quarantine.author}</i></p>
                                    <p className={quarantineArticleStyles.title}>{quarantine.place}</p>
                                    <p className={quarantineArticleStyles.excerpt}>
                                        {data.excerpt.nodes.filter((node)=>node.frontmatter.author===quarantine.author)[0].frontmatter.excerpt}
                                    </p>
                                    <Link to={"/post-quarantine-urbanism/"+quarantine.slug} style={{textDecoration:"underline"}}>
                                        Read More
                                    </Link>
                                </div>
                            </div>
                        )
                    }
                    else{
                        return(
                            <div key={idx} className={quarantineArticleStyles.article}>
                                <div className={quarantineArticleStyles.imageContainer}>
                                    <Link to={"/post-quarantine-urbanism/"+quarantine.slug}>
                                    <Img fluid={data[quarantine.img].childImageSharp.fluid} className={quarantineArticleStyles.image}/>
                                    <div className={quarantineArticleStyles.overlay}></div>
                                    </Link>
                                </div>
                                <h1 className={quarantineArticleStyles.country}>{quarantine.place}</h1>
                                <small>{quarantine.date}</small>
                                <p className={quarantineArticleStyles.author}><i>{quarantine.author}</i></p>
                                <p className={quarantineArticleStyles.title}>{quarantine.title}</p>
                            </div>
                        )
                    }
                }
            )}
            </div>
        </div>
    )
}

export default QuarantineArticles;
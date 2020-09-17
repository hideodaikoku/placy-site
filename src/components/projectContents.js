import React from "react";
import projectContentstyles from "../styles/projectContent.module.scss";
import Img from "gatsby-image";
import { useStaticQuery,graphql,Link } from "gatsby";
import {useIntl} from "gatsby-plugin-intl";

const ProjectContents =()=>{
    const data = useStaticQuery(graphql`
        query{
            pqr: file(relativePath: {eq: "pqr.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jr_logo: file(relativePath: {eq: "jr.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            tokyu: file(relativePath: {eq: "tokyu.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kenta: file(relativePath: {eq: "kenta.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cross: file(relativePath: {eq: "cross.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            app: file(relativePath: {eq: "a_01788.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pamphlets: file(relativePath: {eq: "jr1.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jr: file(relativePath: {eq: "shibuya_cast.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            postcards: file(relativePath: {eq: "postcards.png"}){
                childImageSharp{
                    fluid(maxWidth: 1600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            follow: file(relativePath: {eq: "follow.png"}){
                childImageSharp{
                    fluid(maxWidth: 1600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const intl = useIntl();
    return(
        <div className={projectContentstyles.container}>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.pqrContent}>
                    <h1 className={projectContentstyles.title}>
                        {intl
                            .formatMessage({id:"exhibition_title"})
                            .split('\n')
                            .map( (c,idx)=>
                                <span key={idx}>
                                    {c}<br/>
                                </span>
                            )    
                        }
                    </h1>
                    <p className={projectContentstyles.descTop}>
                        {intl
                        .formatMessage({id:"exhibition"})
                        .split('\n')
                        .map( (c,idx)=>
                            <span key={idx}>
                                {c}<br/>
                            </span>
                         )    
                        }
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <Link to="/post-quarantine-urbanism/">
                        <Img fluid={data.follow.childImageSharp.fluid} alt={"Mori Building Exhibition"} className={projectContentstyles.pqr}/>
                    </Link>
                </div>
            </div>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.pqrContent}>
                    <h1 className={projectContentstyles.title}>
                        Post-Quarantine Urbanism<br/>
                    </h1>
                    <p className={projectContentstyles.descTop}>
                        {intl
                        .formatMessage({id:"projects_post_quarantine"})
                        .split('\n')
                        .map( (c,idx)=>
                            <span key={idx}>
                                {c}<br/>
                            </span>
                         )    
                        }
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <Link to="/post-quarantine-urbanism/">
                        <Img fluid={data.pqr.childImageSharp.fluid} alt={"post quarantine urbanism"} className={projectContentstyles.pqr}/>
                    </Link>
                </div>
            </div>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                        <div className={projectContentstyles.cross}>
                            <Img fluid={data.cross.childImageSharp.fluid}/>
                        </div>
                        <div　className={projectContentstyles.jrLogo}>
                            <Img fluid={data.jr_logo.childImageSharp.fluid}/>
                        </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Explore Yamanote-line<br/>
                        through music.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        {intl
                            .formatMessage({id:"projects_urban"})
                            .split('\n')
                            .map( (c, idx) =>
                                <span key={idx}>
                                    {c}<br/>
                                </span>
                            )    
                        }
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <a href="https://prtimes.jp/main/html/rd/p/000000005.000047935.html" target="_blank" rel="noopener noreferrer">
                        <Img fluid={data.app.childImageSharp.fluid} className={projectContentstyles.imgTop}/>          
                        <Img fluid={data.pamphlets.childImageSharp.fluid} className={projectContentstyles.imgBottom}/>
                    </a>
                </div>
            </div>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                            <div className={projectContentstyles.cross}>
                                <Img fluid={data.cross.childImageSharp.fluid}/>
                            </div>
                            <div　className={projectContentstyles.logo}>
                                <Img fluid={data.tokyu.childImageSharp.fluid}/>
                            </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Analyse Shibuya through<br/>
                        the lens of music data.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        {intl
                            .formatMessage({id:"projects_shibuya_cast"})
                            .split('\n')
                            .map( (c, idx) =>
                                <span key={idx}>
                                    {c}<br/>
                                </span>
                            )    
                        }
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <Img fluid={data.jr.childImageSharp.fluid} className={projectContentstyles.img}/>
                </div>
            </div>
            <div className={projectContentstyles.kenta}>
                <div className={projectContentstyles.leftContent}>
                <div className={projectContentstyles.projectTop}>
                        <div className={projectContentstyles.cross}>
                            <Img fluid={data.cross.childImageSharp.fluid}/>
                        </div>
                        <div　className={projectContentstyles.logo}>
                            <Img fluid={data.kenta.childImageSharp.fluid}/>
                        </div>
                        <div className={projectContentstyles.byLine}>
                            <p id={projectContentstyles.tanakaTitle}>sound artist</p>
                            <h1 id={projectContentstyles.tanaka}>Kenta Tanaka</h1>
                        </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Archive sound aspects of <br/>
                        city with vinyl postcards.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        {
                            intl
                                .formatMessage({id:"projects_shibuya_sound"})
                                .split('\n')
                                .map( (c,idx) =>
                                    <span key={idx} >
                                        {c}<br/>
                                    </span >
                                )    
                        }
                    </p>
                </div>
                <div className={projectContentstyles.right} id={projectContentstyles.green}>
                    <div className={projectContentstyles.img}>
                        <Img fluid={data.postcards.childImageSharp.fluid}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectContents;
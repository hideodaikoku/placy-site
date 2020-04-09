import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

import partnerStyle from "../styles/partners.module.scss"; 

const PartnersSection = () => {
    const data = useStaticQuery(graphql`
    query{
        microsoft: file(relativePath: {eq: "microsoft.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        wired: file(relativePath: {eq: "wired.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
        yamanote: file(relativePath: {eq: "a_01788.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)
    return(
        <div className={partnerStyle.container}>
            <div className={partnerStyle.microsoft}>
                <div className={partnerStyle.leftContent}>
                    <h1 className={partnerStyle.title}>
                        "音楽で場所を探せる地図アプリ「Placy」を提供する <br/>
                        株式会社Placy、Microsoft for Startupsに採択決定" 
                    </h1>
                    <a 
                        href="https://prtimes.jp/main/html/rd/p/000000003.000047935.html" 
                        className={partnerStyle.link}
                    >
                        Read more
                    </a>
                    <div className={partnerStyle.image}>
                        <Img fluid={data.microsoft.childImageSharp.fluid}/>    
                    </div>
                </div>
                <div className={partnerStyle.right}>
                
                </div>    
            </div>

            <div className={partnerStyle.wired}>
                <div className={partnerStyle.left}>

                </div>
                <div className={partnerStyle.rightContent}> 
                    <h1 className={partnerStyle.title}>
                        "「情緒」と「論理」の共通言語をつくる："音楽" から場所を探すアプリPlacyによる「都市の均質化」への抵抗　"
                    </h1>
                    <a 
                        href="https://wired.jp/2020/01/03/placy/" 
                        className={partnerStyle.link}
                    >
                        Read more
                    </a>
                    <div className={partnerStyle.wiredImage}>
                        <Img fluid={data.wired.childImageSharp.fluid}/>
                    </div>
                </div>    
            </div>

            <div className={partnerStyle.yamanote}>
                <div className={partnerStyle.leftContent}>
                    <h1 className={partnerStyle.title}>
                        Explore Yamanote-Line<br/>
                        through music.
                    </h1>
                    <p className={partnerStyle.desc}>
                        山手線の各駅には、それぞれ異なる歴史や風土があり、<br/>
                        そこに流れる音楽やリズムも多種多様 です。<br/>
                        Placy は各駅の特徴的な場所を選定し、そこに流れる音楽データを <br/>
                        解析することで、街をより愉しむための地図を作成しています。<br/>
                        都市のリズムに身を任せて、新しい街の一面を発見 してみませんか? <br/>
                    </p>
                    <div className={partnerStyle.yamanoteBottom}>
                        <div className={partnerStyle.computer}>
                            <Img fluid={data.yamanote.childImageSharp.fluid}/>
                        </div>
                    </div>
                </div>
                <div className={partnerStyle.right}>
                
                </div>    
            </div>
        </div>
    )
}

export default PartnersSection;
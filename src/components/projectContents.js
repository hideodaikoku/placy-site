import React from "react";
import projectContentstyles from "../styles/projectContent.module.scss";
import Img from "gatsby-image";
import { useStaticQuery,graphql } from "gatsby";
// a_01788.jpg
const ProjectContents =()=>{
    const data = useStaticQuery(graphql`
        query{
            pqr: file(relativePath: {eq: "Placy_PQR_Web.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kandosen: file(relativePath: {eq: "kandosen_logo.png"}){
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
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            pamphlets: file(relativePath: {eq: "jr1.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jr: file(relativePath: {eq: "jr_cast.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            postcards: file(relativePath: {eq: "postcards.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)

    return(
        <div className={projectContentstyles.container}>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.leftContent} id={projectContentstyles.pqr}>
                    <h1 className={projectContentstyles.title}>
                        Post-Quarantine Urbanism<br/>
                    </h1>
                    <p className={projectContentstyles.descTop} onClick={(e)=>window.location="/post-quarantine-urbanism"}>
                    Cities are the central nodes of our modern economy; hubs of creativity and innovation. Our globalised system relies on us living collectively, but pandemics are inherently anti-city, as they could force the breakdown of collective cooperation. How will our cities evolve, to adapt to this new reality?
                    <br/><br/>
                    Cities across the world are establishing unique initiatives and projects to combat the effects of this situation; and by exploring each city's approach, perhaps we can gain a glimpse of our post quarantine world.
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <div className={projectContentstyles.pqr}>
                        <Img fluid={data.pqr.childImageSharp.fluid} alt={"post quarantine urbanism"}/>
                    </div>
                </div>
            </div>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                        <div className={projectContentstyles.cross}>
                            <Img fluid={data.cross.childImageSharp.fluid}/>
                        </div>
                        <div　class={projectContentstyles.logo}>
                            <Img fluid={data.kandosen.childImageSharp.fluid}/>
                        </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Explore Yamanote-line<br/>
                        through music.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        Urban Rhythm Guideは、「音楽」で都市の魅力に出会うことを目的としたプロジェクトです。<br/>
                        当プロジェクトでは、次の2点を作成いたしました。<br/>
                        ①音楽で、あなたの感覚にあった山手線の駅を見つけることができるウェブサービス、<br/>
                        ②各駅の音楽的な特徴を描写した30種類のパンフレット。
                        <br/>リズムに身を任せて、新しい都市の一面を発見してみませんか?
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <div className={projectContentstyles.imgTop}>
                        <Img fluid={data.app.childImageSharp.fluid}/>
                    </div>
                    <div className={projectContentstyles.imgBottom}>
                        <Img fluid={data.pamphlets.childImageSharp.fluid}/>
                    </div>
                </div>
            </div>
            <div className={projectContentstyles.row}>
                <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                            <div className={projectContentstyles.cross}>
                                <Img fluid={data.cross.childImageSharp.fluid}/>
                            </div>
                            <div　class={projectContentstyles.logo}>
                                <Img fluid={data.tokyu.childImageSharp.fluid}/>
                            </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Analyse Shibuya through<br/>
                        the lens of music data.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        渋谷キャスト付近について、Placyアプリのデータに基づいて分析を
                        行わせていただきました。渋谷キャスト付近を訪れる人が聞いている音楽の特徴を、
                        渋谷全体に対して比較し、その傾向について記述させて頂きました。
                    </p>
                </div>
                <div className={projectContentstyles.right}>
                    <div className={projectContentstyles.img}>
                        <Img fluid={data.jr.childImageSharp.fluid}/>
                    </div>
                </div>
            </div>
            <div className={projectContentstyles.kenta}>
                <div className={projectContentstyles.leftContent}>
                <div className={projectContentstyles.projectTop}>
                        <div className={projectContentstyles.cross}>
                            <Img fluid={data.cross.childImageSharp.fluid}/>
                        </div>
                        <div　class={projectContentstyles.logo}>
                            <Img fluid={data.kenta.childImageSharp.fluid}/>
                        </div>
                        <div class={projectContentstyles.byLine}>
                            <p id={projectContentstyles.tanakaTitle}>sound artist</p>
                            <h1 id={projectContentstyles.tanaka}>Kenta Tanaka</h1>
                        </div>
                    </div>
                    <h1 className={projectContentstyles.title}>
                        Archive sound aspects of <br/>
                        city with vinyl postcards.
                    </h1>
                    <p className={projectContentstyles.desc}>
                        毎月のように急速に変わりゆく渋谷を、「音」の観点からアーカイブする 
                        プロジェクトです。Placyのユーザーデータを元に「渋谷の音」を生成し、
                        それを絵葉書レコードに焼き付けます。
                        もちろん、この絵葉書はレコードプレイヤーで実際に聞いてもらうことができます。
                        (現在発注準備中です。少々お待ちくださいませ。)
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
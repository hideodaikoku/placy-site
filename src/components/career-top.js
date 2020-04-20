import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import careertTopStyles from "../styles/careertop.module.scss";

const CareerTopSection = () => {
    const data = useStaticQuery(graphql`
    query{
        top: file(relativePath: {eq: "2.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        mid: file(relativePath: {eq: "1.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
        bot: file(relativePath: {eq: "4.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)
    return(
        <div className={careertTopStyles.container}>
            <div className={careertTopStyles.section}>
                <div className={careertTopStyles.leftContent}>
                    <h1 className={careertTopStyles.title}>
                    We identify underlying value<br/>
                    of the space by uncovering<br/>
                    unseen spatial parameters.
                    </h1>
                </div>
                <div className={careertTopStyles.right}>
                    <Img fluid={data.top.childImageSharp.fluid} className={careertTopStyles.fixedImage}></Img>
                </div>
            </div>
            <div className={careertTopStyles.section}>
                <div className={careertTopStyles.left}>
                    <Img fluid={data.mid.childImageSharp.fluid} className={careertTopStyles.imgContainer}></Img>
                </div>
                <div className={careertTopStyles.rightContent} id ={careertTopStyles.empty}>
                </div>
            </div>
            <div className={careertTopStyles.section}>
                <div className={careertTopStyles.leftContent}>
                    <p className={careertTopStyles.text}>
                        Placyには、都市モデリング、空間データ解析、
                        コンピュータサイエンスをバックグラウンドにもつ
                        メンバーが所属しています。
                        <br/>
                        現在、私たちと一緒に働いてくれる方を募集しております。
                        ご連絡お待ちしております！
                    </p>
                </div>
                <div className={careertTopStyles.right}>
                    <Img fluid={data.bot.childImageSharp.fluid} className={careertTopStyles.fixedImage}></Img>
                </div>                
            </div>
        </div>
    )
}

export default CareerTopSection;
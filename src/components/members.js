import React from "react"
import memberPageStyle from "../styles/memberpage.module.scss";
import Member from "./member";

import { useStaticQuery, graphql } from "gatsby"

const MemberSection = () => {
    const data = useStaticQuery(graphql`
        query{
            soma: file(relativePath: {eq: "soma.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            kazu: file(relativePath: {eq: "kazu.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            hideo: file(relativePath: {eq: "index.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            marina: file(relativePath: {eq: "marina.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            minerva: file(relativePath: {eq: "minerva.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            miki: file(relativePath: {eq: "miki.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            todd: file(relativePath: {eq: "todd.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            stephen: file(relativePath: {eq: "stephen.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
        
    return(
        <div className={memberPageStyle.container}>
            <div className={memberPageStyle.row}>
                <div className={memberPageStyle.left}>
                </div>
                <div className={memberPageStyle.rightContent}>
                    <h1 className={memberPageStyle.title}>
                        メンバー紹介
                    </h1>
                </div>
            </div>
            <div className={memberPageStyle.row}>
            <div className={memberPageStyle.leftContent}>
                <div className={memberPageStyle.memberContainer}>
                    <Member
                    image={data.soma.childImageSharp}
                    id={"soma"}
                    />
                    <Member
                    image={data.kazu.childImageSharp}
                    id={"kazu"}
                    />
                    <Member
                    image={data.hideo.childImageSharp}
                    id={"hideo"}
                    />
                    <Member
                    image={data.marina.childImageSharp}
                    id={"marina"}
                    />
                    <Member
                    image={data.minerva.childImageSharp}
                    id={"minerva"}
                    />
                    <Member
                    image={data.miki.childImageSharp}
                    id={"miki"}
                    />
                    <Member
                    image={data.stephen.childImageSharp}
                    id={"stephen"}
                    />
                    <Member
                    image={data.todd.childImageSharp}
                    id={"todd"}
                    />
                </div>
            </div>
            <div className={memberPageStyle.right}>
            </div>
            </div>
        </div>
    )
}

export default MemberSection;
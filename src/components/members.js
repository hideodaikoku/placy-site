import React from "React"
import contentStyle from "../styles/content.module.scss"; 
import Member from "./member";

import { useStaticQuery, graphql } from "gatsby"

const MemberSection = () => {
    const data = useStaticQuery(graphql`
        query{
            soma: file(relativePath: {eq: "soma.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            kazu: file(relativePath: {eq: "kazu.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            hideo: file(relativePath: {eq: "index.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            marina: file(relativePath: {eq: "marina.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            minerva: file(relativePath: {eq: "minerva.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            miki: file(relativePath: {eq: "miki.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            todd: file(relativePath: {eq: "todd.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
            stephen: file(relativePath: {eq: "stephen.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024){
                        ...GatsbyImageSharpFluid_tracedSVG
                    }
                }
            }
        }
    `)
        
    console.log(data)

    return(
        <div className={contentStyle.container}>
            <span className={contentStyle.square}></span>
            <h2 className={contentStyle.heading}>MEMBERS</h2>
            <hr className={contentStyle.rule}/>
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
             id={"kazu"}
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
    )
}

export default MemberSection;
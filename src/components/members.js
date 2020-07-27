import React from "react"
import memberPageStyle from "../styles/memberpage.module.scss";
import Member from "./member";
import {useIntl} from "gatsby-plugin-intl";
import { useStaticQuery, graphql } from "gatsby"

const MemberSection = () => {
    const data = useStaticQuery(graphql`
        query{
            soma: file(relativePath: {eq: "soma.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            kazu: file(relativePath: {eq: "kazu.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            hideo: file(relativePath: {eq: "index.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            marina: file(relativePath: {eq: "marina.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            minerva: file(relativePath: {eq: "minerva.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            miki: file(relativePath: {eq: "miki.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            todd: file(relativePath: {eq: "todd.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            stephen: file(relativePath: {eq: "stephen.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sp4ghet: file(relativePath: {eq: "sp4ghet.png"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mirei: file(relativePath: {eq: "mirei.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            jono: file(relativePath: {eq: "jono.JPG"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            eisuke: file(relativePath: {eq: "eisuke.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            moriya: file(relativePath: {eq: "moriya.jpg"}){
                childImageSharp{
                    fluid(maxWidth: 1024, grayscale: true){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `)
    const intl = useIntl()
    return(
        <div className={memberPageStyle.container}>
            <div className={memberPageStyle.row}>
                <div className={memberPageStyle.left}>
                </div>
                <div className={memberPageStyle.rightContent}>
                    <h1 className={memberPageStyle.title}>
                        {intl.formatMessage({id:"memberIntro"})}
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
                    <Member
                    image={data.sp4ghet.childImageSharp}
                    id={"sp4ghet"}
                    />
                    <Member
                    image={data.mirei.childImageSharp}
                    id={"mirei"}
                    />
                    <Member
                    image={data.jono.childImageSharp}
                    id={"jono"}
                    />
                    <Member
                    image={data.eisuke.childImageSharp}
                    id={"eisuke"}
                    />
                     <Member
                    image={data.moriya.childImageSharp}
                    id={"moriya"}
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
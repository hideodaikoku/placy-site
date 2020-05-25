import React from "react"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"

import positionStyle from "../styles/positions.module.scss";

import { useIntl } from "gatsby-plugin-intl";

const PositionsSection = () => {
    const data = useStaticQuery(graphql`
    query{
        position: file(relativePath: {eq: "3.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
    `)

    const intl = useIntl();


    return(
        <div>
            <div className={positionStyle.container}>
                <div className={positionStyle.left}>
                    <div className={positionStyle.imgContainer}>
                        <Img fluid={data.position.childImageSharp.fluid}/>
                    </div>
                </div>

                <div className={positionStyle.rightContent}>
                    <h1 className={positionStyle.sectionTitle}>
                        {intl.formatMessage({ id: "careers" })}
                    </h1>
                </div>
            </div>

            <div className={positionStyle.positionsContainer}>
                    <div className={positionStyle.row}>
                        <div className={positionStyle.position}>
                            <h3 className={positionStyle.title}>
                                {intl.formatMessage({ id: "positions.title" })}    
                            </h3>

                            <div className={positionStyle.para}>
                                <p className={positionStyle.desc}>{intl.formatMessage({ id: "positions.description" })}</p>
                            </div>
                            
                            <div className={positionStyle.para}>
                                <span className={positionStyle.box}>
                                    Job Description
                                </span>
                                <ul>
                                    <li>{intl.formatMessage({ id: "positions.jobDescription.text1" })}</li>
                                    <li>{intl.formatMessage({ id: "positions.jobDescription.text2" })}</li>
                                    <li>{intl.formatMessage({ id: "positions.jobDescription.text3" })}</li>
                                </ul>
                            </div>

                            <div className={positionStyle.para}>
                                <span className={positionStyle.box}>
                                {intl.formatMessage({ id: "positions.skillTitle" })}
                                </span>
                                <ul>
                                    <li>{intl.formatMessage({ id: "positions.skills.text1" })}</li>
                                    <li>{intl.formatMessage({ id: "positions.skills.text2" })}</li>
                                </ul>
                            </div>

                            <div className={positionStyle.para}>
                            <span className={positionStyle.box}>
                                    {intl.formatMessage({ id: "positions.otherSkillsTitle" })}
                                </span>
                                <ul>
                                    <li>{intl.formatMessage({ id: "positions.otherSkills.text1" })}</li>
                                    <li>{intl.formatMessage({ id: "positions.otherSkills.text2" })}</li>
                                    <li>{intl.formatMessage({ id: "positions.otherSkills.text3" })}</li>
                                </ul>
                            </div>
                            </div>
                            <div className={positionStyle.right}>
                            </div>
                    </div>
            </div>
        </div>
    )
}

export default PositionsSection;
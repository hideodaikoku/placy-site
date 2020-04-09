import React from "react"
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby"

import positionStyle from "../styles/positions.module.scss"; 
import positionData from "../data/positions.json";

const PositionsSection = () => {
    const data = useStaticQuery(graphql`
    query{
        position: file(relativePath: {eq: "3.jpg"}){
            childImageSharp{
                fluid(maxWidth: 1024){
                    ...GatsbyImageSharpFluid_tracedSVG
                }
            }
        }
    }
    `)
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
                        採用情報
                    </h1>
                </div>
            </div>

            <div className={positionStyle.positionsContainer}>
                {   
                    positionData.map( (position) =>(
                        <div className={positionStyle.row}>
                        <div key={position.id} className={positionStyle.position}>
                            <h3 className={positionStyle.title}>{position.title}</h3>

                            <div className={positionStyle.para}>
                                <p className={positionStyle.desc}>{position.description}</p>
                                {position.description_sub?
                                <ul>
                                    <li className={positionStyle.desc_sub}>{position.description_sub}</li>
                                </ul>
                                :null}
                            </div>
                            
                            <div className={positionStyle.para}>
                                <span className={positionStyle.box}>
                                    歓迎スキル
                                </span>
                                <ul>
                                {
                                position.skills.map((skill,id)=>(
                                    <div key={id}>
                                    <li>{skill.text}</li>
                                    <>
                                        {
                                            skill.sub?
                                            <p>{skill.sub}</p>
                                            :null
                                        }
                                    </>
                                    </div>
                                    )
                                )
                                }
                                </ul>
                            </div>

                            <div className={positionStyle.para}>
                                <span className={positionStyle.box}>
                                    雇用形態
                                </span>
                                <p className={positionStyle.desc}>
                                    {position.type}
                                </p>   
                            </div>

                            <div className={positionStyle.para}>
                                <span className={positionStyle.box}>
                                    選考フロー
                                </span>
                                <div className={positionStyle.flowContainer}>
                                    {
                                        position.flow.map((flowContent,id)=> (
                                            <div key={id} className={positionStyle.flow}>
                                                <p>{flowContent.title}</p>
                                                <p>{flowContent.text}</p>
                                            </div>
                                        )
                                        )
                                    }
                                </div>   
                            </div>
                            </div>
                            <div className={positionStyle.right}>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
        </div>
    )
}

export default PositionsSection;
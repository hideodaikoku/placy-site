import React from "react";
import Img from "gatsby-image";
import { useStaticQuery, graphql } from "gatsby";

<<<<<<< HEAD
import positionStyle from "../styles/positions.module.scss";
=======
import positionStyle from "../styles/positions.module.scss"; 
>>>>>>> parent of 958964e... internationalization implementation complete
import positionData from "../data/positions.json";

const PositionsSection = () => {
  const data = useStaticQuery(graphql`
    query {
      position: file(relativePath: { eq: "3.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1024) {
            ...GatsbyImageSharpFluid
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
                                    Job Description
                                </span>
                                <ul>
                                {
                                position.jobDescription.map((desc,id)=>(
                                    <div key={id}>
                                    <li>{desc.text}</li>
                                    <>
                                        {
                                            desc.sub?
                                            <p>{desc.sub}</p>
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
                                    {position.skillTitle}
                                </span>
                                <ul>
                                    {
                                    position.skills.map((skill,id)=>(
                                        <div key={id}>
                                            <li>{skill.text}</li>
                                        </div>
                                        )
                                    )
                                    }
                                </ul>
                            </div>

                            <div className={positionStyle.para}>
                            <span className={positionStyle.box}>
                                    {position.otherSkillsTitle}
                                </span>
                                <ul>
                                    {
                                    position.otherSkills.map((skill,id)=>(
                                        <div key={id}>
                                            <li>{skill.text}</li>
                                        </div>
                                        )
                                    )
                                    }
                                </ul>
                            </div>
                            </div>
                            <div className={positionStyle.right}>
                            </div>
                        </div>
                    )
                    )
                }
            </div>
            <div className={positionStyle.right}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PositionsSection;

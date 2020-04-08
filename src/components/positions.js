import React from "react"
import positionStyle from "../styles/positions.module.scss"; 
import positionData from "../data/positions.json";

const PositionsSection = () => {

    return(
        <div className={positionStyle.container}>
            <div>
                <div className={positionStyle.left}>
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
                                <div className={positionStyle.box}>
                                    歓迎スキル
                                </div>
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
                                <div className={positionStyle.box}>
                                    雇用形態
                                </div>
                                <p>
                                    {position.type}
                                </p>   
                            </div>

                            <div className={positionStyle.para}>
                                <div className={positionStyle.box}>
                                    選考フロー
                                </div>
                                <div className={positionStyle.flowContainer}>
                                    {
                                        position.flow.map((flowContent,id)=> (
                                            <div key={id}>
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
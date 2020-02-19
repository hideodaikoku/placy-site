import React from "react"
import contentStyle from "../styles/content.module.scss"; 

const WorkSection = () => {

    return(
        <div className={contentStyle.container}>
            <span className={contentStyle.square}></span>
            <h2 className={contentStyle.heading}>WORK WITH US</h2>
            <hr className={contentStyle.rule}/>
            <p className={contentStyle.textLeft}>
            Placyには、都市モデリング、空間データ解析、コンピュータサイエンスをバックグラウンドにもつメンバーが所属しています。現在、私たちと一緒に働いてくれる方を募集しております。ご連絡お待ちしております！
            </p>
        </div>
    )
}

export default WorkSection;
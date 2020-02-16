import React from "react";
import appStyles from "../styles/app.module.scss";

const AppSection  = () => {
    return(
        <div className={introStyles.introContainer}>
            <h2 className={introStyles.heading}>「空間を感取し意味を創る」</h2>
            <p className={introStyles.text}> Placyは空間データの解析を専門とする会社です
            <br/>目に見えない空間のパラメーターを明らかにすることで、 その根底にある価値を見出します。</p>
        </div>
    )
}

export default AppSection;
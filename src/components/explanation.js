import React from "react"
import explanationStyle from "../styles/explanation.module.scss"; 

const Explanation = () => {

    return(
        <div className={explanationStyle.container}>
            <p className={explanationStyle.text}>
            都市には「リズム」がある。<br/>
            長い時間をかけて蓄積された文化や物語が、<br/>
            その場所の「リズム」となって滲み出す。 <br/>
            <br/>
            それは都市の色気となり愛嬌となる。<br/>
            都市を探索していると、時折、まるで磁石の様に<br/>
            惹きつけられる場所に出会うことがあるが、それは、<br/>
            まさにその場所の「リズム」とあなたの「リズム」が<br/>
            調和している証である。<br/>
            <br/>
            ちょっぴり派手でキラキラした都市にも、<br/>
            ドロッとした人情味溢れる 都市にも、<br/>
            きっとあなたのリズムにぴったりあった場所が<br/>
            待っているはずである。<br/>
            <br/>
            レビューやランキングだけでは 汲み取ることが難しい、<br/>
            「あなたのリズムが流れる」場所 を見つけてみませんか?
            </p>
        </div>
    )
}

export default Explanation;


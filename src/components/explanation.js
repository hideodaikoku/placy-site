import React from "react"
import contentStyle from "../styles/content.module.scss"; 

const Explanation = () => {

    return(
        <div className={contentStyle.container}>
            <p className={contentStyle.text}>
            都市には「リズム」がある。
            長い時間をかけて蓄積された文化や物語が、
            その場所の「リズム」となって滲み出す。 
            <br/>
            それは都市の色気となり愛嬌となる。
            都市を探索していると、時折、まるで磁石の様に
            惹きつけられる場所に出会うことがあるが、それは、
            まさにその場所の「リズム」とあなたの「リズム」が
            調和している証である。
            <br/>
            ちょっぴり派手でキラキラした都市にも、
            ドロッとした人情味溢れる 都市にも、
            きっとあなたのリズムにぴったりあった場所が
            待っているはずである。
            <br/>
            レビューやランキングだけでは 汲み取ることが難しい、
            「あなたのリズムが流れる」場所 を見つけてみませんか?
            </p>
        </div>
    )
}

export default Explanation;


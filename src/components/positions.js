import React from "React"
import contentStyle from "../styles/content.module.scss"; 

const PositionsSection = () => {

    return(
        <div className={contentStyle.container}>
            <span className={contentStyle.square}></span>
            <h2 className={contentStyle.heading}>POSITIONS</h2>
            <hr className={contentStyle.rule}/>
            <div className={contentStyle.positionsContainer}>
                <div className={contentStyle.position}>
                    <h3 className={contentStyle.title}>バックエンドエンジニア</h3>
                    <p className={contentStyle.textLeft}>
                    Placyの空間データベースの構築、及び外部API化のお手伝いを行ってくれる方を募集しています<br/>
                    <br/>
                    ▼応募要件<br/>
                    バックエンドの設計・実装についての実務レベルの経験・スキル(学生インターンも可)<br/>
                    <br/>
                    ▼開発環境<br/>
                    <ul>
                        <li>Microsoft Azure</li>
                        <li>Python</li>
                        <li>PostgreSQL</li>
                    </ul>
                    </p>
                </div>
                <div className={contentStyle.position}>
                    <h3 className={contentStyle.title}>iOSアプリエンジニア</h3>
                    <p className={contentStyle.textLeft}>
                    Placyの地図アプリを一緒に開発してくれる方を募集しております。<br/>
                    <br/>
                    ▼応募要件<br/>
                    iOSアプリの設計・実装についての実務レベルの経験・スキル(学生インターンも可) <br/>
                    <br/>
                    ▼開発環境<br/>
                    <ul>
                        <li>Ruby</li>
                        <li>Rails</li>
                        <li>Rspec</li>
                        <li>Swift</li>
                    </ul>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default PositionsSection;
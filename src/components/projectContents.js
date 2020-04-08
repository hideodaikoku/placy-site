import React, {Component} from "react";
import projectContentstyles from "../styles/projectContent.module.scss";

class projectContents extends Component{
    render(){
        return(
            <div className={projectContentstyles.container}>
                <div className={projectContentstyles.row}>
                    <div className={projectContentstyles.leftContent}>
                        <div className={projectContentstyles.projectTop}>
                            <div className={projectContentstyles.cross}>
                            
                            </div>
                            <div　class={projectContentstyles.logo}>

                            </div>
                        </div>
                        <h1 className={projectContentstyles.title}>
                            Explore Yamanote-line<br/>
                            through music.
                        </h1>
                        <p className={projectContentstyles.desc}>
                            山手線の各駅には、それぞれ異なる歴史や風土があり、<br/>
                            そこに流れる音楽やリズムも多種多様 です。<br/>
                            Placy は各駅の特徴的な場所を選定し、そこに流れる音楽データを<br/>
                            解析することで、街を より愉しむための地図を作成しています。<br/>
                            都市のリズムに身を任せて、新しい街の一面を発見 してみませんか?<br/>
                        </p>
                    </div>
                    <div className={projectContentstyles.right}>
                        <div className={projectContentstyles.imgTop}>
                        </div>
                        <div className={projectContentstyles.imgBottom}>
                        </div>
                    </div>
                </div>
                <div className={projectContentstyles.row}>
                    <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                            <div className={projectContentstyles.cross}>
                            
                            </div>
                            <div　class={projectContentstyles.logo}>

                            </div>
                        </div>
                        <h1 className={projectContentstyles.title}>
                            Explore Yamanote-line<br/>
                            through music.
                        </h1>
                        <p className={projectContentstyles.desc}>
                            山手線の各駅には、それぞれ異なる歴史や風土があり、<br/>
                            そこに流れる音楽やリズムも多種多様 です。<br/>
                            Placy は各駅の特徴的な場所を選定し、そこに流れる音楽データを<br/>
                            解析することで、街を より愉しむための地図を作成しています。<br/>
                            都市のリズムに身を任せて、新しい街の一面を発見 してみませんか?<br/>
                        </p>
                    </div>
                    <div className={projectContentstyles.right}>
                        <div className={projectContentstyles.img}>
                        </div>
                    </div>
                </div>
                <div className={projectContentstyles.row}>
                    <div className={projectContentstyles.leftContent}>
                    <div className={projectContentstyles.projectTop}>
                            <div className={projectContentstyles.cross}>
                            
                            </div>
                            <div　class={projectContentstyles.logo}>

                            </div>
                            <div class={projectContentstyles.byLine}>
                                <p>sound artist</p>
                                <h1>Kenta Tanaka</h1>
                            </div>
                        </div>
                        <h1 className={projectContentstyles.title}>
                            Archive sound aspects of <br/>
                            city with vinyl postcards.
                        </h1>
                        <p className={projectContentstyles.desc}>
                            毎月のように急速に変わりゆく渋谷を、「音」の観点からアーカイブする <br/>
                            プロジェクトです。Placyのユーザーデータを元に「渋谷の音」を生成し、<br/>
                            それを絵葉書レコードに焼き付けます。<br/>
                            もちろん、この絵葉書はレコードプレイヤーで実際に聞いてもらうことができます。<br/>
                            (現在発注準備中です。少々お待ちくださいませ。)
                        </p>
                    </div>
                    <div className={projectContentstyles.right}>
                        <div className={projectContentstyles.imgLeft}>
                        </div>
                        <div className={projectContentstyles.imgRight}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default projectContents;
import React from "react"
import missionStyle from "../styles/mission.module.scss"; 

const MissionSection = () => {

    return(
        <div className={missionStyle.container}>
            <p className={missionStyle.text}>
            漠然と感じる都市のつまらなさ。<br/>
            どこに行っても既視感のある風景で、金太郎飴的な経験が提供される。<br/>
            小難しいことを言うようですが、私達はこの原因が、<br/>
            都市の空間レイヤーと意味レイヤーの乖離にあると考えています。<br/>
            どんなに素敵な空間が都市に存在しようとも、<br/>
            そこに蓄積された意味が情報として紐づいていないため、<br/>
            エンドユーザーとしては、極度に単純化された<br/>
            "レビュー"や"ランキング"で行き先を決めなければならない。<br/>
            <br/>
            そんなフラストレーションから私達は<br/>
            音楽で場所を探せる地図サービスを開発しています。<br/>
            ハックされ標準化してしまった指標ではなく、<br/>
            自分の感覚を元に場所を探せる体験を提供します。<br/>
            近い将来には、映画や本など検索ジャンルも増やし、<br/>
            何でも自分を表すものを入力すると場所に変換されて出力される、<br/>
            そんな未来を構築します。
            <br/>
            空間に意味を紐付け場所性(placy)を創る、<br/>
            それが私達のミッションです。
            </p>
        </div>
    )
}

export default MissionSection;
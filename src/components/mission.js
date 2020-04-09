import React from "react"
import missionStyle from "../styles/mission.module.scss"; 

const MissionSection = () => {

    return(
        <div className={missionStyle.container}>
            <p className={missionStyle.text}>
            漠然と感じる都市のつまらなさ。
            どこに行っても既視感のある風景で、金太郎飴的な経験が提供される。
            小難しいことを言うようですが、私達はこの原因が、
            都市の空間レイヤーと意味レイヤーの乖離にあると考えています。
            どんなに素敵な空間が都市に存在しようとも、
            そこに蓄積された意味が情報として紐づいていないため、
            エンドユーザーとしては、極度に単純化された
            "レビュー"や"ランキング"で行き先を決めなければならない。
            <br/>
            <br/>
            そんなフラストレーションから私達は
            音楽で場所を探せる地図サービスを開発しています。
            ハックされ標準化してしまった指標ではなく、
            自分の感覚を元に場所を探せる体験を提供します。
            近い将来には、映画や本など検索ジャンルも増やし、
            何でも自分を表すものを入力すると場所に変換されて出力される、
            そんな未来を構築します。
            <br/>
            <br/>
            空間に意味を紐付け場所性(placy)を創る、
            それが私達のミッションです。
            </p>
        </div>
    )
}

export default MissionSection;
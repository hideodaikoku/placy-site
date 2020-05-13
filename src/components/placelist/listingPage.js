import React, { createRef } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { getListing } from "./redux/actions";
import SEO from "../seo";
import style from "../../styles/placelistListingPage.module.scss";
import cardStyle from "../../styles/placelistListing.module.scss";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import shareLink from "../../images/shareLink.svg";
import checkSVG from "../../images/check.svg";

class ListingPage extends React.Component {
  componentWillMount() {
    this.props.getListing(this.props.listingId);
  }

  render() {
    const { listingId, listing, fetching, err } = this.props;
    const copyText = createRef(null);
    if (err) {
      return <div>{err.message}</div>;
    }
    if (fetching || !listing) {
      return <div>loading...</div>;
    }

    const {
      storeName,
      username,
      storeImageUrl,
      actionType,
      actionUrl,
      spotifyPlaylist,
      isOfficial,
      officialPartner,
      officialLogo,
      descriptionText,
    } = listing;

    const copyUrl = () => {
      if (typeof window === "undefined") return;
      copyText.current.value = `https://placy.city/placelist/${listingId}`;
      copyText.current.focus();
      copyText.current.setSelectionRange(0, copyText.current.value.length);
      document.execCommand("copy");
    };

    let actionTypeString = "";
    let actionTypeStyle = cardStyle.none;
    switch (actionType) {
      case "donation":
        actionTypeString = "donation";
        actionTypeStyle = cardStyle.donation;
        break;
      case "crowdfunding":
        actionTypeString = "crowdfunding";
        actionTypeStyle = cardStyle.crowdfunding;
        break;
      case "advance":
        actionTypeString = "advance ticket";
        actionTypeStyle = cardStyle.advance;
        break;
      case "online":
        actionTypeString = "online store";
        actionTypeStyle = cardStyle.online;
        break;
      case "other":
        actionTypeString = "other";
        actionTypeStyle = cardStyle.other;
        break;
      default:
        break;
    }

    return (
      <div>
        {" "}
        <SEO
          title={`${storeName}のプレイ(ス)リスト`}
          description={`@${username}さんが作った${storeName}のプレイ(ス)リストを聴きましょう。`}
          image="/image/placelist.jpg"
        />
        <Link to="/placelist" className={style.backButton}>
          <span className={style.backArrow}></span>
          <span>All Placelists</span>
        </Link>
        <div className={style.container}>
          <h1 className={style.title}>
            {storeName} | @{username}
          </h1>
          <div className={`${style.actionType} ${actionTypeStyle}`}>
            <a
              className={style.noDecorate}
              href={actionUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              {actionTypeString}
            </a>
          </div>
          <div className={style.mainContent}>
            <img
              src={storeImageUrl}
              className={style.storeImage}
              alt={storeName}
            />
            <div className={style.embedContainer}>
              <iframe
                title={spotifyPlaylist}
                src={`https://open.spotify.com/embed/playlist/${spotifyPlaylist}`}
                frameBorder="0"
                allowtransparency="true"
                allow="encrypted-media"
              ></iframe>
            </div>
          </div>

          <p className={style.description}>{descriptionText}</p>

          <div className={isOfficial ? style.artist : style.none}>
            <img
              src={officialLogo}
              alt="artist headshot"
              className={style.artistImage}
            />
            <h3 className={style.artistName}>
              {officialPartner}{" "}
              <img
                src={checkSVG}
                alt="official check icon"
                className={style.check}
              />
            </h3>
          </div>

          {isOfficial ? (
            <p className={style.artistDescription}>
              {`1978年東京生まれ。DJ/トラックメイカー/プロデューサー/ターンテーブリスト。
16歳のころにDJのキャリアをスタートさせる。1990年代後半に般若とRumiとともにヒップホップ・グループ、
般若で活動。グループ解散後、1999年にみずから設立したレーベル〈DIS-DEFENSE DISC〉よりミックステープ
『KAIKOO WITH SCRATCH 1999』をリリース。その後同レーベルからミックステープを数枚発表、自主レーベルながら総計30000本以上のセールスとなる。
2003年、MSCのデビュー・アルバム『Matador』に収められた「Matador Office」の制作を機にトラックメイカーとしての活動を開始。2005年、DJ BAKUと東京のインディペンデント・ミュージック・シーンをドキュメントした映画『KAIKOO/邂逅』のDVDが完成。2006年にはアルバム『SPINHEDDZ』(2008年にはSlipknotのDJ StarscreamやMarsVoltaのOmar率いるN2O RecordsよりUS盤もリリース)を、2008年にはダンス・ミュージックに本格的に挑戦したセカンド・アルバム 『DHARMA DANCE』を〈POPGROUP〉より発表、収録曲「AKBAH ATTACK」はBMX RIDER内野洋平によるPUMA CMやカンヌ国際映画祭出展作品にも使用されるなど話題となる。翌年、日本を代表する12人のラッパーをフィーチャーした『THE 12JAPS』をリリース。同年、DJ BAKUが発起人となり〈POPGROUP〉が主催する都市型音楽フェス〈KAIKOO POPWAVE FESTIVAL'10〉を東京晴海客船ターミナル特設ステージで開催。2日間で1万人以上が集まり、2005年からはじまった同イベントで過去最大規模となる。近年は、いとうせいこうや七尾旅人とのコラボレーション、渋谷慶一朗ややくしまるえつこ(相対性理論)の楽曲のリミックス、KYONO(ex.THE MAD CAPSULE MARKETS)とのユニットの結成、アニソン DJ、ブローステップやダブステップを取り入れたDJプレイなど、ジャンルを越境した活動をますます積極的に行っている。また、韓国、台湾、フランス、ロシア、オーストラリア、ニュージーランドなどにも招聘され、海外のDJやラッパー、バンドらとも交流し国際的な活動も展開している。
2012年 音源を担当したTURNTABLE RIDERがLONDON INTERNATIONAL AWARD「フィルム部門」で海外賞を受賞。
2013年 6月、5年ぶりとなるオリジナル・アルバム『JapOneEra』を発表。
2014年 未発表曲リリースのため自身のBandcampをスタート。　
そして2015年 OUTLOOK FESTIVAL JAPAN 2015 SOUND CLASHでは見事優勝！
新境地へ向かうため自ら新LABEL、その名も〈KAIKOO〉をスタート。
2015年 NEW ALBUM「NEO TOKYO RAVE STYLE」をRELEASE。
2018年KAIKOO Co., Ltd.を設立。


DJ BAKU OFFICIAL WEBSITE        http://djbakutokyo.com
DJ BAKU OFFICIAL FACEBOOK   http://www.facebook.com/djbaku.tokyo
DJ BAKU OFFICIAL BANDCAMP  http://djbaku.bandcamp.com/releases    
KAIKOO OFFICIAL WEBSITE         http://www.kaikoo.asia`}
            </p>
          ) : (
            ""
          )}

          <p className={style.shareText}>Share</p>
          <div className={style.shareIcons}>
            <a
              href={`https://twitter.com/intent/tweet?
            lang=ja;
            text=${username}さんによる${storeName}のプレイ(ス)リスト;
            via=placy_city;
            hashtags=placelist;
            url=https://placy.city/placelist/${listingId}
            `.replace(/\s/g, "")}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="share twitter" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://placy.city/placelist/${listingId}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={facebook} alt="share facebook" />
            </a>
            <button onClick={copyUrl}>
              <input
                className={style.invisible}
                ref={copyText}
                type="textarea"
              />
              <img src={shareLink} alt="copy link" />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    listing: state.listings.listing,
    err: state.listings.err,
    fetching: state.listings.gettingListing,
  };
};

const mapDispatchToProps = { getListing };

export default connect(mapStateToProps, mapDispatchToProps)(ListingPage);

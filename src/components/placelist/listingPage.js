import React, { createRef } from "react";
import Linkify from "linkifyjs/react";
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
import placeSVG from "../../images/icon_place.svg";
import phoneSVG from "../../images/icon_tell.svg";
import webSVG from "../../images/icon_web.svg";

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
      storeMapsUrl,
      officialPartner,
      officialLogo,
      officialDescription,
      descriptionText,
      storeAddress,
      storePhone,
      storeWeb,
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
            <a href={storeMapsUrl}>{storeName}</a> | @{username}
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

          <div className={style.storeDetails}>
            <div className={style.storeDetailsWrapper}>
              <p className={style.storeAddress}>
                <img src={placeSVG} alt="globe icon" />{" "}
                <a href={storeMapsUrl}>
                  {storeAddress.length > 30
                    ? `${storeAddress.substring(0, 30)}...`
                    : storeAddress}
                </a>
              </p>
              <p className={style.storePhone}>
                <img src={phoneSVG} alt="phone icon" /> {storePhone}
              </p>
              <p className={style.storeWeb}>
                <img src={webSVG} alt="web icon" />{" "}
                <a href={storeWeb}>{storeWeb}</a>
              </p>
            </div>
          </div>

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
              <Linkify>{officialDescription}</Linkify>
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

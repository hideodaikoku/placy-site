import React, { createRef } from "react";
import { Link } from "@reach/router";
import { connect } from "react-redux";
import { getListing } from "./redux/actions";
import style from "../../styles/placelistListingPage.module.scss";
import cardStyle from "../../styles/placelistListing.module.scss";
import twitter from "../../images/twitter.svg";
import facebook from "../../images/facebook.svg";
import shareLink from "../../images/shareLink.svg";
import SEO from "../seo";

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
      return <div> loading... </div>;
    }

    const {
      storeName,
      username,
      storeImageUrl,
      actionType,
      actionUrl,
      spotifyPlaylist,
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
            <a className={style.noDecorate} href={actionUrl} target="_blank">
              {actionTypeString}
            </a>
          </div>
          <div className={style.mainContent}>
            <img src={storeImageUrl} className={style.storeImage} />
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
            >
              <img src={twitter} alt="share twitter" />
            </a>
            <a
              href={`https://www.facebook.com/sharer/sharer.php?u=https://placy.city/placelist/${listingId}`}
              target="_blank"
            >
              <img src={facebook} alt="share facebook" />
            </a>
            <a onClick={copyUrl}>
              <input
                className={style.invisible}
                ref={copyText}
                type="textarea"
              />
              <img src={shareLink} alt="copy link" />
            </a>
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

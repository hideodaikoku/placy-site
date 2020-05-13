import React from "react";
import { Link } from "@reach/router";
import style from "../../styles/placelistListing.module.scss";
import checkSVG from "../../images/check.svg";

const ListingCard = (props) => {
  const {
    uuid,
    storeName,
    storeImageUrl,
    username,
    spotifyPlaylist,
    actionType,
    actionUrl,
    isOfficial,
    officialLogo,
  } = props.listing;

  let actionTypeString = "";
  let actionTypeStyle = style.none;
  switch (actionType) {
    case "donation":
      actionTypeString = "donation";
      actionTypeStyle = style.donation;
      break;
    case "crowdfunding":
      actionTypeString = "crowdfunding";
      actionTypeStyle = style.crowdfunding;
      break;
    case "advance":
      actionTypeString = "advance ticket";
      actionTypeStyle = style.advance;
      break;
    case "online":
      actionTypeString = "online store";
      actionTypeStyle = style.online;
      break;
    case "other":
      actionTypeString = "other";
      actionTypeStyle = style.other;
      break;
    default:
      break;
  }

  const placelistUrl = `${uuid}`;

  return (
    <div className={style.card}>
      <Link className={style.storeImageButton} to={placelistUrl}>
        <img className={style.storeImage} alt={storeName} src={storeImageUrl} />
      </Link>

      <div className={style.embedContainer}>
        <iframe
          title={spotifyPlaylist}
          src={`https://open.spotify.com/embed/playlist/${spotifyPlaylist}`}
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

      <h3 className={style.storeName}>
        <Link className={style.noDecorate} to={placelistUrl}>
          {storeName}
        </Link>
        <img
          className={isOfficial ? style.check : style.none}
          src={checkSVG}
          alt="Official Check"
        />
      </h3>
      <div className={style.descriptions}>
        <div className={style.descriptionLeft}>
          <h4 className={style.username}>
            <Link className={style.noDecorate} to={placelistUrl}>
              @{username}
            </Link>
          </h4>
          <div className={`${style.actionType} ${actionTypeStyle}`}>
            <a className={style.noDecorate} href={actionUrl}>
              {actionTypeString}
            </a>
          </div>
        </div>
        <div className={style.descriptionRight}>
          <img
            src={officialLogo}
            alt="artist headshot"
            className={isOfficial ? style.artistImage : style.none}
          />
        </div>
      </div>
    </div>
  );
};

export default ListingCard;

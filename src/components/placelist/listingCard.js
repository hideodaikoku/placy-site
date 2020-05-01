import React from "react";
import style from "../../styles/placelistListing.module.scss";

const ListingCard = (props) => {
  const {
    uuid,
    storeName,
    storeImageUrl,
    username,
    spotifyPlaylist,
    actionType,
    actionUrl,
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
      actionTypeString = "online ticket";
      actionTypeStyle = style.online;
      break;
    case "other":
      actionTypeString = "other";
      actionTypeStyle = style.other;
    default:
      break;
  }

  const storeUrl = `/${uuid}`;

  return (
    <div className={style.card}>
      <a className={style.storeImageButton} href={storeUrl}>
        <img className={style.storeImage} alt={storeName} src={storeImageUrl} />
      </a>

      <div className={style.embedContainer}>
        <iframe
          src={`https://open.spotify.com/embed/playlist/${spotifyPlaylist}`}
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

      <h3 className={style.storeName}>
        <a className={style.noDecorate} href={storeUrl}>
          {storeName}
        </a>
      </h3>
      <h4 className={style.username}>
        <a className={style.noDecorate} href={storeUrl}>
          {username}
        </a>
      </h4>
      <div className={`${style.actionType} ${actionTypeStyle}`}>
        <a className={style.noDecorate} href={actionUrl}>
          {actionTypeString}
        </a>
      </div>
    </div>
  );
};

export default ListingCard;

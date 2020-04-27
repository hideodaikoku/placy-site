import React from "react";
import style from "../../styles/placelistListing.module.scss";

const ListingCard = (props) => {
  return (
    <div className={style.card}>
      <a className={style.storeImageButton}>
        <img
          className={style.storeImage}
          src="/static/0dd8889101767fcbee2615c9508b7f2e/3c220/greece.jpg"
        />
      </a>

      <div className={style.embedContainer}>
        <iframe
          src="https://open.spotify.com/embed/album/1DFixLWuPkv3KT3TnV35m3"
          frameBorder="0"
          allowtransparency="true"
          allow="encrypted-media"
        ></iframe>
      </div>

      <h3 className={style.storeName}>
        <a className={style.noDecorate}>
          {!!props.storeName ? props.storeName : "Jazzy In"}
        </a>
      </h3>
      <h4 className={style.username}>
        <a className={style.noDecorate}>@hideo24</a>
      </h4>
      <div className={`${style.actionType} ${style.online}`}>
        <a className={style.noDecorate}>advance ticket</a>
      </div>
    </div>
  );
};

export default ListingCard;

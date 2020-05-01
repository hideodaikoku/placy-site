import React from "react";
import { connect } from "react-redux";
import style from "../../styles/placelistModalCard.module.scss";

import {
  addUsername,
  addStoreName,
  addStoreImage,
  addSpotifyLink,
  addActionType,
  addActionLink,
  addStoreMapsUrl,
} from "./redux/actions";

const ModalCard = ({
  // state
  page,
  username,
  storeImageName,
  storeMapsUrl,
  storeName,
  actionType,
  actionUrl,
  spotifyUrl,
  // actions
  addUsername,
  addStoreName,
  addStoreImage,
  addSpotifyLink,
  addActionType,
  addActionLink,
  addStoreMapsUrl,
}) => {
  const addUserModal = (
    <div>
      <p className={style.sectionTitle}>あなたのお名前</p>
      <p className={style.sectionDescription}>
        placelistの作成者として表示するお名前を教えて下さい。
      </p>
      <input
        className={style.inputField}
        type="input"
        key="username"
        placeholder="@sp4ghet"
        // https://github.com/redux-form/redux-form/issues/735#issuecomment-196368772
        value={username || ""}
        onChange={(e) => addUsername(e.target.value)}
      />
    </div>
  );

  const addStoreModal = (
    <div>
      <p className={style.sectionTitle}>お店の名前</p>
      <p className={style.sectionDescription}>
        てきとうなもんごんをかんがえていないのでてきとうなもじれつをならべます
      </p>
      <input
        key="storeName"
        className={style.inputField}
        type="input"
        value={storeName || ""}
        placeholder="The Miracle of Science Bar & Grill"
        onChange={(e) => addStoreName(e.target.value)}
      />
    </div>
  );

  const addSpotifyModal = (
    <div>
      <p className={style.sectionTitle}>Spotify Playlist リンク</p>
      <p className={style.sectionDescription}>
        そのお店の雰囲気を表すプレイリストを教えて下さい。
        普段から聞いているものでも良いですし，ご自分で作成頂いたものだとさらに素敵です。
      </p>
      <input
        className={style.inputField}
        type="input"
        key="spotifyUrl"
        placeholder="https://open.spotify.com/playlist/6b8ngrtdesYwGay2faDzWd"
        value={spotifyUrl || ""}
        onChange={(e) => addSpotifyLink(e.target.value)}
      />
    </div>
  );

  const addActionTypeModal = (
    <div>
      <p className={style.sectionTitle}>お店の取り組み</p>
      <p className={style.sectionDescription}>
        前売り券やテイクアウトなど，お店が外出自粛要請に対する取り組みをされていれば教えて下さい。
      </p>
      <select
        className={style.dropdown}
        form="newListing"
        key="actionType"
        onBlur={(e) => addActionType(e.target.value)}
        defaultValue={actionType || "default"}
      >
        <option disabled value="default">
          取り組みの種類
        </option>
        <option value="takeout">Takeout</option>
        <option value="donation">Donation</option>
        <option value="advance">Advance Ticket</option>
        <option value="crowdfunding">Crowdfunding</option>
        <option value="online">Online Ticket</option>
      </select>
    </div>
  );

  const addActionLinkModal = (
    <div>
      <p className={style.sectionTitle}>お店の取り組み リンク</p>
      <p className={style.sectionDescription}>
        お店の取り組みがわかるページリンクがあれば教えて下さい。
      </p>
      <input
        className={style.inputField}
        type="input"
        key="actionUrl"
        placeholder="http://www.miracleofscience.us/index.php"
        value={actionUrl || ""}
        onChange={(e) => addActionLink(e.target.value)}
      />
    </div>
  );

  const addStoreImageModal = (
    <div>
      <p className={style.sectionTitle}>お店のイメージ画</p>
      <p className={style.sectionDescription}>
        とくべつなもんごんはないのでてきとうなもじれつを羅列します，画像をアップロードしてください。
      </p>
      <input
        className={style.fileSelector}
        type="file"
        key="storeImage"
        accept=".png,.jpg,.jpeg,.png,image/*"
        onChange={(e) => addStoreImage(e.target.files)}
      />
    </div>
  );

  const addStoreMapsModal = (
    <div>
      <p className={style.sectionTitle}>お店のGoogle Maps リンク</p>
      <p className={style.sectionDescription}>
        お店のGoogle Mapsリンクを貼ってください。
      </p>
      <input
        className={style.inputField}
        placeholder="https://g.page/miracleofscience?share"
        value={storeMapsUrl || ""}
        onChange={(e) => addStoreMapsUrl(e.target.value)}
      ></input>
    </div>
  );

  let body = <div></div>;
  switch (page) {
    case 1:
      body = addUserModal;
      break;
    case 2:
      body = addStoreModal;
      break;
    case 3:
      body = addStoreImageModal;
      break;
    case 4:
      body = addActionTypeModal;
      break;
    case 5:
      body = addActionLinkModal;
      break;
    case 6:
      body = addSpotifyModal;
      break;
    case 7:
      body = addStoreMapsModal;
      break;
    default:
      body = <div></div>;
      break;
  }

  return <div className={style.card}>{body}</div>;
};

const mapStateToProps = (state) => ({
  page: state.modal.page,
  username: state.newListing.username,
  storeName: state.newListing.storeName,
  actionType: state.newListing.actionType,
  actionUrl: state.newListing.actionUrl,
  spotifyUrl: state.newListing.spotifyUrl,
  storeImageName: state.newListing.storeImageName,
  storeMapsUrl: state.newListing.storeMapsUrl,
});

const mapDispatchToProps = {
  addUsername,
  addStoreName,
  addSpotifyLink,
  addStoreImage,
  addActionType,
  addActionLink,
  addStoreMapsUrl,
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard);

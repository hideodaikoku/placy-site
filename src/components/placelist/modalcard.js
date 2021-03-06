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
  addDescription,
  addStoreMapsUrl,
} from "./redux/actions";

const AddUserModalRedux = connect(
  (s) => ({
    err: s.newListing.err,
    username: s.newListing.username,
  }),
  {
    addUsername,
  }
)((props) => {
  const { addUsername, err, username, forwardedref } = props;
  return (
    <div>
      <p className={style.sectionTitle}>あなたのお名前</p>
      <p className={style.sectionDescription}>
        placelistの作成者として表示するお名前を教えて下さい。
      </p>
      <input
        ref={forwardedref}
        required
        className={style.inputField}
        type="input"
        value={username || ""}
        key="username"
        placeholder="sp4ghet"
        // https://github.com/redux-form/redux-form/issues/735#issuecomment-196368772
        onChange={(e) => addUsername(e.target.value)}
      />

      <p className={`${style.invalid} ${!!err ? "" : style.invisible}`}>
        {err}
      </p>
    </div>
  );
});

// https://github.com/reduxjs/react-redux/issues/914
const AddUserModal = React.forwardRef((props, ref) => (
  <AddUserModalRedux forwardedref={ref} props={props} />
));

const AddStoreModalRedux = connect(
  (s) => ({
    err: s.newListing.err,
    storeName: s.newListing.storeName,
  }),
  {
    addStoreName,
  }
)((props) => {
  const { addStoreName, err, storeName, forwardedref } = props;
  return (
    <div>
      <p className={style.sectionTitle}>お店の名前</p>
      <p className={style.sectionDescription}>
        おなたの思い入れのあるお店はどこですか。
      </p>
      <input
        ref={forwardedref}
        required
        key="storeName"
        className={style.inputField}
        type="input"
        value={storeName || ""}
        placeholder="The Miracle of Science Bar & Grill"
        onChange={(e) => addStoreName(e.target.value)}
      />

      <p className={`${style.invalid} ${!!err ? "" : style.invisible}`}>
        {err}
      </p>
    </div>
  );
});

const AddStoreModal = React.forwardRef((props, ref) => (
  <AddStoreModalRedux forwardedref={ref} props={props} />
));

const AddSpotifyModalRedux = connect(
  (state) => ({
    err: state.newListing.err,
    spotifyUrl: state.newListing.spotifyUrl,
  }),
  {
    addSpotifyLink,
  }
)((props) => {
  const { err, addSpotifyLink, spotifyUrl, forwardedref } = props;
  return (
    <div>
      <p className={style.sectionTitle}>Spotify Playlist リンク</p>
      <p className={style.sectionDescription}>
        そのお店の雰囲気を表すプレイリストを教えて下さい。
        普段から聞いているものでも良いですし，ご自分で作成頂いたものだとさらに素敵です。
      </p>
      <input
        ref={forwardedref}
        required
        className={style.inputField}
        type="url"
        key="spotifyUrl"
        placeholder="https://open.spotify.com/playlist/6b8ngrtdesYwGay2faDzWd"
        value={spotifyUrl || ""}
        onChange={(e) => addSpotifyLink(e.target.value)}
      />
      <p className={`${style.invalid} ${!!err ? "" : style.invisible}`}>
        {err}
      </p>
    </div>
  );
});

const AddSpotifyModal = React.forwardRef((props, ref) => (
  <AddSpotifyModalRedux forwardedref={ref} props={props} />
));

const AddActionTypeModalRedux = connect(
  (state) => ({
    err: state.newListing.err,
    actionType: state.newListing.actionType,
  }),
  {
    addActionType,
  }
)((props) => {
  const { err, addActionType, actionType, forwardedref } = props;
  return (
    <div>
      <p className={style.sectionTitle}>お店の取り組み</p>
      <p className={style.sectionDescription}>
        前売り券やテイクアウトなど，お店が外出自粛要請に対する取り組みをされていれば教えて下さい。
      </p>
      <select
        ref={forwardedref}
        required
        className={style.dropdown}
        form="newListing"
        key="actionType"
        onBlur={(e) => addActionType(e.target.value)}
        defaultValue={actionType || "default"}
      >
        <option disabled value="default" className={style.defaultSelect}>
          取り組みの種類を選択
        </option>
        <option value="advance">Advance Ticket</option>
        <option value="crowdfunding">Crowdfunding</option>
        <option value="online">Online Store</option>
        <option value="other">Other (e.g. takeout, donation)</option>
        <option value="none">None</option>
      </select>
      <p className={`${style.invalid} ${!!err ? "" : style.invisible}`}>
        {err}
      </p>
    </div>
  );
});

const AddActionTypeModal = React.forwardRef((props, ref) => (
  <AddActionTypeModalRedux forwardedref={ref} props={props} />
));

const AddActionLinkModalRedux = connect(
  (state) => ({
    actionUrl: state.newListing.actionUrl,
    err: state.newListing.err,
  }),
  {
    addActionLink,
  }
)((props) => {
  const { err, addActionLink, actionUrl, forwardedref } = props;
  return (
    <div>
      <p className={style.sectionTitle}>お店の取り組み リンク</p>
      <p className={style.sectionDescription}>
        お店の取り組みがわかるページリンクがあれば教えて下さい。
      </p>
      <input
        ref={forwardedref}
        className={style.inputField}
        type="url"
        key="actionUrl"
        value={actionUrl || ""}
        placeholder="http://www.miracleofscience.us/index.php"
        onChange={(e) => addActionLink(e.target.value)}
      />
      <p className={`${style.invalid} ${!!err ? "" : style.invisible}`}>
        {err}
      </p>
    </div>
  );
});

const AddActionLinkModal = React.forwardRef((props, ref) => (
  <AddActionLinkModalRedux forwardedref={ref} props={props} />
));

const AddDescriptionModalRedux = connect(
  (state) => ({
    descriptionText: state.newListing.descriptionText,
    err: state.newListing.err,
  }),
  { addDescription }
)((props) => {
  const { descriptionText, addDescription, forwardedref, err } = props;
  return (
    <div>
      <p className={style.sectionTitle}>お店へのメッセージ</p>
      <p className={style.sectionDescription}>
        お店での思い出や憧れなど、メッセージを伝えてください。
      </p>
      <textarea
        ref={forwardedref}
        className={style.textArea}
        value={descriptionText || ""}
        rows={4}
        cols={50}
        placeholder={`初めてボストンに行ったときに深夜何も食べるものがなく迷い込んだハンバーガー屋さんの近くに引っ越し，結局住んでいたときに毎日のように通った素晴らしいお店です。メニューが黒板に周期表として書かれているのが特徴的でMITのオタクに愛されるために存在するような素晴らしい空間でした。またいつかハラペーニョ入のRonny Burgerを食べることを切望しています。`}
        onChange={(e) => addDescription(e.target.value)}
      />
      <p className={`${style.invalid} ${!!err ? "" : style.invisible}`}>
        {err}
      </p>
    </div>
  );
});

const AddDescriptionModal = React.forwardRef((props, ref) => (
  <AddDescriptionModalRedux props={props} forwardedref={ref} />
));

//
const AddStoreImageModalRedux = connect(
  (state) => ({
    err: state.newListing.err,
    storeImageName: state.newListing.storeImageName,
    storeImage: state.newListing.storeImage,
    uploadingImage: state.newListing.sendingImage,
  }),
  { addStoreImage }
)((props) => {
  const {
    err,
    storeImageName,
    uploadingImage,
    addStoreImage,
    forwardedref,
  } = props;
  return (
    <div>
      <p className={style.sectionTitle}>お店のイメージ画</p>
      <p className={style.sectionDescription}>
        お店の写真をアップロードしてください。
      </p>
      <input
        ref={forwardedref}
        required
        className={style.invisible}
        type="file"
        key="storeImage"
        name="storeImage"
        id="storeImage"
        accept=".png,.jpg,.jpeg,.png,image/*"
        onChange={(e) => addStoreImage(e.target.files)}
      />
      <label htmlFor="storeImage" className={style.fileSelector}>
        画像を選択
      </label>

      <p className={`${!!err ? style.invalid : style.invisible}`}>{err}</p>
      <p className={storeImageName ? style.imageName : style.invisible}>
        {uploadingImage ? "アップロード中..." : storeImageName}
      </p>
    </div>
  );
});

const AddStoreImageModal = React.forwardRef((props, ref) => (
  <AddStoreImageModalRedux forwardedref={ref} props={props} />
));

const AddStoreMapsModalRedux = connect(
  (state) => ({
    err: state.newListing.err,
    storeMapsUrl: state.newListing.storeMapsUrl,
  }),
  { addStoreMapsUrl }
)((props) => {
  const { err, addStoreMapsUrl, storeMapsUrl, forwardedref } = props;
  return (
    <div>
      <p className={style.sectionTitle}>お店のGoogle Maps リンク</p>
      <p className={style.sectionDescription}>
        お店のGoogle Mapsリンクを貼ってください。
      </p>
      <input
        ref={forwardedref}
        required
        type="url"
        className={style.inputField}
        value={storeMapsUrl || ""}
        placeholder="https://goo.gl/maps/EUeJhQK5gcsJGarK7"
        onChange={(e) => {
          addStoreMapsUrl(e.target.value);
        }}
      ></input>
      <p className={`${style.invalid} ${!!err ? "" : style.invisible}`}>
        {err}
      </p>
    </div>
  );
});

const AddStoreMapsModal = React.forwardRef((props, ref) => (
  <AddStoreMapsModalRedux forwardedref={ref} props={props} />
));

class ModalCard extends React.Component {
  inputElement = React.createRef();
  componentDidMount() {
    if (!!this.inputElement.current) {
      this.inputElement.current.focus();
    }
  }

  componentDidUpdate(prevProps) {
    if (!!this.inputElement.current) {
      const inputField = this.inputElement.current;
      inputField.focus();
    }
  }

  render() {
    const {
      // state
      page,
    } = this.props;

    let body = <div></div>;
    switch (page) {
      case 1:
        body = <AddUserModal ref={this.inputElement}></AddUserModal>;
        break;
      case 2:
        body = <AddStoreModal ref={this.inputElement}></AddStoreModal>;
        break;
      case 3:
        body = (
          <AddStoreImageModal ref={this.inputElement}></AddStoreImageModal>
        );
        break;
      case 4:
        body = (
          <AddActionTypeModal ref={this.inputElement}></AddActionTypeModal>
        );
        break;
      case 5:
        body = (
          <AddActionLinkModal ref={this.inputElement}></AddActionLinkModal>
        );
        break;
      case 6:
        body = <AddSpotifyModal ref={this.inputElement}></AddSpotifyModal>;
        break;
      case 7:
        body = <AddStoreMapsModal ref={this.inputElement}></AddStoreMapsModal>;
        break;
      case 8:
        body = (
          <AddDescriptionModal ref={this.inputElement}></AddDescriptionModal>
        );
        break;

      default:
        body = <div></div>;
        break;
    }

    return <div className={style.card}>{body}</div>;
  }
}

const mapStateToProps = (state) => ({
  page: state.modal.page,
  open: state.modal.open,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ModalCard);

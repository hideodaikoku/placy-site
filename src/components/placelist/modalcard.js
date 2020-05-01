import React, { useRef } from "react";
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

class ModalCard extends React.Component {
  inputElement = React.createRef();
  componentDidMount() {
    if (!!this.inputElement.current) {
      this.inputElement.current.focus();
    }
  }

  componentDidUpdate(prevProps) {
    if (!!this.inputElement.current) {
      this.inputElement.current.focus();
    }
  }

  render() {
    const {
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
    } = this.props;

    const AddUserModal = React.forwardRef((props, ref) => {
      return (
        <div>
          <p className={style.sectionTitle}>あなたのお名前</p>
          <p className={style.sectionDescription}>
            placelistの作成者として表示するお名前を教えて下さい。
          </p>
          <input
            ref={ref}
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
    });

    const AddStoreModal = React.forwardRef((props, ref) => {
      return (
        <div>
          <p className={style.sectionTitle}>お店の名前</p>
          <p className={style.sectionDescription}>
            てきとうなもんごんをかんがえていないのでてきとうなもじれつをならべます
          </p>
          <input
            ref={ref}
            key="storeName"
            className={style.inputField}
            type="input"
            value={storeName || ""}
            placeholder="The Miracle of Science Bar & Grill"
            onChange={(e) => addStoreName(e.target.value)}
          />
        </div>
      );
    });

    const AddSpotifyModal = React.forwardRef((props, ref) => {
      return (
        <div>
          <p className={style.sectionTitle}>Spotify Playlist リンク</p>
          <p className={style.sectionDescription}>
            そのお店の雰囲気を表すプレイリストを教えて下さい。
            普段から聞いているものでも良いですし，ご自分で作成頂いたものだとさらに素敵です。
          </p>
          <input
            ref={ref}
            className={style.inputField}
            type="input"
            key="spotifyUrl"
            placeholder="https://open.spotify.com/playlist/6b8ngrtdesYwGay2faDzWd"
            value={spotifyUrl || ""}
            onChange={(e) => addSpotifyLink(e.target.value)}
          />
        </div>
      );
    });

    const AddActionTypeModal = React.forwardRef((props, ref) => {
      return (
        <div>
          <p className={style.sectionTitle}>お店の取り組み</p>
          <p className={style.sectionDescription}>
            前売り券やテイクアウトなど，お店が外出自粛要請に対する取り組みをされていれば教えて下さい。
          </p>
          <select
            ref={ref}
            className={style.dropdown}
            form="newListing"
            key="actionType"
            onBlur={(e) => addActionType(e.target.value)}
            defaultValue={actionType || "default"}
          >
            <option disabled value="default">
              取り組みの種類
            </option>
            <option value="advance">Advance Ticket</option>
            <option value="crowdfunding">Crowdfunding</option>
            <option value="online">Online Ticket</option>
            <option value="other">Other (e.g. takeout, donation)</option>
          </select>
        </div>
      );
    });

    const AddActionLinkModal = React.forwardRef((props, ref) => {
      return (
        <div>
          <p className={style.sectionTitle}>お店の取り組み リンク</p>
          <p className={style.sectionDescription}>
            お店の取り組みがわかるページリンクがあれば教えて下さい。
          </p>
          <input
            ref={ref}
            className={style.inputField}
            type="input"
            key="actionUrl"
            placeholder="http://www.miracleofscience.us/index.php"
            value={actionUrl || ""}
            onChange={(e) => addActionLink(e.target.value)}
          />
        </div>
      );
    });

    const AddStoreImageModal = React.forwardRef((props, ref) => {
      return (
        <div>
          <p className={style.sectionTitle}>お店のイメージ画</p>
          <p className={style.sectionDescription}>
            とくべつなもんごんはないのでてきとうなもじれつを羅列します，画像をアップロードしてください。
          </p>
          <input
            ref={ref}
            className={style.fileSelector}
            type="file"
            key="storeImage"
            accept=".png,.jpg,.jpeg,.png,image/*"
            onChange={(e) => addStoreImage(e.target.files)}
          />
        </div>
      );
    });

    const AddStoreMapsModal = React.forwardRef((props, ref) => {
      return (
        <div>
          <p className={style.sectionTitle}>お店のGoogle Maps リンク</p>
          <p className={style.sectionDescription}>
            お店のGoogle Mapsリンクを貼ってください。
          </p>
          <input
            ref={ref}
            className={style.inputField}
            placeholder="https://g.page/miracleofscience?share"
            value={storeMapsUrl || ""}
            onChange={(e) => addStoreMapsUrl(e.target.value)}
          ></input>
        </div>
      );
    });

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
      default:
        body = <div></div>;
        break;
    }

    return <div className={style.card}>{body}</div>;
  }
}

const mapStateToProps = (state) => ({
  page: state.modal.page,
  username: state.newListing.username,
  storeName: state.newListing.storeName,
  actionType: state.newListing.actionType,
  actionUrl: state.newListing.actionUrl,
  spotifyUrl: state.newListing.spotifyUrl,
  storeImageName: state.newListing.storeImageName,
  storeMapsUrl: state.newListing.storeMapsUrl,
  open: state.modal.open,
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

import {
  ADD_USERNAME,
  ADD_STORENAME,
  ADD_SPOTIFY_LINK,
  ADD_ACTION_LINK,
  ADD_ACTION_TYPE,
  ADD_STORE_IMAGE,
  BEGIN_SUBMIT_LISTING,
  OK_SUBMIT_LISTING,
  ERR_SUBMIT_LISTING,
  BEGIN_SEND_STORE_IMAGE,
  OK_SEND_STORE_IMAGE,
  ERR_SEND_STORE_IMAGE,
  ADD_STORE_MAPS_URL,
  SET_PAGE,
} from "../actionTypes";

const initialState = {
  username: null,
  storeName: null,
  storeImage: null,
  storeImageName: null,
  storeMapsUrl: null,
  spotifyUrl: null,
  actionType: null,
  actionUrl: null,
  storeImageUrl: null,
  sendingImage: false,
  errSendingImage: null,
  sendingListing: false,
  errSendingForm: null,
  err: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERNAME:
      if (!action.payload.username) {
        return { ...state, username: "", err: "名前は空ではいけません" };
      }
      if (action.payload.username[0] === "@") {
        return { ...state, username: "", err: "名前は@で始まってはいけません" };
      }
      return {
        ...state,
        username: action.payload.username.replace(/\s/g, ""),
        err: null,
      };
    case ADD_STORENAME:
      if (!action.payload.storeName) {
        return { ...state, storeName: "", err: "お店の名前は空ではいけません" };
      }
      return {
        ...state,
        storeName: action.payload.storeName.replace(/\s/g, " "),
        err: null,
      };
    case ADD_SPOTIFY_LINK:
      const pattern = /.*open.spotify.com\/playlist\/([a-z,A-Z,0-9]+).*/;
      const spotifyPlaylistMatch = action.payload.spotifyUrl.match(pattern);
      if (!spotifyPlaylistMatch) {
        return {
          ...state,
          err: "入力されたプレイリストのURLが正しいか確認してください",
          spotifyUrl: action.payload.spotifyUrl,
        };
      }
      return { ...state, spotifyUrl: action.payload.spotifyUrl, err: null };
    case ADD_STORE_IMAGE:
      if (!action.payload.filename) {
        return { ...state, err: "お店の画像をアップロードしてください" };
      }
      return {
        ...state,
        storeImage: action.payload.image,
        storeImageName: action.payload.filename,
        err: null,
      };
    case ADD_STORE_MAPS_URL:
      if (!action.payload.mapsUrl) {
        return {
          ...state,
          err: "空でないURLを入力してください",
          storeMapsUrl: "",
        };
      }
      return { ...state, storeMapsUrl: action.payload.mapsUrl };
    case ADD_ACTION_TYPE:
      if (
        action.payload.actionType === "default" ||
        !action.payload.actionType
      ) {
        return {
          ...state,
          err:
            "取り組みの種類を選んでください (無ければ none と選択してください)",
        };
      }
      return { ...state, actionType: action.payload.actionType, err: null };
    case ADD_ACTION_LINK:
      if (state.actionType !== "none" && !action.payload.actionUrl) {
        return {
          ...state,
          err: "取り組みがある場合は取り組みのわかるリンクを紹介してください",
          actionUrl: "",
        };
      }
      return { ...state, actionUrl: action.payload.actionUrl, err: null };
    case BEGIN_SEND_STORE_IMAGE:
      return { ...state, sendingImage: true };
    case OK_SEND_STORE_IMAGE:
      return {
        ...state,
        storeImageUrl: action.payload.imageUrl,
        sendingImage: false,
      };
    case ERR_SEND_STORE_IMAGE:
      return {
        ...state,
        sendingImage: false,
        errSendingImage: action.payload.err,
        err: "画像のアップロードに失敗しました",
      };
    case BEGIN_SUBMIT_LISTING:
      return { ...state, sendingListing: true };
    case OK_SUBMIT_LISTING:
      return { ...initialState, sendingListing: false };
    case ERR_SUBMIT_LISTING:
      return {
        ...state,
        sendingListing: false,
        errSendingForm: action.payload.err,
        err: "投稿に失敗しました",
      };
    default:
      return state;
  }
};

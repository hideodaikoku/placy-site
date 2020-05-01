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
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_USERNAME:
      return { ...state, username: action.payload.username };
    case ADD_STORENAME:
      return { ...state, storeName: action.payload.storeName };
    case ADD_SPOTIFY_LINK:
      return { ...state, spotifyUrl: action.payload.spotifyUrl };
    case ADD_STORE_IMAGE:
      return {
        ...state,
        storeImage: action.payload.image,
        storeImageName: action.payload.filename,
      };
    case ADD_STORE_MAPS_URL:
      return { ...state, storeMapsUrl: action.payload.mapsUrl };
    case ADD_ACTION_TYPE:
      return { ...state, actionType: action.payload.actionType };
    case ADD_ACTION_LINK:
      return { ...state, actionUrl: action.payload.actionUrl };
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
      };
    default:
      return state;
  }
};

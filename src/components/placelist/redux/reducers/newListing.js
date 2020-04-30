import {
  ADD_USERNAME,
  ADD_STORENAME,
  ADD_SPOTIFY_LINK,
  ADD_ACTION_LINK,
  ADD_ACTION_TYPE,
  ADD_STORE_IMAGE,
  SUBMIT_LISTING,
} from "../actionTypes";

const initialState = {
  username: "",
  storeName: "",
  storeImage: null,
  storeImageName: "",
  spotifyUrl: "",
  actionType: "",
  actionUrl: "",
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
        storeImageName: action.payload.fileName,
      };
    case ADD_ACTION_TYPE:
      return { ...state, actionType: action.payload.actionType };
    case ADD_ACTION_LINK:
      return { ...state, actionUrl: action.payload.actionUrl };
    case SUBMIT_LISTING:
      return { ...state };
  }
  return state;
};

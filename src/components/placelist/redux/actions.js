import {
  OPEN_MODAL,
  ADD_USERNAME,
  ADD_STORENAME,
  ADD_SPOTIFY_LINK,
  ADD_STORE_IMAGE,
  ADD_ACTION_TYPE,
  ADD_ACTION_LINK,
  CLOSE_MODAL,
  SUBMIT_LISTING,
  SET_PAGE,
} from "./actionTypes";

export const openModal = (scrollY) => ({
  type: OPEN_MODAL,
  payload: { scrollY },
});

export const closeModal = () => ({
  type: CLOSE_MODAL,
  payload: {},
});

export const addUsername = (username) => ({
  type: ADD_USERNAME,
  payload: {
    username,
  },
});

export const addStoreName = (storeName) => ({
  type: ADD_STORENAME,
  payload: {
    storeName,
  },
});

export const addSpotifyLink = (spotifyUrl) => ({
  type: ADD_SPOTIFY_LINK,
  payload: {
    spotifyUrl,
  },
});

export const addStoreImage = (fileList) => {
  let filename = "";
  const file = fileList[0];
  if (!file) {
    console.log("no file");
  } else {
    filename = file.name;
  }

  return {
    type: ADD_STORE_IMAGE,
    payload: {
      filename,
      image: file,
    },
  };
};

export const addActionType = (actionType) => ({
  type: ADD_ACTION_TYPE,
  payload: {
    actionType,
  },
});

export const addActionLink = (actionUrl) => ({
  type: ADD_ACTION_LINK,
  payload: {
    actionUrl,
  },
});

export const setPage = (toPage) => ({
  type: SET_PAGE,
  payload: {
    nextPage: toPage,
  },
});

export const submitListing = () => ({
  type: SUBMIT_LISTING,
  payload: {},
});

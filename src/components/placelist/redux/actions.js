import {
  OPEN_MODAL,
  ADD_USERNAME,
  ADD_STORENAME,
  ADD_SPOTIFY_LINK,
  ADD_STORE_IMAGE,
  ADD_ACTION_TYPE,
  ADD_ACTION_LINK,
  CLOSE_MODAL,
} from "./actionTypes";

export const openModal = () => ({
  type: OPEN_MODAL,
  payload: {},
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

export const addStoreImage = (file, image) => ({
  type: ADD_STORE_IMAGE,
  payload: {
    filename: file,
    image,
  },
});

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

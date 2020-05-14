import {
  OPEN_MODAL,
  ADD_USERNAME,
  ADD_STORENAME,
  ADD_SPOTIFY_LINK,
  ADD_STORE_IMAGE,
  ADD_ACTION_TYPE,
  ADD_ACTION_LINK,
  CLOSE_MODAL,
  BEGIN_SUBMIT_LISTING,
  OK_SUBMIT_LISTING,
  ERR_SUBMIT_LISTING,
  SET_PAGE,
  ADD_STORE_MAPS_URL,
  BEGIN_SEND_STORE_IMAGE,
  OK_SEND_STORE_IMAGE,
  ERR_SEND_STORE_IMAGE,
  BEGIN_GET_LISTINGS,
  OK_GET_LISTINGS,
  ERR_GET_LISTINGS,
  BEGIN_GET_LISTING,
  OK_GET_LISTING,
  ERR_GET_LISTING,
  ADD_DESCRIPTION_TEXT,
} from "./actionTypes";
import FormData from "form-data";

const apiUrl =
  process.env.NODE_ENV === "development" ? "http://localhost:8080/api" : "/api";

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

export const addStoreMapsUrl = (mapsUrl) => ({
  type: ADD_STORE_MAPS_URL,
  payload: {
    mapsUrl,
  },
});

export const addStoreImage = (fileList) => {
  return (dispatch, _, axios) => {
    let filename = "";
    const file = fileList[0];
    if (!file) {
      return;
    }
    filename = file.name;
    dispatch({
      type: ADD_STORE_IMAGE,
      payload: {
        filename,
        image: file,
      },
    });

    let data = new FormData();
    data.append("storeImage", file, file.filename);

    dispatch({
      type: BEGIN_SEND_STORE_IMAGE,
      payload: {},
    });

    axios
      .post(`${apiUrl}/listing/image`, data, {
        headers: {
          accept: "application/json",
          "Accept-Language": "en-US,en;q=0.8",
          "Content-Type": `multipart/form-data; boundary=${data._boundary}`,
        },
      })
      .then((res) => {
        dispatch({
          type: OK_SEND_STORE_IMAGE,
          payload: {
            imageUrl: res.data.cdnUrl,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ERR_SEND_STORE_IMAGE,
          payload: {
            err,
          },
        });
      });
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

export const addDescription = (descriptionText) => ({
  type: ADD_DESCRIPTION_TEXT,
  payload: {
    descriptionText,
  },
});

export const setPage = (toPage) => {
  return (dispatch, getState) => {
    const state = getState();
    const listing = state.newListing;
    switch (state.modal.page) {
      // username
      case 1:
        if (!!listing.username) break;
        dispatch({
          type: ADD_USERNAME,
          payload: {
            username: "",
          },
        });
        return;
      case 2:
        if (!!listing.storeName) break;
        dispatch({ type: ADD_STORENAME, payload: { storeName: "" } });
        return;
      case 3:
        if (!!listing.storeImageName) break;
        dispatch({ type: ADD_STORE_IMAGE, payload: {} });
        return;
      case 4:
        if (!!listing.actionType) break;
        dispatch({ type: ADD_ACTION_TYPE, payload: { actionType: "default" } });
        return;
      case 5:
        if (!!listing.actionUrl || listing.actionType === "none") break;
        dispatch({ type: ADD_ACTION_LINK, payload: { actionUrl: "" } });
        return;
      case 6:
        if (!!listing.spotifyUrl && listing.err === null) break;
        dispatch({
          type: ADD_SPOTIFY_LINK,
          payload: { spotifyUrl: listing.spotifyUrl || "" },
        });
        return;
      case 7:
        if (!!listing.storeMapsUrl && listing.err === null) break;
        console.error(listing.storeMapsUrl);
        console.error(listing.err);
        dispatch({
          type: ADD_STORE_MAPS_URL,
          payload: { mapsUrl: listing.storeMapsUrl || "" },
        });
        return;
      default:
        break;
    }
    if (state.modal.page >= 8) {
      return;
    }

    dispatch({
      type: SET_PAGE,
      payload: {
        nextPage: toPage,
      },
    });
  };
};

export const submitListing = () => {
  return (dispatch, getState, axios) => {
    // check valid state

    // begin request
    dispatch({
      type: BEGIN_SUBMIT_LISTING,
      payload: {},
    });

    const state = getState().newListing;

    const requestParams = {
      storeName: state.storeName,
      spotifyPlaylist: state.spotifyUrl,
      actionType: state.actionType,
      actionUrl: state.actionUrl,
      storeMapsUrl: state.storeMapsUrl,
      userName: state.username,
      storeImageUrl: state.storeImageUrl,
      descriptionText: state.descriptionText,
    };
    // process request
    axios
      .post(`${apiUrl}/listing`, requestParams)
      .then((res) => {
        console.log(res.data);
        dispatch({
          type: OK_SUBMIT_LISTING,
          payload: {},
        });
        dispatch({
          type: CLOSE_MODAL,
          payload: {},
        });
      })
      .catch((err) => {
        dispatch({
          type: ERR_SUBMIT_LISTING,
          payload: { err },
        });
      });
  };
};

export const getListings = () => {
  return (dispatch, _, axios) => {
    dispatch({
      type: BEGIN_GET_LISTINGS,
      payload: {},
    });

    axios
      .get(`${apiUrl}/listings`)
      .then((res) => {
        dispatch({
          type: OK_GET_LISTINGS,
          payload: {
            listings: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({ type: ERR_GET_LISTINGS, payload: { err } });
      });
  };
};

export const getListing = (listingId) => {
  return (dispatch, getState, axios) => {
    const listings = getState().listings;
    let listing = listings.listings.find((x) => x.uuid === listingId);
    if (!!listing) {
      dispatch({
        type: OK_GET_LISTING,
        payload: {
          listing: listing,
        },
      });
      return;
    }

    dispatch({ type: BEGIN_GET_LISTING, payload: {} });

    axios
      .get(`${apiUrl}/listing/${listingId}`)
      .then((res) => {
        dispatch({
          type: OK_GET_LISTING,
          payload: {
            listing: res.data,
          },
        });
      })
      .catch((err) => {
        dispatch({
          type: ERR_GET_LISTING,
          payload: {
            err: err,
          },
        });
      });
  };
};

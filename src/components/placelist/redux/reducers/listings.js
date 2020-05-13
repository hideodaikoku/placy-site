import he from "he";
import {
  BEGIN_GET_LISTINGS,
  OK_GET_LISTINGS,
  ERR_GET_LISTINGS,
  BEGIN_GET_LISTING,
  OK_GET_LISTING,
  ERR_GET_LISTING,
} from "../actionTypes";

const initialState = {
  listings: [],
  gettingListings: false,
  err: null,
  listing: null,
  gettingListing: false,
};

const reshapeApiListing = (listing) => {
  const decodeOpts = { isAttributeValue: true };
  return {
    uuid: listing.uuid,
    storeName: he.unescape(listing.storeName, decodeOpts),
    storeImageUrl: listing.storeImageUrl,
    storeMapsUrl: listing.storeMapsUrl,
    username: he.unescape(listing.userName),
    actionType: listing.actionType,
    actionUrl: listing.actionUrl,
    spotifyPlaylist: listing.spotifyPlaylist,
    postDatetime: listing.postDatetime,
    isOfficial: listing.isOfficial,
    officialLogo: listing.officialLogo,
    officialPartner: listing.officialPartner,
    descriptionText: he.unescape(listing.descriptionText),
  };
};

export default (state = initialState, action) => {
  switch (action.type) {
    case BEGIN_GET_LISTINGS:
      return { ...state, gettingListings: true };
    case OK_GET_LISTINGS:
      return {
        ...state,
        gettingListings: false,
        listings: action.payload.listings.map(reshapeApiListing),
      };
    case ERR_GET_LISTINGS:
      return { ...state, gettingListings: false, err: action.payload.err };
    case BEGIN_GET_LISTING:
      return { ...state, gettingListing: true };
    case OK_GET_LISTING:
      return {
        ...state,
        gettingListing: false,
        listing: state.gettingListing
          ? reshapeApiListing(action.payload.listing)
          : action.payload.listing,
      };
    case ERR_GET_LISTING:
      return { ...state, gettingListing: false, err: action.payload.err };
    default:
      return { ...state };
  }
};

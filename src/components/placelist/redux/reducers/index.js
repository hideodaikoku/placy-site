import { combineReducers } from "redux";
import newListing from "./newListing";
import modal from "./modal";
import listings from "./listings";

export default combineReducers({ newListing, modal, listings });

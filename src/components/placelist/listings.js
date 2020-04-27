import React from "react";
import ListingCard from "./listingCard";
import style from "../../styles/placelistListings.module.scss";

const Listings = () => {
  return (
    <div className={style.container}>
      <div className={style.listings}>
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
        <ListingCard />
      </div>
    </div>
  );
};

export default Listings;

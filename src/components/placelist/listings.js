import React from "react";
import ListingCard from "./listingCard";
import style from "../../styles/placelistListings.module.scss";
import { connect } from "react-redux";
import { getListings } from "./redux/actions";

class Listings extends React.Component {
  constructor(props) {
    super(props);

    const { getListings } = props;
    this.getListings = getListings.bind(this);
  }

  componentDidMount() {
    this.getListings();
  }

  render() {
    const { listings } = this.props;
    return (
      <div className={style.container}>
        <div className={style.listings}>
          {listings.map((x, i) => (
            <ListingCard key={i} listing={x} />
          ))}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, listings: state.listings.listings };
};

const mapDispatchToProps = {
  getListings,
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);

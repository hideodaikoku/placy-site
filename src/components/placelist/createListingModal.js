import React from "react";
import { connect } from "react-redux";
import style from "../../styles/placelistModal.module.scss";
import { closeModal } from "./redux/actions";

const CreateListingModal = ({ open, closeModal }) => {
  const containerClass = !!open ? style.showContainer : style.hideContainer;

  // sp4ghet:
  // https://css-tricks.com/prevent-page-scrolling-when-a-modal-is-open/
  // this seems to collapse when using a class extending React.Component
  // something to do with virtual DOM lifecycle stuff
  // this is also a hacky way of doing things which ignores the virtual DOM cycle
  // and probably has render time implications so if there's a better way please change
  const isSSR = typeof window === "undefined";
  if (isSSR) {
    return <div className={containerClass}></div>;
  }
  if (open) {
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
  } else {
    const scrollY = document.body.style.top;
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(scrollY || "0") * -1);
  }

  return (
    <div className={containerClass} onClick={closeModal}>
      <div
        className={style.modalWindow}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <div>
          <button onClick={closeModal}>x</button>
        </div>
        <div className={style.contents}>Create Listing</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return { ...ownProps, open: state.modal.open };
};
const mapDispatchToProps = { closeModal };

export default connect(mapStateToProps, mapDispatchToProps)(CreateListingModal);

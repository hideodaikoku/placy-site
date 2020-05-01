import React, { useRef } from "react";
import { connect } from "react-redux";
import style from "../../styles/placelistModal.module.scss";
import { closeModal, setPage, submitListing } from "./redux/actions";
import ModalCard from "./modalcard";

const Modal = ({
  open,
  closeModal,
  page,
  setPage,
  scrollY,
  submitListing,
  sendingListing,
}) => {
  const containerClass = !!open ? style.showContainer : style.hideContainer;

  const modalContainer = useRef(null);
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
    document.body.style.top = `-${scrollY}px`;
    document.body.style.position = "fixed";
  } else {
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(-scrollY || "0") * -1);
  }

  return (
    <div
      ref={modalContainer}
      className={containerClass}
      onClick={(e) => {
        if (e.target === modalContainer.current) {
          closeModal();
        }
      }}
      onKeyDown={(e) => {
        if (e.keyCode === 27 /* escape */) {
          closeModal();
        }
      }}
      role="dialog"
      ariaLabel="close modal"
    >
      <div className={style.modalWindow}>
        <button
          className={style.modalCloseButton}
          onClick={closeModal}
        ></button>
        <div
          className={style.contents}
          onKeyDown={(e) => {
            const enter = 13;
            if (e.keyCode === enter) {
              setPage(page + 1);
            }
          }}
        >
          <h2 className={style.modalTitle}>
            Create <br /> Place List
          </h2>
          <ModalCard />
          {page === 7 ? (
            <button
              className={style.submit}
              onClick={submitListing}
              disabled={sendingListing}
            >
              {sendingListing ? "Sending..." : "Submit"}
            </button>
          ) : (
            <button
              className={style.arrowBox}
              onClick={() => {
                setPage(page + 1);
              }}
            >
              <span className={style.bar}></span>
              <span className={style.head}></span>
            </button>
          )}

          <div className={style.pageIndicator}>
            <span>{page}</span> / <span>7</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    ...ownProps,
    open: state.modal.open,
    page: state.modal.page,
    scrollY: state.modal.scrollY,
    sendingListing: state.newListing.sendingListing,
  };
};
const mapDispatchToProps = { closeModal, setPage, submitListing };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

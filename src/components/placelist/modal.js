import React, { useRef } from "react";
import { connect } from "react-redux";
import style from "../../styles/placelistModal.module.scss";
import { closeModal, setPage } from "./redux/actions";
import ModalCard from "./modalcard";

const Modal = ({ open, closeModal, page, setPage, scrollY }) => {
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
    >
      <div className={style.modalWindow}>
        <div className={style.contents}>
          <div className={style.modalCloseButton} onClick={closeModal}></div>
          <h2 className={style.modalTitle}>
            Create <br /> Place List
          </h2>
          <ModalCard />
          <div
            className={style.arrowBox}
            onClick={() => {
              setPage(page + 1);
            }}
          >
            <span className={style.bar}></span>
            <span className={style.head}></span>
          </div>
          <div className={style.pageIndicator}>
            <span>{page}</span> / <span>6</span>
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
  };
};
const mapDispatchToProps = { closeModal, setPage };

export default connect(mapStateToProps, mapDispatchToProps)(Modal);

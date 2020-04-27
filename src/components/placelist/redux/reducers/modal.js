import { OPEN_MODAL, CLOSE_MODAL } from "../actionTypes";

const initialState = {
  open: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, open: true };
    case CLOSE_MODAL:
      return { ...state, open: false };
    default:
      return state;
  }
};

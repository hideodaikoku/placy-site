import { OPEN_MODAL, CLOSE_MODAL, SET_PAGE } from "../actionTypes";

const initialState = {
  open: false,
  page: 1,
  scrollY: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case OPEN_MODAL:
      return { ...state, open: true, scrollY: action.payload.scrollY };
    case CLOSE_MODAL:
      return { ...state, open: false, page: 1 };
    case SET_PAGE:
      return { ...state, page: action.payload.nextPage };
    default:
      return state;
  }
};

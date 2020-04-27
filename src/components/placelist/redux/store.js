import { createStore } from "redux";

import rootReducer from "./reducers";

let devtools = undefined;
if (process.env.NODE_ENV === "development") {
  devtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
}

export default createStore(rootReducer, devtools);

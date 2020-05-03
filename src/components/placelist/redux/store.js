import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers";
import axios from "axios";

let devtools = undefined;
if (process.env.NODE_ENV === "development") {
  devtools =
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__();
}

const reduxThunk = applyMiddleware(thunk.withExtraArgument(axios));

const middlewares = !!devtools ? compose(reduxThunk, devtools) : reduxThunk;

export default createStore(rootReducer, middlewares);

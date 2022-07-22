import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import ContextWrapper from "./ContextWrapper.js";
import { Provider } from "react-redux";
import { configureStore, applyMiddleware, compose, createStore } from "redux";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducers/spotify.js";
import thunk from "redux-thunk";
import reducers from "./reducers";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <StateProvider initialState={initialState} reducer={reducer}>
      <ContextWrapper />
    </StateProvider>
  </Provider>,
  document.getElementById("root")
);

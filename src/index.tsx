import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

import { Provider } from "react-redux";
import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const loadState = () => {
  try {
    const savedState = localStorage.getItem("swift");
    return JSON.parse(savedState as string) || undefined;
  } catch (e) {
    return undefined;
  }
};

const saveSate = (state: any) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("swift", serializedState);
  } catch (e) {}
};

const initialState = loadState();
const store = createStore(reducers, initialState, composeWithDevTools());
store.subscribe(() => {
  saveSate(store.getState());
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

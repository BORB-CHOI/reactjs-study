import React from "react";
import ReactDOM from "react-dom";
// import { ContextProvider } from "./context";
// 리덕스 적용하기
import { Provider } from "react-redux";
import { createStore } from "redux";
import rootReducer from "./store";
import App from "./App";
import "./reset.css";

const store = createStore(rootReducer);

console.log(store.getState());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

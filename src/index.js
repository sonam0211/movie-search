import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Provider } from "react-redux";
import reducer from "./data/reducers/indexReducer";
import { createStore, applyMiddleware } from "redux";
import { Router } from "react-router-dom";
import thunk from "redux-thunk";

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
     
    <Provider store={store}>
      <App />
    </Provider>
 
  </React.StrictMode>
  ,
  document.getElementById("root")
);


import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ShoppingCartComponent from "./compontent/ShoppingCartComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Header from "./Header.js";
import rootReducer from "./reducers/reducer";
const store = createStore(rootReducer, applyMiddleware(thunk));

const routing = (
  <Provider store={store}>
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={App} />
        <Route path="/shoppingCart" component={ShoppingCartComponent} />
      </div>
    </Router>
  </Provider>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

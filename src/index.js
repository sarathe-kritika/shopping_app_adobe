import React from "react";
import ReactDOM from "react-dom";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import ShoppingCartComponent from "./compontent/ShoppingCartComponent";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FormControl, Form } from "react-bootstrap";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

const routing = (
  <Router>
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-blue">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <img
                src={process.env.PUBLIC_URL + "star.png"}
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Link>
          </li>
          <li className="nav-item">
            <Form inline className="search">
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <span>
                <Link className="nav-link" to="/">
                  <FontAwesomeIcon icon={faSearch} />
                </Link>
              </span>
            </Form>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/shoppingCart">
              <div>
                {localStorage.getItem("coun") > 0 && (
                  <div class="itemCount">{localStorage.getItem("coun")}</div>
                )}
                <FontAwesomeIcon icon={faShoppingCart} />
                Cart
              </div>
            </Link>
          </li>
        </ul>
      </nav>
      <Route exact path="/" component={App} />
      <Route path="/shoppingCart" component={ShoppingCartComponent} />
    </div>
  </Router>
);
ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

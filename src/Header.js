import React, { Component } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./index.css";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    selItem: state,
  };
};
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  itemToAdd = () => {};

  render() {
    if (this.props.selItem !== undefined) {
    }
    return (
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
            <li className="nav-item shopping-cart">
              <Link className="nav-link" to="/shoppingCart">
                <div>
                  <div class="itemCount">{this.props.selItem.length}</div>
                  <FontAwesomeIcon icon={faShoppingCart} />
                  Cart
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default connect(mapStateToProps)(Header);

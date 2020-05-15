import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ShoppingListComponent from "./compontent/ShoppingListComponent";
import "./App.css";
import FilterCompontent from "./compontent/FilterCompontent";
import { connect } from "react-redux";
const mapStateToProps = (state) => {
  return {
    selItem: state.selectedItem,
  };
};
class App extends Component {
  constructor(props) {
    super(props);
    console.log(JSON.stringify(props));
  }
  render() {
    return <ShoppingListComponent props />;
  }
}

export default connect(mapStateToProps)(App);

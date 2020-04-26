import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ShoppingListComponent from "./compontent/ShoppingListComponent";
import "./App.css";
import FilterCompontent from "./compontent/FilterCompontent";

class App extends Component {
  render() {
    return <ShoppingListComponent />;
  }
}

export default App;

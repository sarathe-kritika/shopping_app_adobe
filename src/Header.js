import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./index.css";
import SearchComponent from "./compontent/SearchComponent";
import ShoppingCartComponent from "./compontent/ShoppingCartComponent";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // CartOpen: 0,
    };
  }
  itemToAdd = () => {
    //this.state.CartOpen++;
  };
  // data = this.state.CartOpen++;
  render() {
    return (
      <div>
        {" "}
        <Navbar expand="lg" className="bg-blue">
          <Navbar.Brand href="#home">
            <img
              src={process.env.PUBLIC_URL + "star.png"}
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>

          <SearchComponent></SearchComponent>
          <Nav className="mr-auto">
            <Nav.Link href="#home">
              <ShoppingCartComponent
                isCartOpen={this.greeting}
                itemToAdd={this.itemToAdd}
              />
            </Nav.Link>
          </Nav>
        </Navbar>
      </div>
    );
  }
}

export default Header;

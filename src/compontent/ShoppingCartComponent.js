import React, { Component } from "react";
import "../index.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
const items = JSON.parse(localStorage.getItem("itemToAdded"));

class ShoppingCartComponent extends Component {
  remove(removedItem) {
    items.forEach(function (item, index) {
      if (item.name === removedItem.name) {
        window.alert("Item Removing....." + item.name);
      }
    });
    /* if (flag) {
      localStorage.setItem("itemToAdded", items);
    }*/
  }
  render() {
    //  var items = JSON.parse(localStorage.getItem("itemToAdded"));
    return (
      <Container>
        <Row>
          <Col xs={8}>
            {items.map((ingredient, index) => (
              <Card border="primary" style={{ width: "40rem" }}>
                <Card.Header>{ingredient.name}</Card.Header>
                <Card.Body>
                  <Card.Img
                    style={{ width: "5rem", height: "3rem" }}
                    variant="bottom"
                    src={ingredient.image}
                    //src={process.env.PUBLIC_URL + "ipphone.jpg"}
                  />
                  {ingredient.price.actual}
                  <span class="lineThrough"> {ingredient.price.display}</span>
                  <b class="discount"> {ingredient.discount} % off</b>
                  <Button
                    variant="primary"
                    onClick={() => this.remove(ingredient)}
                  >
                    Remove
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col xs={4} border="primary" style={{ width: "20rem" }}>
            <Card>
              <Card.Header> PRICE DETAILS</Card.Header>
              <Card.Body>
                {items.map((ingredient, index) => (
                  <span>
                    {" "}
                    Price : {ingredient.price.actual} <br /> Discount :
                    {ingredient.price.display - ingredient.price.actual}
                    <br />
                    <b class="mt-2">
                      Total Payable : {ingredient.price.actual}
                    </b>
                  </span>
                ))}
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShoppingCartComponent;

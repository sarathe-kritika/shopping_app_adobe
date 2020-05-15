import React, { Component } from "react";
import "../index.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import { removeItem } from "../actions/itemActionForRemove";
import { addItem } from "../actions/itemAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRupeeSign,
  faMinusSquare,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";

const mapStateToProps = (state) => {
  return {
    selItem: state,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    remove(item) {
      let count = 0;
      let count2 = 0;
      for (let it of this.selItem) {
        // count2 = 0;
        if (it.name !== item.name) {
          count2++;
        }

        count++;
      }
      count = count - count2;
      if (count === 1) {
        dispatch(removeItem(item));
      } else {
        let count1 = 0;
        for (let i = 1; i <= count; i++) {
          count1++;
          dispatch(removeItem(item));
          if (count1 === count) {
            for (let ij = 1; ij <= count1 - 1; ij++) {
              dispatch(addItem(item));
            }
          }
        }
      }

      //dispatch(addItem(item));
    },
    addSameItem(item) {
      dispatch(addItem(item));
    },
  };
};

class ShoppingCartComponent extends Component {
  constructor(props) {
    super(props);
    console.log("YOOOOOOOOOOOOOOOO:: cart" + JSON.stringify(props));
  }
  /*remove(removedItem) {
    for (let item of this.props.selItem) {
      if (item.name === removedItem.name) {
        let indexpp = this.props.selItem.indexOf(item);
        this.props.selItem.splice(indexpp, 1);
      }
    }
    /* if (flag) {
      localStorage.setItem("itemToAdded", items);
    }
  }*/
  getItemCount(removedItem) {
    let itemCount = 0;
    for (let item of this.props.selItem) {
      if (item.name !== removedItem.name) {
        itemCount = 1;
      } else {
        itemCount++;
      }
    }
    return itemCount;
  }

  total() {
    let tp = 0;

    for (let item of this.props.selItem) {
      tp = tp + item.price.actual;
    }
    return tp;
  }
  render() {
    //  var items = JSON.parse(localStorage.getItem("itemToAdded"));
    return (
      <Container>
        <Row>
          <Col xs={8}>
            {this.props.selItem.map((ingredient, index) => (
              <Card border="primary" style={{ width: "40rem" }}>
                <Card.Header>{ingredient.name}</Card.Header>
                <Card.Body>
                  <Card.Img
                    style={{ width: "5rem", height: "3rem" }}
                    variant="bottom"
                    src={ingredient.image}
                    //src={process.env.PUBLIC_URL + "ipphone.jpg"}
                  />
                  <span>
                    <FontAwesomeIcon icon={faRupeeSign} />
                  </span>
                  {ingredient.price.actual}
                  <span class="lineThrough"> {ingredient.price.display}</span>
                  <b class="discount"> {ingredient.discount} % off</b>

                  <Button
                    className="remove"
                    onClick={() => this.props.remove(ingredient)}
                  >
                    <FontAwesomeIcon icon={faMinusSquare} />
                  </Button>
                  <Button
                    className="remove"
                    onClick={() => this.props.addSameItem(ingredient)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </Button>
                </Card.Body>
              </Card>
            ))}
          </Col>
          <Col xs={4} border="primary" style={{ width: "20rem" }}>
            <Card>
              <Card.Header> PRICE DETAILS</Card.Header>
              <Card.Body>
                {this.props.selItem.map((ingredient, index) => (
                  <span>
                    {" "}
                    Price : {ingredient.price.actual} <br /> Discount :
                    {ingredient.price.display - ingredient.price.actual}
                    <br />
                  </span>
                ))}
              </Card.Body>
              <div className="total">
                <b class="mt-2">Total Payable : {this.total()}</b>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShoppingCartComponent);

import React, { Component } from "react";
import { Card, CardColumns, Button } from "react-bootstrap";
import "../index.css";
class ShoppingListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coun: 0,
      itemAdded: [],
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(item) {
    this.state.itemAdded.push(item);
    var myObjectJson = JSON.stringify(this.state.itemAdded);
    // this.state.itemAdded.push(item);
    localStorage.setItem("coun", this.state.itemAdded.length);
    localStorage.setItem("itemToAdded", myObjectJson);
    // this.setState((state) => ({ coun: coun++ }));
  }

  render() {
    var items = [
      {
        name: "Samsung Series 4",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 13999,
          display: 22500,
        },
        discount: 37,
      },
      {
        name: "Samsung Super 6",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 35999,
          display: 66900,
        },
        discount: 46,
      },
      {
        name: "Samsung The Frame",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 84999,
          display: 133900,
        },
        discount: 36,
      },
      {
        name: "Thomson B9 Pro",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 9999,
          display: 16999,
        },
        discount: 41,
      },
      {
        name: "LG Ultra HD",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 39990,
          display: 79990,
        },
        discount: 50,
      },
      {
        name: "Vu Ready LED TV",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 7999,
          display: 17e3,
        },
        discount: 52,
      },
      {
        name: "Koryo Android TV",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 55999,
          display: 199990,
        },
        discount: 71,
      },
      {
        name: "Micromax LED Smart",
        image:
          "https://rukminim1.flixcart.com/image/670/600/allinone-desktop/d/n/q/apple-imac-21-5-inch-4k-retina-core-i5-3-1ghz-8gb-1tb-intel-iris-original-imaeh5h83fuzbksz.jpeg?q=90",
        price: {
          actual: 9999,
          display: 27990,
        },
        discount: 64,
      },
    ];

    return (
      <CardColumns>
        {items.map((ingredient, index) => (
          <Card>
            <Card.Img
              variant="bottom"
              src={ingredient.image}
              style={{ width: "10rem", height: "5rem" }}
              //src={process.env.PUBLIC_URL + "ipphone.jpg"}
            />
            <Card.Body key={index}>
              <Card.Title>{ingredient.name}</Card.Title>
              <Card.Text>
                {ingredient.price.actual}{" "}
                <span class="lineThrough"> {ingredient.price.display}</span>
                <b class="discount"> {ingredient.discount} % off</b>
              </Card.Text>
              <Button
                variant="warning"
                onClick={() => this.handleClick(ingredient)}
              >
                Add to cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </CardColumns>
    );
  }
}

export default ShoppingListComponent;

import React, { Component } from "react";
import { Container, Card, CardColumns, Button } from "react-bootstrap";
import { FormControl, Row, Col, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import "react-input-range/lib/css/index.css";
import InputRange from "react-input-range";
import "../index.css";

class ShoppingListComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      coun: 0,
      itemAdded: [],
      search: "",
      value: { min: 10, max: 5000 },
      isFilterOn: false,
    };

    this.handleClick = this.handleClick.bind(this);
  }
  updateSearch(event) {
    console.log("Yoo");
    this.setState({ search: event.target.value.substr(0, 20) });
  }
  applyFilter() {
    //  window.alert("Apply Filter");
    this.setState((state) => ({ isFilterOn: true }));
    // this.state.isFilterOn = true;

    // this.setState({ value: event.target.value });
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
    let fC = items.filter((item) => {
      return (
        item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1
      );
      /*if (this.state.isFilterOn) {
        //window.alert("ON");
        if (item.price.actual >= this.state.value.max != -1) return item;
      } else {
        return (
          item.name.toLowerCase().indexOf(this.state.search.toLowerCase()) != -1
        );
      }*/
    });
    return (
      <Container>
        <Row>
          <Col className="inputfilter" id="title_message" xs={1}>
            <InputRange
              maxValue={100000}
              minValue={10}
              value={this.state.value}
              onChange={(value) => this.setState({ value })}
            />
            <div className="button_filter">
              <Button variant="primary" onClick={() => this.applyFilter()}>
                Apply
              </Button>
            </div>
          </Col>

          <Col xs={11}>
            <Form inline className="search">
              <FormControl
                type="text"
                value={this.state.search}
                onChange={this.updateSearch.bind(this)}
                placeholder="Search"
                className="mr-sm-2"
              />
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </Form>
            <CardColumns>
              {fC.map((ingredient, index) => (
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
                      <span class="lineThrough">
                        {" "}
                        {ingredient.price.display}
                      </span>
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
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ShoppingListComponent;

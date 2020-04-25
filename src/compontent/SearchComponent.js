import React from "react";
import { FormControl, Form } from "react-bootstrap";
import "../index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const SearchComponent = () => {
  return (
    <Form inline className="search">
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <span>
        <FontAwesomeIcon icon={faSearch} />
      </span>
    </Form>
  );
};

export default SearchComponent;

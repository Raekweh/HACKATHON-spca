import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import "../styles/SmallSearchBar.css";

function SmallSearchBar() {
  return (
    <div className="SmallSearchBar">
      <div className="container h-100 w-25 mt-5">
        <InputGroup>
          <FormControl
            id="form-control"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="basic-addon2"
          />
          <Button variant="outline-secondary" id="button-addon2">
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
}

export default SmallSearchBar;

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles/styles.css";

const TopNav = () => {
  const [manufacturer, setManufacturer] = useState("");
  const [priceRange, setPriceRange] = useState("");
  const [province, setProvince] = useState("");

  const handleSubmit = async () => {
    if (manufacturer === "" || priceRange === "" || province === "") {
      alert("Choose an option you doos -_-");
    } else if (manufacturer === "Choose..." || priceRange === "Choose..." || province === "Choose...") {
      alert("You think you're funny -_-")
    } else {
      alert(`Manufacturer: ${ manufacturer } \n Price Range: ${ priceRange } \n Province: ${ province }`)
    }
  }

  return(
    <div id="TopNav"className="bg-dark text-white">
      <Container className="container-fluid text-monospace">
        <Form>
          <Row className="justify-content-center">
            <Col className="mt-3 col-md-auto col-12 col-sm-4">
              <Form.Group controlId="topnav-form-manufacturer">
                <Form.Label className="font-weight-bold">Manufacturer</Form.Label>
                <Form.Control as="select">
                  <option>Audi</option>
                  <option>BMW</option>
                  <option>Chevrolet</option>
                  <option>Ford</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="mt-3 col-md-auto col-12 col-sm-4">
              <Form.Group controlId="topnav-form-price">
                <Form.Label className="font-weight-bold">Price Range</Form.Label>
                <Form.Control as="select">
                  <option>50k to 100k</option>
                  <option>100k to 200k</option>
                  <option>200k to 500k</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="mt-3 col-md-auto col-12 col-sm-4">
              <Form.Group controlId="topnav-form-province">
                <Form.Label className="font-weight-bold">Province</Form.Label>
                <Form.Control as="select">
                  <option>Gauteng</option>
                  <option>KwaZulu Natal</option>
                  <option>Western Cape</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="text-center pt-5 col-md-auto col-12 col-sm-4 mb-3">
              <Button className="font-weight-bold" variant="primary" type="submit">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

const App = () => {
  return(
    <div id="App">
      <TopNav />
    </div>
  )
}

export default App;

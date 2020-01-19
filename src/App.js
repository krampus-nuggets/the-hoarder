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
        <Form
          onSubmit={
            async e => {
              e.preventDefault();
              handleSubmit();
            }
          }
        >
          <Row className="justify-content-center">
            <Col className="mt-3 col-md-auto col-12 col-sm-4">
              <Form.Group controlId="topnav-form-manufacturer">
                <Form.Label className="font-weight-bold">Manufacturer</Form.Label>
                <Form.Control as="select" value={ manufacturer } onChange={ e => setManufacturer( e.target.value ) }>
                  <option>Choose...</option>
                  <option value="audi">Audi</option>
                  <option value="bmw">BMW</option>
                  <option value="chevrolet">Chevrolet</option>
                  <option value="ford">Ford</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="mt-3 col-md-auto col-12 col-sm-4">
              <Form.Group controlId="topnav-form-price">
                <Form.Label className="font-weight-bold">Price Range</Form.Label>
                <Form.Control
                  as="select"
                  value={ priceRange }
                  onChange={ e => setPriceRange( e.target.value ) }
                >
                  <option>Choose...</option>
                  <option value="price=50001-to-100000">50k to 100k</option>
                  <option value="price=100001-to-200000">100k to 200k</option>
                  <option value="price=200001-to-500000">200k to 500k</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="mt-3 col-md-auto col-12 col-sm-4">
              <Form.Group controlId="topnav-form-province">
                <Form.Label className="font-weight-bold">Province</Form.Label>
                <Form.Control as="select" value={ province } onChange={ e => setProvince( e.target.value ) }>
                  <option>Choose...</option>
                  <option value="gauteng">Gauteng</option>
                  <option value="kwazulu-natal">KwaZulu Natal</option>
                  <option value="western-cape">Western Cape</option>
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

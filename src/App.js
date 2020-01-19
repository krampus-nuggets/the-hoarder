import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import "./styles/styles.css";

const TopNav = () => {
  return(
    <div id="TopNav" className="bg-dark text-white">
      <Container className="container-fluid text-monospace">
        <Form>
          <Row className="d-flex flex-row">
            <Col className="mt-3 mr-3 ml-5">
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
            <Col className="mt-3 mr-3">
              <Form.Group controlId="topnav-form-price">
                <Form.Label className="font-weight-bold">Price Range</Form.Label>
                <Form.Control as="select">
                  <option>50k to 100k</option>
                  <option>100k to 200k</option>
                  <option>200k to 500k</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="mt-3 mr-3">
              <Form.Group controlId="topnav-form-province">
                <Form.Label className="font-weight-bold">Province</Form.Label>
                <Form.Control as="select">
                  <option>Gauteng</option>
                  <option>KwaZulu Natal</option>
                  <option>Western Cape</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col className="mt-5">
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

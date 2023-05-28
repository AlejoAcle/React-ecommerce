import React from "react";
import { Link } from "react-router-dom";
import { Cart } from "../Cart/Cart";
import { Container, Row, Col } from "react-bootstrap";

import Navbar from "react-bootstrap/Navbar";

export const Navegacion = () => {
  return (
    <>
      <Navbar bg="none" variant="light">
        <Container
          className="containerNav"
          style={{ display: "block", flexWrap: "wrap" }}
        >
          <Navbar.Brand href="#home" style={{ display: "grid" }}>
            <Row className="">
              <Col className="">
                <h2>BEJAMAS_</h2>
              </Col>
              <Col>
                <p></p>
              </Col>
              <Col>
                <p></p>
              </Col>
              <Col>
                <p></p>
              </Col>
              <Col>
                <p></p>
              </Col>
              <Col>
                <p></p>
              </Col>

              <Col className="md-auto">
                <p>1item</p>
              </Col>
              <Col className="">
                <Cart />
              </Col>
            </Row>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
};

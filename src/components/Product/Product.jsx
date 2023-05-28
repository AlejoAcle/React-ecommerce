import React from "react";
import { Products } from "../Products/Products";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import { Row, Col } from "react-bootstrap";

export const Product = () => {
  return (
    <>
      <Container className="containerProduct" style={{ marginTop: "20px" }}>
        <Container
          className="ProductHeader"
          style={{ display: "block", flexDirection: "row" }}
        >
          <Row>
            <Col className="col-sm-10">
              <h1>Product</h1>
            </Col>
            <Col className="col-sm-2 offset-0">
              <Button
                className="buttoncart"
                variant="dark"
                size="lg"
                style={{ fontSize: "18px", fontWeight: "600" }}
              >
                {" "}
                Add to Cart
              </Button>
            </Col>
          </Row>
        </Container>
        <img
          src="../../../images/box.jpg"
          width="1300"
          height="500"
          style={{ marginTop: "50px", marginBottom: "50px" }}
        />

        <Container
          className="containerFooter"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Container
            className="containerPrincipalProduct"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <Col className="col-4">
              <h3>Product</h3>
              <p>Lorem ipsum bla bla bla bla bla bla</p>
            </Col>
          </Container>
          <Col className="col-8">
            <Products />
          </Col>
        </Container>
      </Container>
    </>
  );
};

import React from "react";
import { Products } from "../Products/Products";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";

export const Product = () => {
  return (
    <>
      <Container className="containerProduct" style={{marginTop:"20px"}}>
        <Container className="ProductHeader " style={{ display: "flex", flexDirection:"row",}}>
          <h1>Product</h1>
          <Button className="buttoncart" variant="dark" size="lg" style={{fontSize:"18px", fontWeight:"600"}}> Add to Cart</Button>
        </Container>
        <img src="../../../images/box.jpg" width="1300" height="500" style={{marginBottom:"50px"}} />
        <Container
          className="containerFooter"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Container
            className="containerPrincipalProduct"
            style={{ display: "flex", flexDirection: "column" }}
          >
            <h3>Product</h3>
            <p>Lorem ipsum bla bla bla bla bla bla</p>
          </Container>
          <Products />
        </Container>
      </Container>
    </>
  );
};

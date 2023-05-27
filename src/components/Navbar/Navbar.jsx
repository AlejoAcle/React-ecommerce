import React from "react";
import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';

import Navbar from 'react-bootstrap/Navbar';


export const Navegacion = () => {
  return (
    <>
        {/* <Nav className="container-nav">
          <Nav.Item className="containerHome">
            <Nav.Link href="/home">B E J A M A S _</Nav.Link>
          </Nav.Item>
          <Nav.Item className="containerCart">
            <img
              classname="cart"
              src="../../../images/cart.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="cart logo"
            ></img>
          </Nav.Item>
        </Nav> */}

        <Navbar bg="light" variant="light">
        <Container className="containerNav" style={{display:"flex", }}>
          <Navbar.Brand href="#home" style={{display:"flex"}}>
            <h2>BEJAMAS_</h2>
            <p>1item</p>
            
            <img
              
              alt=""
              src="../../../images/cart.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{' '}
            
          </Navbar.Brand>
        </Container>
      </Navbar>







    </>





  );
};

import React from "react";
import { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";


export const List = () => {
  const [order, setOrder] = useState("");

  return (
    <div>
      <Container>
        <Container className="headerList">
          <Row>
            <Col>
              <h2>Photography/Premium Photos</h2>
            </Col>

            <Col>
              <button onClick={() => setOrder(order)}> Order By:{order}</button>
            </Col>
          </Row>
            <Container className="bodyContainer">
                <Row className="bodyRow">
                    <Col>
                        <Container className="categoryList">
                            <h3>Category</h3>
                            <li>
                                <ul>
                                    <p>People</p>
                                </ul>
                                <ul>
                                    <p>Food</p>
                                </ul>
                            </li>
                        </Container>
                    </Col>
                    <Col>
                        <Card>

                        </Card>
                    </Col>
                </Row>
            </Container>


        </Container>
      </Container>
    </div>
  );
};

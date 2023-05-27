import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

export const Products = () => {
  return (
    <>
      <CardGroup
        className="CardContainer"
        style={{ display: "flex", flexDirection: "column" }}
      >
        <h2>Productos relacionados</h2>

        <CardGroup
          className="CardContainer"
          style={{ display: "flex", flexDirection: "row" }}
        >
          <Card style={{ display: "flex", flexDirection: "column" }}>
            <Card.Img
              variant="top"
              src="../../../images/box.jpg"
              width="20px"
              height="40px"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">20€</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="../../../images/box.jpg"
              width="20px"
              height="40px"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">20€</small>
            </Card.Footer>
          </Card>

          <Card>
            <Card.Img
              variant="top"
              src="../../../images/box.jpg"
              width="20px"
              height="40px"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">20€</small>
            </Card.Footer>
          </Card>
        </CardGroup>
      </CardGroup>
    </>
  );
};

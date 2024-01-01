import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { Button, Card } from "bootstrap";

export default function Data({ mydata }) {
  console.log({ mydata });

  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

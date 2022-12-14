import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect } from "react";

const cardStyle = {
  width: "25rem",
};

const cardBodyStyle = {
  display: "flex",
  flexDirection: "column",
  gap: "0.8rem",
};

const titleStyle = {
  margin: "2rem",
};

export function Home(props) {
  return (
    <>
      <center>
        <h1 style={titleStyle}>Acesse Sus</h1>
        <Card style={cardStyle}>
          <Card.Header as="h3">Entrar</Card.Header>
          <Card.Body style={cardBodyStyle}>
            <Button variant="primary">Pacientes</Button>
            <Button variant="primary">Médicos</Button>
            <Button variant="primary">Agentes de Saúde</Button>
          </Card.Body>
        </Card>
      </center>
    </>
  );
}

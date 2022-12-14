import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useEffect } from "react";

const divStyle = {
  display: "flex",
  flex: "flex-end",
};

export function NavBar(props) {
  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Projeto Acesse SUS</Navbar.Brand>
          <div style={divStyle}>
            <Nav className="me-auto">
              <Button variant="primary">Entrar</Button>
              <Button variant="primary">User Name</Button>
              <Button variant="primary">Sair</Button>
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

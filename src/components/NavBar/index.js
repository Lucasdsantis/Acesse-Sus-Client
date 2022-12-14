import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import { useNavigate } from "react-router-dom";

const divStyle = {
  display: "flex",
  flex: "flex-end",
};

export function NavBar(props) {
  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  const navigate = useNavigate();

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    navigate("/");
  }

  function goToProfile() {
    if (loggedInUser.user.role === "PAC") navigate("/paciente");
    if (loggedInUser.user.role === "MED") navigate("/medico");
    if (loggedInUser.user.role === "AGS") navigate("/agentedesaude");
  }

  function goHome() {
    navigate("/");
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand>Acesse Sus</Navbar.Brand>
          <div style={divStyle}>
            <Nav className="me-auto">
              {1 > 2 ? (
                <>
                  <Button variant="primary" onClick={goToProfile}>
                    {loggedInUser.user.name}
                  </Button>
                  <Button
                    variant="primary"
                    onClick={() => {
                      handleLogOut();
                    }}
                  >
                    Sair
                  </Button>
                </>
              ) : (
                <Button variant="primary" onClick={goHome}>
                  Entrar
                </Button>
              )}
            </Nav>
          </div>
        </Container>
      </Navbar>
    </>
  );
}

import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";

import { useNavigate, Link } from "react-router-dom";

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
    if (loggedInUser.user && loggedInUser.user.role === "PAC")
      navigate("/paciente");
    if (loggedInUser.user && loggedInUser.user.role === "MED")
      navigate("/medico");
    if (loggedInUser.user && loggedInUser.user.role === "AGS")
      navigate("/agentedesaude");
    if (loggedInUser.root && loggedInUser.root.role === "ROOT")
      navigate("/acessoroot");
  }

  function goHome() {
    navigate("/");
  }

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand>Acesse Sus</Navbar.Brand>
          </Link>
          <div style={divStyle}>
            <Nav className="me-auto">
              {loggedInUser ? (
                <>
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

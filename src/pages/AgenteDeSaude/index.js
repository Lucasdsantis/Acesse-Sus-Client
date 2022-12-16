import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

export function AgenteDeSaude() {
  const divMaeStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "1rem",
    gap: "1rem",
    flexWrap: "wrap",
  };

  const divInfoAGSStyle = {
    width: "40vw",
  };

  const divMaeDisplay = {
    width: "40vw",
    display: "flex",
    flexDirection: "column",
    gap: "3rem",
  };

  const divDisplayStyle = {
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "20rem",
  };

  const cardBodyStyle = {};

  const divIMGstyle = {
    width: "10rem",
    height: "8rem",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/AGS/profile");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  console.log(user);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  function goToFormPAC() {
    navigate("/cadastroPAC");
  }

  function goToAllPAC() {
    navigate("/allPAC");
  }

  function goToFormMED() {
    navigate("/cadastroMED");
  }

  function goToAllMED() {
    navigate("/allMED");
  }

  return (
    <>
      <div style={divMaeStyle}>
        <div style={divInfoAGSStyle}>
          {" "}
          <h3>Agente de Saúde</h3>
          <img style={divIMGstyle} src={user.foto} />
          <h5>{user.name}</h5>
          <p>{user.email}</p>
          <p>{user.posto}</p>
          <p>
            CPF: {user.cpf} | RG: {user.rg}
          </p>
          <Button variant="danger" onClick={handleLogOut}>
            Sair
          </Button>
        </div>
        <div style={divMaeDisplay}>
          <div style={divDisplayStyle}>
            {" "}
            <Card style={cardStyle}>
              <Card.Header as="h3">Paciente</Card.Header>
              <Card.Body style={cardBodyStyle}>
                <Button variant="primary" onClick={goToFormPAC}>
                  Criar
                </Button>
                <br />
                <br />
                <Button variant="success" onClick={goToAllPAC}>
                  Ver Todos
                </Button>
              </Card.Body>
            </Card>
          </div>
          <div style={divDisplayStyle}>
            {" "}
            <Card style={cardStyle}>
              <Card.Header as="h3">Médico</Card.Header>
              <Card.Body style={cardBodyStyle}>
                <Button variant="primary" onClick={goToFormMED}>
                  Criar
                </Button>
                <br />
                <br />
                <Button variant="success" onClick={goToAllMED}>
                  Ver Todos
                </Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function MedicoPage() {
  const divMaeStyle = {
    padding: "1rem",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
  };

  const divInfoMedStyle = {
    margin: "0",
    // n ta ficando reboto scss
  };

  const divDisplayStyle = {
    display: "flex",
    alignContent: "center",
    flexWrap: "wrap",
  };

  const cardStyle = {
    width: "20rem",
  };

  const cardBodyStyle = {
    display: "flex",
    flexDirection: "column",
  };

  const divIMGstyle = {
    width: "10rem",
    height: "8rem",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/MED/perfil");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  // temos q pegar o _id do paciente e abrir a pg de consulta daquele paciente com o _id no parms
  const [form, setForm] = useState({
    cpf: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const [paciente, setPaciente] = useState(null);

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.get(
        `/MED/info_paciente_c/${String(form.cpf)}`
      );
      setPaciente(response.data);

      // localStorage.setItem("paciente", JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
    console.log(paciente);
    navigate(`/consultamedica/${String(form.cpf)}`);
  }

  return (
    <>
      <div style={divMaeStyle}>
        <div style={divInfoMedStyle}>
          {" "}
          <h3>Médico</h3>
          <img style={divIMGstyle} src={user.foto} />
          <h5>{user.name}</h5>
          <p>{user.email}</p>
          <p>{user.especialidade}</p>
          <p>
            {user.CRM} | {user.UF}
          </p>
          <Button variant="danger" onClick={handleLogOut}>
            Sair
          </Button>
        </div>
        <div style={divDisplayStyle}>
          {" "}
          <Card style={cardStyle}>
            <Card.Header as="h3">Paciente</Card.Header>
            <Card.Body style={cardBodyStyle}>
              <Form onSubmit={handleSumit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>CPF:</Form.Label>
                  <Form.Control
                    placeholder="Insira o CPF do paciente"
                    type="text"
                    name="cpf"
                    value={form.cpf}
                    onChange={handleChange}
                  />
                </Form.Group>
              </Form>
              <Button variant="primary" onClick={handleSumit}>
                Acessar
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </>
  );
}

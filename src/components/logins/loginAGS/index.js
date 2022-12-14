import { useState, useContext } from "react";
import { AuthContext } from "../../../contexts/authContext";
import { api } from "../../../api/api";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { EsqueciSenha } from "../../EsqueciSenha.js";

export function LoginAGS() {
  const cardStyle = {
    width: "25rem",
  };

  const cardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "AGS",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      const response = await api.post("/AGS/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/agentedesaude");
    } catch (error) {
      console.log(error);
    }
  }

  // RENDER esqueci senha

  const [showES, setShowES] = useState(false);

  function handleESform() {
    if (showES) setShowES(false);
    if (!showES) setShowES(true);
  }

  return (
    <div>
      {!showES ? (
        <Card style={cardStyle}>
          <Card.Header as="h3">Entrar como Agente de Saúde</Card.Header>
          <Card.Body style={cardBodyStyle}>
            <Form onSubmit={handleSumit}>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                  placeholder="Insira email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Senha:</Form.Label>
                <Form.Control
                  placeholder="Senha"
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Entrar
              </Button>
            </Form>
            <div>
              <Button variant="link" onClick={handleESform}>
                Esqueci Senha
              </Button>
            </div>
          </Card.Body>
        </Card>
      ) : (
        <>
          <EsqueciSenha role={"AGS"} />
        </>
      )}
    </div>
  );
}

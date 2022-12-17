import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";

import { useEffect, useState } from "react";
import { api } from "../../api/api";

import toast from "react-hot-toast";

export function EsqueciSenha(props) {
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
    role: props.role,
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSumit(e) {
    e.preventDefault();

    try {
      await api.post("/esqueci_senha", form);
      toast.success("Email enviado!");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado...");
    }
  }

  return (
    <>
      <Card style={cardStyle}>
        <Card.Header as="h3">Recuperar Senha</Card.Header>
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
              <Form.Text className="text-muted">
                Enviaremos uma nova senha para seu email <br />
                (Confira sua caixa de Spam e a Lixeira).
              </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
}

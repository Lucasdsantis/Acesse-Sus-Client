import { useState, useEffect } from "react";
import { api } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function AllPAC() {
  const cardStyleMap = {
    alingItems: "center",
    width: "12rem",
    heigth: "10rem",
    display: "flex",
    flexDirection: "row",
  };

  const buttonBackStyle = {
    display: "flex",
    justifyContent: "flex-end",
    margin: "1rem",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [pac, setPAC] = useState([]);

  useEffect(() => {
    async function fetchAllPAC() {
      try {
        const response = await api.get("/AGS/allpac");

        setPAC(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchAllPAC();
  }, []);

  async function handleDelete(id) {
    try {
      await api.delete(`/AGS/deletePAC/${id}`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (err) {
      console.log(err);
    }
  }

  function goEditForm() {
    navigate("/");
  }

  function goBack() {
    navigate("/agentedesaude");
  }

  return (
    <div>
      <div style={buttonBackStyle}>
        <Button variant="secondary" onClick={goBack}>
          Voltar
        </Button>
      </div>
      {pac.map((el) => {
        return (
          <div>
            <Card style={cardStyleMap}>
              <Card.Img src={el.foto} />
              <Card.Body>
                <Card.Title> {el.name} </Card.Title>
                <Card.Text>
                  {" "}
                  Posto: {el.posto} <br /> CPF: {el.cpf}
                </Card.Text>
                <Button variant="success" onClick={goEditForm}>
                  Editar
                </Button>
                <Button
                  variant="danger"
                  onClick={() => {
                    handleDelete(el._id);
                  }}
                >
                  Deletar
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
    </div>
  );
}

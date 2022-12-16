import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function AcessoRoot() {
  const cardStyleMap = {
    alingItems: "center",
    width: "25rem",
    heigth: "10rem",
  };

  const cardStyle = {
    width: "30rem",
  };

  const cardName = {
    margin: "2rem",
  };
  const cardBody = {
    border: "none",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
  };

  const divCard = {
    width: "25rem",
  };

  const botaoCriarNovoAg = {
    margin: "1rem",
  };

  const buttonInsideCard = {
    margin: "0.5rem",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [agenteDeSaude, setAgenteDeSaude] = useState([]);

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/Root/all_AGS");

        setAgenteDeSaude(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);

  const [img, setImg] = useState("");

  function handleChange(e) {
    setAgenteDeSaude({ ...agenteDeSaude, [e.target.name]: e.target.value });
  }

  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/Root/cadastrar_AGS", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      const imgURL = await handleUpload();
      await api.post("/Root/cadastrar_AGS", {
        ...agenteDeSaude,
        img: imgURL,
      });

      navigate("/cadastroas");
    } catch (error) {
      console.log(error);
    }
  }

  async function handleDelete(agenteDeSaudeId) {
    try {
      await api.delete(`/Root/delete/${agenteDeSaudeId}`);
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } catch (err) {
      console.log(err);
    }
  }

  function goForm() {
    navigate("/cadastroas");
  }

  function goEditForm() {
    navigate("/editar-as");
  }

  return (
    <>
      <div style={cardStyle}>
        <Card style={{ width: "32rem", heigth: "45rem" }}>
          <Card.Title style={cardName}>Agentes de Saúde</Card.Title>
          <Card.Body style={cardBody}>
            {agenteDeSaude.map((currentAs) => {
              return (
                <div style={divCard}>
                  <Card id="userCard" style={cardStyleMap}>
                    <Card.Img src={currentAs.foto} />
                    <Card.Body>
                      <Card.Title> {currentAs.name} </Card.Title>
                      <Card.Text>
                        {" "}
                        Posto: {currentAs.posto} <br /> CPF: {currentAs.cpf}
                      </Card.Text>
                      <Button
                        style={buttonInsideCard}
                        variant="success"
                        onClick={goEditForm}
                      >
                        Editar
                      </Button>
                      <Button
                        style={buttonInsideCard}
                        variant="danger"
                        onClick={() => {
                          handleDelete(currentAs._id);
                        }}
                      >
                        Deletar
                      </Button>
                    </Card.Body>
                  </Card>
                </div>
              );
            })}
          </Card.Body>
          <Button style={botaoCriarNovoAg} variant="primary" onClick={goForm}>
            Criar novo Agente de Saúde
          </Button>
        </Card>
      </div>
    </>
  );
}

import { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

export function AcessoRoot() {
  const cardStyle = {
    alingItems: "center",
  };

  const navigate = useNavigate();
  const { id } = useParams();
  const [agenteDeSaude, setAgenteDeSaude] = useState([]);

  const { loggedInUser } = useContext(AuthContext);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await api.get("/agente-de-saudes");

        setAgenteDeSaude(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);

  async function handleDelete(agenteDeSaudeId) {
    try {
      await api.delete(`/agente-de-saudes/${id}`);
      navigate("/AcessoRoot");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    //     <div>
    //       <h1>Agentes de Saúde</h1>
    //       <div>
    //         {agenteDeSaude.map((currentAs) => {
    //   return (
    //     <div>
    //       <h6>{currentAs.name}</h6>
    //       <button>Editar</button>
    //       <button onClick={handleDelete}>Deletar</button>
    //     </div>
    //           );
    //         })}
    //       </div>

    //       <button>Criar novo Agente de Saúde</button>
    //     </div>
    <div style={cardStyle}>
      <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>Agentes de Saúde</Card.Title>

          <Link href="../FormAs">
            <Button variant="primary">Criar novo Agente de Saúde</Button>
          </Link>
        </Card.Body>
      </Card>
      <div>
        {agenteDeSaude.map((currentAs) => {
          return (
            <div>
              <h6>{currentAs.name}</h6>
              <button>Editar</button>
              <button onClick={handleDelete}>Deletar</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

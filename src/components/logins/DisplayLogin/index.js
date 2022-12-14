import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export function DisplayLogin(props) {
  const cardStyle = {
    width: "25rem",
  };

  const cardBodyStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "0.8rem",
  };
  return (
    <>
      <Card style={cardStyle}>
        <Card.Header as="h3">Entrar</Card.Header>
        <Card.Body style={cardBodyStyle}>
          <Button variant="primary" onClick={props.functionshowPAC}>
            Pacientes
          </Button>
          <Button variant="primary" onClick={props.functionshowMED}>
            Médicos
          </Button>
          <Button variant="primary" onClick={props.functionshowAGS}>
            Agentes de Saúde
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

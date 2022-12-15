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
        <Card.Header as="h3">Você é</Card.Header>
        <Card.Body style={cardBodyStyle}>
          <Button variant="primary" onClick={props.functionshowPAC}>
            Paciente
          </Button>
          <Button variant="primary" onClick={props.functionshowMED}>
            Médico
          </Button>
          <Button variant="primary" onClick={props.functionshowAGS}>
            Agente de Saúde
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

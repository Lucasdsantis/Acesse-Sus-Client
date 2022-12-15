import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

export function PacientePage() {
  const divMae = {
    display: "flex",
    flexDirectiob: "row",
    gap: "2rem",
    margin: "1.2rem 0",
  };

  const imgStyle = {
    width: "8rem",
    height: "10rem",
  };

  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/PAC/perfil");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
      <div style={divMae}>
        <div>
          <img style={imgStyle} src={user.foto} />
        </div>
        <div>
          <h4>
            Nome: {user.name} | Nome Social: {user.nomesocial}
          </h4>
          <h5>Posto de saúde: {user.posto}</h5>
          <p>
            CPF: {user.cpf} | RG: {user.rg} | tel: {user.tel}
          </p>
          <small>Registrado por: {user.createdBy}</small>
        </div>
      </div>
      <Tabs
        defaultActiveKey="profile"
        id="justify-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="home" title="Ficha Médica">
          SUS Card: {user.suscard} <br />
          Nacionalidade: {user.nacionalidade} <br />
          cor: {user.cor} <br />
          sexo: {user.sexo} <br />
          Tem Doença de Pulmão?: {user.pulmaoDoenca} <br />É Fumante?:{" "}
          {user.pulmaoDoenca} <br />
          Consome Bebidas Alcoólicas?: {user.usaAlcool} <br />
          Usuário de Drogas?: {user.usaDrogas} <br />É Hipertenso?:{" "}
          {user.hipertenso} <br />É Diabético?: {user.diabetes} <br />É Já
          Sofreu AVC/Derrame?: {user.avcderrame} <br />
          Já Infartou?: {user.infarto} <br />
          Tem Doença Cardíaca?: {user.cardioDoenca} <br />
          Apresenta Problemas nos Rins?: {user.problemaRins} <br />
        </Tab>
        <Tab eventKey="profile" title="Consultas"></Tab>
      </Tabs>
    </>
  );
}

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { differenceInYears, parse } from "date-fns";

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

  const divFichaMedicaStyle = {
    margin: "1.2rem",
  };

  const [user, setUser] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      try {
        const response = await api.get("/PAC/perfil");
        setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchUser();
  }, []);

  console.log(user);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  function calculateAge(dob) {
    const date = parse(dob, "dd/MM/yyyy", new Date());
    const age = differenceInYears(new Date(), date);
    return age;
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
          <div style={divFichaMedicaStyle}>
            SUS Card: {user.suscard} <br />
            Nacionalidade: {user.nacionalidade} <br />
            Idade: {calculateAge(user.dataNascimento)} <br />
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
          </div>
        </Tab>
        <Tab eventKey="profile" title="Consultas">
          {1 < 2 ? (
            <center>Você ainda não tem nenhum registro de consulta</center>
          ) : (
            <>
              <center>
                <h3>Última consulta</h3>
                Feita pela médico: {user.consulta.medico}, <br />
                Data: {user.consulta.createdAt}
                <br />
                <br />
                Relatos do Paciente: <br />
                {user.consulta.info} <br />
                <br />
                Diagnóstico: <br />
                {user.consulta.diagnostico} <br />
                <br />
                Prognóstico: <br />
                {user.consulta.prognostico} <br />
                <br />
                Receita: <br />
                {user.consulta.receita} <br />
                <br />
                Observações: <br />
                {user.consulta.obs} <br />
                <br />
                <br />
                <h3>Consultas Anteriores</h3>
                {user.consulta.historico.length < 1 ? (
                  <>
                    <br />
                    <h6>Não há outro registros médicos a serem exibidos</h6>
                  </>
                ) : (
                  user.consulta.historico.map((el) => {
                    return (
                      <>
                        Feita pela médico: {el.consulta.medico}, <br /> Data:{" "}
                        {el.consulta.createdAt} (data esta certa?)
                        <br />
                        <br />
                        Relatos do Paciente: <br />
                        {el.consulta.info} <br />
                        <br />
                        Diagnóstico: <br />
                        {el.consulta.diagnostico} <br />
                        <br />
                        Prognóstico: <br />
                        {el.consulta.prognostico} <br />
                        <br />
                        Receita: <br />
                        {el.consulta.receita} <br />
                        <br />
                        Observações: <br />
                        {el.consulta.obs} <br />
                      </>
                    );
                  })
                )}
              </center>
            </>
          )}
        </Tab>
      </Tabs>
    </>
  );
}

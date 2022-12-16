import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";

import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";

import { differenceInYears, parse } from "date-fns";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

export function ConsultaMedica() {
  const divMae = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: "1rem",
    gap: "1rem",
  };
  const divCampoPaciente = {
    width: "50vw",
    border: "1px solid black",
    height: "77vh",
    overflow: "scroll",
    overflowX: "hidden",
    overflowY: "auto",
  };
  const divFichaMedicaStyle = {
    margin: "1.2rem",
  };

  const divConsultasStyle = {
    border: "1px solid black",
    margin: "0.7rem",
  };
  const divCampoConsulta = {
    width: "50vw",
    border: "1px solid black",
    // height: "77vh",
    maxHeight: "95vh",
  };

  const titleStyle = {
    margin: "1rem",
  };

  const imgStyle = {
    width: "8rem",
    height: "10rem",
  };

  const formStyle = {
    margin: "1rem",
  };

  const navigate = useNavigate();
  const params = useParams();

  const [paciente, setPaciente] = useState({
    consulta: {
      historico: [
        {
          createdAt: "",
          diagnostico: "",
          info: "",
          medico: "",
          obs: "",
          pacienteId: "",
          prognostico: "",
          receita: "",
        },
      ],
    },
    medico: "",
  });
  useEffect(() => {
    async function fetchPAC() {
      try {
        const response = await api.get(`/MED/info_paciente_c/${params.id}`);
        setPaciente(response.data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchPAC();
  }, []);

  function calculateAge(dob) {
    const date = parse(dob, "dd/MM/yyyy", new Date());
    const age = differenceInYears(new Date(), date);
    return age;
  }

  const [form, setForm] = useState({
    info: "",
    diagnostico: "",
    prognostico: "",
    receita: "",
    obs: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(form);
      await api.post(`/MED/consulta/${String(paciente.consulta._id)}`, form);

      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  }

  console.log(paciente);

  return (
    <>
      <center style={titleStyle}>
        <h2>Anamnese</h2>
      </center>
      <div style={divMae}>
        <div style={divCampoPaciente}>
          {" "}
          <Tabs
            defaultActiveKey="profile"
            id="justify-tab-example"
            className="mb-3"
            justify
          >
            <Tab eventKey="home" title="Ficha Médica">
              <div style={divFichaMedicaStyle}>
                <img style={imgStyle} src={paciente.foto} />
                <br />
                Nome: {paciente.name} <br />
                Nome Social: {paciente.nomesocial} <br />
                SUS Card: {paciente.suscard} <br />
                Nacionalidade: {paciente.nacionalidade} <br />
                Idade: {calculateAge(paciente.dataNascimento)} <br />
                cor: {paciente.cor} <br />
                sexo: {paciente.sexo} <br />
                Tem Doença de Pulmão?: {paciente.pulmaoDoenca} <br />É Fumante?:{" "}
                {paciente.pulmaoDoenca} <br />
                Consome Bebidas Alcoólicas?: {paciente.usaAlcool} <br />
                Usuário de Drogas?: {paciente.usaDrogas} <br />É Hipertenso?:{" "}
                {paciente.hipertenso} <br />É Diabético?: {paciente.diabetes}{" "}
                <br />É Já Sofreu AVC/Derrame?: {paciente.avcderrame} <br />
                Já Infartou?: {paciente.infarto} <br />
                Tem Doença Cardíaca?: {paciente.cardioDoenca} <br />
                Apresenta Problemas nos Rins?: {paciente.problemaRins} <br />
              </div>
            </Tab>
            <Tab eventKey="profile" title="Consultas">
              {!paciente.consulta ? (
                <center>Você ainda não tem nenhum registro de consulta</center>
              ) : (
                <>
                  <center>
                    <h3>Última consulta</h3>
                    <div style={divConsultasStyle}>
                      Feita pela médico: {paciente.consulta.medico}, <br />
                      Data: {paciente.consulta.createdAt}
                      <br />
                      <br />
                      Relatos do Paciente: <br />
                      {paciente.consulta.info} <br />
                      <br />
                      Diagnóstico: <br />
                      {paciente.consulta.diagnostico} <br />
                      <br />
                      Prognóstico: <br />
                      {paciente.consulta.prognostico} <br />
                      <br />
                      Receita: <br />
                      {paciente.consulta.receita} <br />
                      <br />
                      Observações: <br />
                      {paciente.consulta.obs} <br />
                      <br />
                      <br />
                    </div>
                    <h3>Consultas Anteriores</h3>
                    {String(paciente.consulta.historico).length < 1 ? (
                      <>
                        <br />
                        <h6>Não há outro registros médicos a serem exibidos</h6>
                      </>
                    ) : (
                      paciente.consulta.historico.map((el, i) => {
                        return (
                          <div style={divConsultasStyle}>
                            <p>
                              consulta: {paciente.consulta.historico.length - i}{" "}
                            </p>
                            Feita pela médico: {el.medico}, <br /> Data:{" "}
                            {el.createdAt}
                            <br />
                            <br />
                            Relatos do Paciente: <br />
                            {el.info} <br />
                            <br />
                            Diagnóstico: <br />
                            {el.diagnostico} <br />
                            <br />
                            Prognóstico: <br />
                            {el.prognostico} <br />
                            <br />
                            Receita: <br />
                            {el.receita} <br />
                            <br />
                            Observações: <br />
                            {el.obs} <br />
                          </div>
                        );
                      })
                    )}
                  </center>
                </>
              )}
            </Tab>
          </Tabs>
        </div>

        <div style={divCampoConsulta}>
          {" "}
          <Form style={formStyle} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <label htmlFor="input-info">Relatos do Paciente:</label>
              <textarea
                className={"form-control"}
                id="input-info"
                rows="3"
                name="info"
                value={form.info}
                onChange={handleChange}
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label htmlFor="input-diagnostico">Diagnóstico:</label>
              <textarea
                className={"form-control"}
                id="input-diagnostico"
                rows="3"
                name="diagnostico"
                value={form.diagnostico}
                onChange={handleChange}
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label htmlFor="input-prognostico">Prognóstico:</label>
              <textarea
                className={"form-control"}
                id="input-prognostico"
                rows="3"
                name="prognostico"
                value={form.prognostico}
                onChange={handleChange}
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label htmlFor="input-receita">Receita:</label>
              <textarea
                className={"form-control"}
                id="input-receita"
                rows="3"
                name="receita"
                value={form.receita}
                onChange={handleChange}
              ></textarea>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <label htmlFor="input-obs">Observações:</label>
              <textarea
                className={"form-control"}
                id="input-obs"
                rows="3"
                name="obs"
                value={form.obs}
                onChange={handleChange}
              ></textarea>
            </Form.Group>

            <Button variant="primary" type="submit">
              Enviar
            </Button>
          </Form>
        </div>
      </div>
    </>
  );
}

import { useState } from "react";
import { api } from "../../../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function FormPAC() {
  const formBody = {
    width: "25rem",
    margin: "2rem",
  };

  const buttonBackStyle = {
    display: "flex",
    justifyContent: "flex-end",
    margin: "1rem",
  };

  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    cpf: "",
    rg: "",
    posto: "",
    foto: "",
    nomesocial: "",
    suscard: "",
    nacionalidade: "",
    dataNascimento: "",
    cor: "",
    sexo: "",
    nomeDaMae: "",
    tel: "",
    pulmaoDoenca: "",
    fumante: "",
    usaAlcool: "",
    usaDrogas: "",
    hipertenso: "",
    diabetes: "",
    avcderrame: "",
    infarto: "",
    cardioDoenca: "",
    problemaRins: "",
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await api.post("/AGS/signupPAC", form);

      navigate("/allPAC");
    } catch (err) {
      console.log(err);
      toast.error("Oops! Something went worng...");
    }
  }
  function goBack() {
    navigate("/agentedesaude");
  }

  return (
    <center>
      <div style={buttonBackStyle}>
        <Button variant="secondary" onClick={goBack}>
          Voltar
        </Button>
      </div>
      <h1>Cadastro Paciente</h1>
      <form style={formBody} onSubmit={handleSubmit}>
        <div className={"mb-3"}>
          <label htmlFor="input-nome" className={"form-label"}>
            Nome:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-nome"
            name="name"
            value={form.name}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-nomesocial" className={"form-label"}>
            nomesocial:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-nomesocial"
            name="nomesocial"
            value={form.nomesocial}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-email" className={"form-label"}>
            Email:
          </label>
          <input
            className={"form-control"}
            id="input-email"
            name="email"
            defaultValue={form.email}
            onChange={handleChange}
          ></input>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-password" className={"form-label"}>
            Senha:
          </label>
          <input
            type="password"
            className={"form-control"}
            id="input-senha"
            name="password"
            defaultValue={form.password}
            onChange={handleChange}
          ></input>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-cpf" className={"form-label"}>
            CPF:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-cpf"
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
          ></input>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-rg" className={"form-label"}>
            RG:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-rg"
            name="rg"
            value={form.rg}
            onChange={handleChange}
          ></input>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-sexo" className={"form-label"}>
            sexo:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-sexo"
            name="sexo"
            value={form.sexo}
            onChange={handleChange}
          ></input>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-posto" className={"form-label"}>
            Posto:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-posto"
            name="posto"
            value={form.posto}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-foto" className={"form-label"}>
            Link da Foto:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-foto"
            name="foto"
            value={form.foto}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-suscard" className={"form-label"}>
            suscard:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-suscard"
            name="suscard"
            value={form.suscard}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-fnacionalidadeoto" className={"form-label"}>
            nacionalidade:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-nacionalidade"
            name="nacionalidade"
            value={form.nacionalidade}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-dataNascimento" className={"form-label"}>
            Data Nascimento (DD/MM/AAAA):
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-dataNascimento"
            name="dataNascimento"
            value={form.dataNascimento}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-cor" className={"form-label"}>
            cor:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-cor"
            name="cor"
            value={form.cor}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-nomeDaMae" className={"form-label"}>
            Nome da mãe:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-nomeDaMae"
            name="nomeDaMae"
            value={form.nomeDaMae}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-tel" className={"form-label"}>
            telefone:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-tel"
            name="tel"
            value={form.tel}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-pulmaoDoenca" className={"form-label"}>
            Tem alguma doença no pulmão?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-pulmaoDoenca"
            name="pulmaoDoenca"
            value={form.pulmaoDoenca}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-fumante" className={"form-label"}>
            É fumante?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-fumante"
            name="fumante"
            value={form.fumante}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-usaAlcool" className={"form-label"}>
            consome Alcool?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-usaAlcool"
            name="usaAlcool"
            value={form.usaAlcool}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-usaDrogas" className={"form-label"}>
            Usa drogas?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-usaDrogas"
            name="usaDrogas"
            value={form.usaDrogas}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-hipertenso" className={"form-label"}>
            É hipertenso?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-hipertenso"
            name="hipertenso"
            value={form.hipertenso}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-diabetes" className={"form-label"}>
            Tem diabetes?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-diabetes"
            name="diabetes"
            value={form.diabetes}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-avcderrame" className={"form-label"}>
            Já sofreu avc ou derrame?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-avcderrame"
            name="avcderrame"
            value={form.avcderrame}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-infarto" className={"form-label"}>
            Já sofreu infarto?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-infarto"
            name="infarto"
            value={form.infarto}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-cardioDoenca" className={"form-label"}>
            Tem alguma Doença cardíaca?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-cardioDoenca"
            name="cardioDoenca"
            value={form.cardioDoenca}
            onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-problemaRins" className={"form-label"}>
            Já apresentou problema nos rins?
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-problemaRins"
            name="problemaRins"
            value={form.problemaRins}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </center>
  );
}

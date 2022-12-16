import { useState } from "react";
import { api } from "../../../api/api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

export function FormMED() {
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
    dataNascimento: "",
    email: "",
    password: "",
    cpf: "",
    rg: "",
    posto: "",
    CRM: "",
    UF: "..",
    especialidade: "",
    foto: "",
    role: "MED",
  });

  function handleChange(e) {
    if (e.target.name === "UF") {
      setForm({ ...form, UF: e.target.UF });
      return;
    }

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    try {
      await api.post("/AGS/signupMED", form);

      navigate("/allMED");
    } catch (err) {
      console.log(err);
      toast.error("Oops! Something went worng...");
    }
  }

  function goBack() {
    navigate("/agentedesaude");
  }

  return (
    <>
      <center>
        <div style={buttonBackStyle}>
          <Button variant="secondary" onClick={goBack}>
            Voltar
          </Button>
        </div>
        <h1>Cadastro Médico</h1>
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
            <label htmlFor="input-CRM" className={"form-label"}>
              CRM:
            </label>
            <input
              type="text"
              className={"form-control"}
              id="input-CRM"
              name="CRM"
              value={form.CRM}
              onChange={handleChange}
            />
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-select-UF" className={"form-label"}>
              UF:
            </label>
            <select
              className={"form-select"}
              id="input-select-UF"
              name="UF"
              defaultValue={form.UF}
              onChange={handleChange}
            >
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
              <option value="..">..</option>
            </select>
          </div>

          <div className={"mb-3"}>
            <label htmlFor="input-especialidade" className={"form-label"}>
              Especialidade:
            </label>
            <input
              type="text"
              className={"form-control"}
              id="input-especialidade"
              name="especialidade"
              value={form.especialidade}
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

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>
      </center>
    </>
  );
}

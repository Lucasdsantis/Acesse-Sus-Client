import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export function FormAS() {
  const formBody = {
    width: "25rem",
    margin: "2rem",
  };

  const navigate = useNavigate();

  const [form, setForm] = useState({
    nome: "",
    email: "",
    senha: "",
    função: "",
    cpf: "",
    rg: "",
    posto: "",
    foto: "",
  });

  function handleChange(e) {
    // if (e.target.name === "Type") {
    //   setForm({ ...form, type: e.target.value });
    //   return;
    // }

    // if (e.target.name === "Mode") {
    //   setForm({ ...form, mode: e.target.value });
    //   return;
    // }

    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      await axios.post("https://ironrest.cyclic.app/Fifa_Tips", form);

      navigate("../AgenteDeSaude");
    } catch (err) {
      console.log(err);
      toast.error("Oops! Something went worng...");
    }
  }

  return (
    <center>
      <h1>Cadastro Agente de Saúde</h1>
      <form style={formBody} onSubmit={handleSubmit}>
        <div className={"mb-3"}>
          <label htmlFor="input-nome" className={"form-label"}>
            Nome:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-nome"
            name="nome"
            value={form.nome}
            //   onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-email" className={"form-label"}>
            Email:
          </label>
          <select
            className={"form-control"}
            id="input-email"
            name="email"
            defaultValue={form.email}
            //   onChange={handleChange}
          ></select>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-senha" className={"form-label"}>
            Senha:
          </label>
          <select
            type="senha"
            className={"form-control"}
            id="input-senha"
            name="senha"
            defaultValue={form.senha}
            //   onChange={handleChange}
          ></select>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-funcao" className={"form-label"}>
            Função:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-funcao"
            name="funcao"
            value={form.funcao}
            //   onChange={handleChange}
          />
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-cpf" className={"form-label"}>
            CPF:
          </label>
          <textarea
            type="number"
            className={"form-control"}
            id="input-cpf"
            name="cpf"
            value={form.cpf}
            //   onChange={handleChange}
          ></textarea>
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-rg" className={"form-label"}>
            RG:
          </label>
          <textarea
            type="number"
            className={"form-control"}
            id="input-rg"
            name="rg"
            value={form.rg}
            //   onChange={handleChange}
          ></textarea>
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
            //   onChange={handleChange}
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
            //   onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </center>
  );
}

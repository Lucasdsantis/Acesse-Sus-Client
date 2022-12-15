import { useState, useEffect } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { Link, useNavigate, useParams } from "react-router-dom";
import { api } from "../../api/api";

export function EditFormAs() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [img, setImg] = useState("");

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

  useEffect(() => {
    async function FetchTip() {
      try {
        const response = await api.get(`/AGS/:id/${id.id}`);
        setForm(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchTip();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    // const infosToSendForAPI = { ...form };
    // delete infosToSendForAPI._id;
    // console.log(infosToSendForAPI);

    try {
      await api.patch("/edit/:id ");

      navigate(`/agentedesaude`);
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <center>
      <h1>Cadastro Agente de Saúde</h1>
      <form onSubmit={handleSubmit}>
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
            onChange={handleChange}
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
  );
}

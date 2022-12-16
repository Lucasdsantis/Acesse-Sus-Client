import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";

export function EditFormPAC() {
  const editFormStyle = {
    margin: "3rem",
  };

  const navigate = useNavigate();
  const { id } = useParams();

  const [form, setForm] = useState({
    name: "",
    email: "",
    cpf: "",
    rg: "",
    posto: "",
    foto: "",
    role: "AGS",
  });

  useEffect(() => {
    async function FetchAGS() {
      try {
        const response = await api.get(`/Root/get-AGS/${String(id)}`);
        setForm(response.data);
        console.log(form);
      } catch (err) {
        console.log(err);
      }
    }
    FetchAGS();
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
      await api.patch(`/Root/editar_AGS/${id}`);

      navigate(`/agentedesaude`);
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  return (
    <div style={editFormStyle}>
      <h1>Editar Agente de Saúde</h1>
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
            value={form.name}
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
          <label htmlFor="input-cpf" className={"form-label"}>
            CPF:
          </label>
          <textarea
            type="text"
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
            type="text"
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
          Editar
        </button>
      </form>
    </div>
  );
}

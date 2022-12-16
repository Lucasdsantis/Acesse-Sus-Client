import { useState } from "react";
import { api } from "../../../api/api";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

export function FormAS() {
  const formBody = {
    width: "25rem",
    margin: "2rem",
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
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  console.log(form);
  async function handleSubmit(e) {
    e.preventDefault();

    try {
      console.log(form);
      await api.post("/Root/cadastrar_AGS", form);

      navigate("/acessoroot");
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
          <label htmlFor="input-name" className={"form-label"}>
            Nome:
          </label>
          <input
            type="text"
            className={"form-control"}
<<<<<<< HEAD:src/pages/FormAs/index.js
            id="input-name"
=======
            id="input-nome"
>>>>>>> 8b3f4c00e3eb16fa7e51097c8e9f032db13c8a07:src/pages/Forms/FormAs/index.js
            name="name"
            value={form.name}
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
<<<<<<< HEAD:src/pages/FormAs/index.js
            type="email"
=======
>>>>>>> 8b3f4c00e3eb16fa7e51097c8e9f032db13c8a07:src/pages/Forms/FormAs/index.js
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
<<<<<<< HEAD:src/pages/FormAs/index.js
          <textarea
=======
          <input
>>>>>>> 8b3f4c00e3eb16fa7e51097c8e9f032db13c8a07:src/pages/Forms/FormAs/index.js
            type="text"
            className={"form-control"}
            id="input-cpf"
            name="cpf"
            value={form.cpf}
            onChange={handleChange}
<<<<<<< HEAD:src/pages/FormAs/index.js
            pattern={/[0-9]{3}[0-9]{3}[0-9]{3}[0-9]{2}/gm}
          ></textarea>
=======
          ></input>
>>>>>>> 8b3f4c00e3eb16fa7e51097c8e9f032db13c8a07:src/pages/Forms/FormAs/index.js
        </div>

        <div className={"mb-3"}>
          <label htmlFor="input-rg" className={"form-label"}>
            RG:
          </label>
<<<<<<< HEAD:src/pages/FormAs/index.js
          <textarea
=======
          <input
>>>>>>> 8b3f4c00e3eb16fa7e51097c8e9f032db13c8a07:src/pages/Forms/FormAs/index.js
            type="text"
            className={"form-control"}
            id="input-rg"
            name="rg"
            value={form.rg}
            onChange={handleChange}
<<<<<<< HEAD:src/pages/FormAs/index.js
            pattern={/[0-9]{2}[0-9]{3}[0-9]{3}[0-9]{2}/gm}
          ></textarea>
=======
          ></input>
>>>>>>> 8b3f4c00e3eb16fa7e51097c8e9f032db13c8a07:src/pages/Forms/FormAs/index.js
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

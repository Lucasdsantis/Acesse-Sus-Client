import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../../api/api";
import Button from "react-bootstrap/Button";

export function EditFormAs() {
  const editFormStyle = {
    margin: "3rem",
  };

  const buttonBackStyle = {
    display: "flex",
    justifyContent: "flex-end",
    margin: "1rem",
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
        const response = await api.get(`/Root/get-AGS/${id}`);
        setForm(response.data);
      } catch (err) {
        console.log(err);
      }
    }
    FetchAGS();
  }, []);

  const [img, setImg] = useState("");
  function handleImage(e) {
    setImg(e.target.files[0]);
  }

  async function handleUpload() {
    try {
      const uploadData = new FormData();
      uploadData.append("picture", img);

      const response = await api.post("/upload_img/edit", uploadData);

      return response.data.url;
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const infosToSendForAPI = { ...form };
    delete infosToSendForAPI._id;
    console.log(infosToSendForAPI);

    try {
      const imgURL = await handleUpload();
      await api.patch(`/Root/editar_AGS/${id}`, { ...form, foto: imgURL });

      navigate(`/acessoroot`);
    } catch (err) {
      console.log(err);
      toast.error("Ops! Algo deu errado ...");
    }
  }

  function goBack() {
    navigate("/acessoroot");
  }

  return (
    <div style={editFormStyle}>
      <div style={buttonBackStyle}>
        <Button variant="secondary" onClick={goBack}>
          Voltar
        </Button>
      </div>
      <h1>Editar Agente de Saúde</h1>
      <form onSubmit={handleSubmit}>
        <div className={"mb-3"}>
          <label htmlFor="input-name" className={"form-label"}>
            Nome:
          </label>
          <input
            type="text"
            className={"form-control"}
            id="input-name"
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
            value={form.email}
            onChange={handleChange}
          ></input>
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

        <label htmlFor="formImg">Sua foto de perfil:</label>
        <input type="file" id="formImg" onChange={handleImage} />
        <br></br>

        <button type="submit" className="btn btn-primary">
          Editar
        </button>
      </form>
    </div>
  );
}

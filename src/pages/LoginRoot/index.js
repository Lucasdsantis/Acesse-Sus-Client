import { useState, useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export function LoginRoot() {
  const bodyLogin = {
    padding: "2rem",
    display: "flex",
    flexDirection: "collum",
  };

  const formName = {
    margin: "1rem",
  };

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const { setLoggedInUser } = useContext(AuthContext);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmitx(e) {
    e.preventDefault();

    try {
      const response = await api.post("/Root/login", form);
      setLoggedInUser({ ...response.data });

      localStorage.setItem("loggedInUser", JSON.stringify(response.data));

      navigate("/acessoroot");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <center>
      <div>
        <form style={bodyLogin} onSubmit={handleSubmitx}>
          <label style={formName} htmlFor="email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={form.email}
            onChange={handleChange}
          />
          <label style={formName} htmlFor="senha">
            Senha:
          </label>
          <input
            type="password"
            name="password"
            id="senha"
            value={form.password}
            onChange={handleChange}
          />
          <button style={formName} type="submit">
            Entrar
          </button>
        </form>
      </div>
    </center>
  );
}

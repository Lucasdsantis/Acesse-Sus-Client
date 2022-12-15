import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../api/api";

export function ConsultaMedica() {
  const [user, setUser] = useState({ name: "", email: "" });
  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUser() {
      const response = await api.get("/AGS/profile");
      setUser(response.data);
    }

    fetchUser();
  }, []);

  function handleLogOut() {
    localStorage.removeItem("loggedInUser");
    navigate("/");
  }

  return (
    <>
      <h1>CONSULTA MED</h1>
    </>
  );
}

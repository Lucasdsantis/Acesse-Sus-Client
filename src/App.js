import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Signup } from "./pages/SingUp";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginRoot } from "./pages/LoginRoot";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { AcessoRoot } from "./pages/AcessoRoot";
import { AgenteDeSaude } from "./pages/AgenteDeSaude";
import { ConsultaMedica } from "./pages/ConsultaMedica";
import { Medico } from "./pages/Medico";
import { Paciente } from "./pages/Paciente";

function App() {
  return (
    <>
      <AuthContextComponent>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginroot" element={<LoginRoot />} />
          <Route
            path="/acessoroot"
            element={<ProtectedRoute component={AcessoRoot} />}
          />
          <Route path="/agentedesaude" element={<AgenteDeSaude />} />
          <Route path="/consultamedica" element={<ConsultaMedica />} />
          <Route path="/medico" element={<Medico />} />
          <Route path="/paciente" element={<Paciente />} />
          <Route
            path="/profile"
            element={<ProtectedRoute component={Profile} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;

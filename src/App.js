import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { Signup } from "./pages/SingUp";
import { AuthContextComponent } from "./contexts/authContext";
import { Profile } from "./pages/Profile";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginRoot } from "./pages/LoginRoot";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { ProtectedRouteROOT } from "./components/ProtectedAdminRoute";
import { AcessoRoot } from "./pages/AcessoRoot";
import { AgenteDeSaude } from "./pages/AgenteDeSaude";
import { ConsultaMedica } from "./pages/ConsultaMedica";
import { MedicoPage } from "./pages/Medico";
import { PacientePage } from "./pages/Paciente";
import { NavBar } from "./components/NavBar";
import { FormAS } from "./pages/FormAs";

function App() {
  return (
    <>
      <AuthContextComponent>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/loginroot" element={<LoginRoot />} />
          <Route
            path="/acessoroot"
            element={<ProtectedRouteROOT component={AcessoRoot} />}
          />
          <Route path="/cadastroas" element={<FormAS />} />

          <Route path="/agentedesaude" element={<AgenteDeSaude />} />

          <Route path="/medico" element={<MedicoPage />} />
          <Route path="/consultamedica" element={<ConsultaMedica />} />

          <Route path="/paciente" element={<PacientePage />} />
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

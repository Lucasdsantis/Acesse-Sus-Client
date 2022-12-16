import { Routes, Route } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";

import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";

import { ProtectedRouteROOT } from "./components/ProtectRoutes/ProtectedAdminRoute";
import { LoginRoot } from "./pages/LoginRoot";
import { AcessoRoot } from "./pages/AcessoRoot";
import { FormAS } from "./pages/FormAs";

import { ProtectedRoutePAC } from "./components/ProtectRoutes/ProtectRoutePAC";
import { PacientePage } from "./pages/Paciente";

import { ProtectedRouteAGS } from "./components/ProtectRoutes/ProtectedRouteAGS";
import { AgenteDeSaude } from "./pages/AgenteDeSaude";

import { ProtectedRouteMED } from "./components/ProtectRoutes/ProtectedRouteMED";
import { MedicoPage } from "./pages/Medico";
import { ConsultaMedica } from "./pages/ConsultaMedica";

import { ErrorPage } from "./pages/ErrorPage";

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

          <Route
            path="/agentedesaude"
            element={<ProtectedRouteAGS component={AgenteDeSaude} />}
          />

          <Route
            path="/medico"
            element={<ProtectedRouteMED component={MedicoPage} />}
          />
          <Route
            path="/consultamedica/:id"
            element={<ProtectedRouteMED component={ConsultaMedica} />}
          />

          <Route
            path="/paciente"
            element={<ProtectedRoutePAC component={PacientePage} />}
          />

          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </AuthContextComponent>
    </>
  );
}

export default App;

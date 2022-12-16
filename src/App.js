import { Routes, Route } from "react-router-dom";
import { AuthContextComponent } from "./contexts/authContext";

import { Home } from "./pages/Home";
import { NavBar } from "./components/NavBar";

import { ProtectedRouteROOT } from "./components/ProtectRoutes/ProtectedAdminRoute";
import { LoginRoot } from "./pages/LoginRoot";
import { AcessoRoot } from "./pages/AcessoRoot";
import { FormAS } from "./pages/Forms/FormAs";
import { EditFormAs } from "./pages/Forms/editFormAs";

import { ProtectedRoutePAC } from "./components/ProtectRoutes/ProtectRoutePAC";
import { PacientePage } from "./pages/Paciente";
import { FormPAC } from "./pages/Forms/FormPAC";
import { AllPAC } from "./pages/allPAC";
import { EditFormPAC } from "./pages/Forms/editFormPAC";

import { ProtectedRouteAGS } from "./components/ProtectRoutes/ProtectedRouteAGS";
import { AgenteDeSaude } from "./pages/AgenteDeSaude";

import { ProtectedRouteMED } from "./components/ProtectRoutes/ProtectedRouteMED";
import { MedicoPage } from "./pages/Medico";
import { ConsultaMedica } from "./pages/ConsultaMedica";
import { FormMED } from "./pages/Forms/FormMED";
import { AllMED } from "./pages/allMED";
import { EditFormMED } from "./pages/Forms/editFormMED";

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
          <Route
            path="/cadastroas"
            element={<ProtectedRouteROOT component={FormAS} />}
          />

          <Route
            path="/editformas/:id"
            element={<ProtectedRouteROOT component={EditFormAs} />}
          />

          <Route
            path="/agentedesaude"
            element={<ProtectedRouteAGS component={AgenteDeSaude} />}
          />
          <Route
            path="/cadastroPAC"
            element={<ProtectedRouteAGS component={FormPAC} />}
          />
          <Route
            path="/editPAC/:id"
            element={<ProtectedRouteAGS component={EditFormPAC} />}
          />
          <Route
            path="/allPAC"
            element={<ProtectedRouteAGS component={AllPAC} />}
          />
          <Route
            path="/cadastroMED"
            element={<ProtectedRouteAGS component={FormMED} />}
          />
          <Route
            path="/editMED/:id"
            element={<ProtectedRouteAGS component={EditFormMED} />}
          />
          <Route
            path="/allMED"
            element={<ProtectedRouteAGS component={AllMED} />}
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

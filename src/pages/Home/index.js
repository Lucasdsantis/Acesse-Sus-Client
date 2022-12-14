import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import { DisplayLogin } from "../../components/logins/DisplayLogin";

import { LoginPAC } from "../../components/logins/loginPAC";
import { LoginMED } from "../../components/logins/loginMED";
import { LoginAGS } from "../../components/logins/loginAGS";

import { useState, useEffect } from "react";

const titleStyle = {
  margin: "2rem",
};

const styleBtnVoltar = {
  margin: "1rem",
};

export function Home(props) {
  // RENDER PACICENTE
  const [showPAC, setShowPAC] = useState(false);

  function handlePACform() {
    if (showPAC) setShowPAC(false);
    if (!showPAC) setShowPAC(true);
  }

  // RENDER MEDICO

  const [showMED, setShowMED] = useState(false);

  function handleMEDform() {
    if (showMED) setShowMED(false);
    if (!showMED) setShowMED(true);
  }

  // RENDER AGENTE DE SAUDE

  const [showAGS, setShowAGS] = useState(false);

  function handleAGSform() {
    if (showAGS) setShowAGS(false);
    if (!showAGS) setShowAGS(true);
  }

  return (
    <>
      <center>
        <h1 style={titleStyle}>Acesse Sus</h1>

        {showPAC || showMED || showAGS ? (
          showPAC ? (
            <>
              <LoginPAC />
              <Button
                style={styleBtnVoltar}
                variant="secondary"
                onClick={handlePACform}
              >
                {" "}
                Voltar{" "}
              </Button>
            </>
          ) : showMED ? (
            <>
              <LoginMED />
              <Button
                style={styleBtnVoltar}
                variant="secondary"
                onClick={handleMEDform}
              >
                {" "}
                Voltar{" "}
              </Button>
            </>
          ) : showAGS ? (
            <>
              <LoginAGS />
              <Button
                style={styleBtnVoltar}
                variant="secondary"
                onClick={handleAGSform}
              >
                {" "}
                Voltar{" "}
              </Button>
            </>
          ) : (
            <DisplayLogin
              functionshowPAC={handlePACform}
              functionshowMED={handleMEDform}
              functionshowAGS={handleAGSform}
            />
          )
        ) : (
          <DisplayLogin
            functionshowPAC={handlePACform}
            functionshowMED={handleMEDform}
            functionshowAGS={handleAGSform}
          />
        )}
      </center>
    </>
  );
}

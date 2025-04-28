import React from "react";
import "../styles/mastery.css";
function Mastery() {
  return (
    <div className="mastercontainer">
      <div className="mastery">
        <div className="masterylvl">
          <img src="/mastery_header.svg" alt="" className="masteryheader" />
          <p>{12}</p>
        </div>
      </div>
      <div className="exp">
        <p>---0 / 892</p> {/* mejorara con datos de niveles */}
        {/* <p>{(experienciactual, expericiaparaelsiguientenivel)}</p> */}
        <div className="cargamastery">
          <div className="progreso" ></div>
        </div>
      </div>
    </div>
  );
}

export default Mastery;

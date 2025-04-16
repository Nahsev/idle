import React from "react";
import skills from "../data/skills";

import "../styles/header.css";
function Header() {
  return (
    <>
      <div className="header">
        <div className="place" style={{ backgroundColor: skills.color }}>
          <p>hola</p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique
            sunt corporis ipsum ad expedita accusamus quis, numquam sequi
            doloremque quasi.
          </p>
          <h2>{skills.name}</h2>
        </div>
        <div className="lineEXP"></div>
        <div className="headerbotom">
          <div className="niveles">
            <p>
              Nivel de habilidad <span>44/99</span>
            </p>
            <p>
              EXP de habilidad <span>58390/61512</span>
            </p>
            <p>
              Hacha actual <span>?</span>
            </p>
          </div>
          <div className="barraYbotones">
            <div>
              <div className="barracontenedor">
                <img src="./" alt="" />
                <div className="barra"></div>
                <p>
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Fugiat, soluta.
                </p>
              </div>
            </div>
            <div className="botones">
              <button>Ver puntos de control</button>
              <button> Gasta EXP de reserva de maestría</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

import React, { useState } from "react";
import { trees } from "../data/Trees";
import "../styles/tree.css";
function Tree({ nameTree, player }) {
  const [talando, setTalando] = useState(false);

  const cambiar = () => {
    setTalando(!talando);
  };

  return (
    <>
      <div className="treecard" onClick={cambiar}>
        <p>cut</p>
        <h2>{nameTree}</h2>
        <p>{`EXP de habilidad en ${trees[nameTree].xp} / ${trees[nameTree].time} segundos`}</p>
        <img src={`${trees[nameTree].icon}`} alt="" />
        <div className={`cortando ${talando ? "talando" : ""}`}></div>
        <div className="mastery">
          <div className="masterylvl">
            <img
              src="/main/mastery_header.svg"
              alt=""
              className="masteryheader"
            />
            <p>{player.skill.Woodcutting[nameTree]}</p>
          </div>
          <div className="exp">
            <p>---0/892</p> {/* mejorara con datos de niveles */}
            {/* <p>{(experienciactual, expericiaparaelsiguientenivel)}</p> */}
            <div className="cargamastery"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tree;

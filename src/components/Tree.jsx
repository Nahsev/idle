import React, { useState } from "react";
import { trees } from "../data/Trees";
import "../styles/tree.css";
import Mastery from "./Mastery";

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
        <img src={`/idle/${trees[nameTree].icon}`} alt="" className="treeimg" />
        <div className={`cortando ${talando ? "talando" : ""}`}></div>
        
        <Mastery/>
      </div>
    </>
  );
}

export default Tree;

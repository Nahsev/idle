import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import Masteryexp from "./Masteryexp";
function Zone({ zone }) {
  const [selected, setSelected] = useState(null);
const [render, setRender] = useState(true)
  const handleFishClick = (fish) => {
    setSelected(fish);
  };

const toggle = () =>{
  setRender(!render)
}

  return (
    <div>
      <div className="zoneContainer">
        <div onClick={toggle} className="zoneHeader">
          <div>
            <FontAwesomeIcon icon={ render ? faEye :   faEyeSlash} />
            <p >{zone.name}</p>
          </div>
          <div>
            <p>pesca: {zone.probabilities.fishing}% </p>
            <p>basura: {zone.probabilities.junk}% </p>
            <p>especial: {zone.probabilities.special}% </p>
          </div>
        </div>
         
         
      {render ? (<div   className="zoneBody">
          <div className="fishes">
            {zone.fishes.map((fish) => (
              <div
                className="fish"
                key={fish.name}
                onClick={() => handleFishClick(fish)}
              >
                <img src={`/idle/${fish.img}`} alt={fish.name} />
                <div className="text">
                  <h3>{fish.nombre}</h3>
                  <p>
                    EXP de habilidad en {fish.exp} de {fish.mintime} s a{" "}
                    {fish.maxtime} s
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="fishDetails">
            {selected ? (
              <div>
                <div className="descripcion">
                  <img src={`/idle/${selected.img}`} alt={selected.name} />
                  <div>
                    <p>pesca</p>
                    <p>{selected.nombre}</p>
                  </div>
                </div>
                <div className="detailimg">
                  <Masteryexp selected={selected} />

                  <p>
                    de {selected.mintime} s a {selected.maxtime} s
                  </p>
                </div>
              </div>
            ) : (
              <p className="textpez">Selecciona un pez</p>
            )}
          </div>
        </div>) : <div></div>}
      </div>
    </div>
  );
}

export default Zone;

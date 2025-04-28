import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import TextImg from "../components/TextImg";

function Zone({ zone }) {
  const [selectedFish, setSelectedFish] = useState(null);

  const handleFishClick = (fish) => {
    setSelectedFish(fish);
  };

  return (
    <div>
      <div className="zoneContainer">
        <div className="zoneHeader">
          <div>
            <FontAwesomeIcon icon={faEye} />
            <p>{zone.name}</p>
          </div>
          <div>
            <p>pesca: {zone.probabilities.fishing}% </p>
            <p>basura: {zone.probabilities.junk}% </p>
            <p>especial: {zone.probabilities.special}% </p>
          </div>
        </div>
        <div className="zoneBody">
          <div className="fishes">
            {zone.fishes.map((fish) => (
              <div
                className="fish"
                key={fish.name}
                onClick={() => handleFishClick(fish)}
              >
                <img src={fish.img} alt={fish.name} />
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
            {selectedFish ? (
              <div>
                <div className="descripcion">
                  <img src={selectedFish.img} alt={selectedFish.name} />
                  <div>
                    <p>pesca</p>
                    <p>{selectedFish.nombre}</p>
                  </div>
                </div>
                <div className="detailimg">
                  <div>
                    <TextImg
                      img="xp.svg"
                      size="small"
                      color="grey"
                      text={selectedFish.exp}
                    />
                    <TextImg
                      img="mastery_header.svg"
                      size="small"
                      color="grey"
                      text="33"
                    />
                    <TextImg
                      img="mastery_pool.svg"
                      size="small"
                      color="grey"
                      text="41"
                    />
                  </div>
                  <p>
                    de {selectedFish.mintime} s a {selectedFish.maxtime} s
                  </p>
                </div>
              </div>
            ) : (
              "Selecciona un pez"
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zone;

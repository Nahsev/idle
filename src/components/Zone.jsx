import React from "react";

function Zone() {
  return (
    <div>
      <div className="zoneContainer">
        <div className="zoneHeader">
          <div>
            <img src="" alt="ojo" />
            <p>zone name</p>
          </div>
          <div>
            <p>pesca 75%</p>
            <p>basura 25%</p>
            <p>especial 0%</p>
          </div>
        </div>
        <div className="zoneBody">
          <div className="fishes">
            <div className="fish">
              <img src="" alt="gamba" />
              <div>
                <p>gamba cruda</p>
                <p>EXP de habilidad en 5 de 4.00 s a 8.00 s</p>
              </div>
            </div>
            <div className="fish">
              <img src="" alt="langosta" />
              <div>
                <p>langosta cruda</p>
                <p>EXP de habilidad en 5 de 4.00 s a 8.00 s</p>
              </div>
            </div>
            <div className="fish">
              <img src="" alt="sardina" />
              <div>
                <p>sardina cruda</p>
                <p>EXP de habilidad en 5 de 4.00 s a 8.00 s</p>
              </div>
            </div>
          </div>
          <div className="fishDetails">
            <div>
              <div className="descripcion">
                <img src="" alt="gamba" />
                <div>
                  <p>pesca</p>
                  <p>gamba cruda</p>
                </div>
              </div>
              <div className="detailimg">
                <div>
                  <img src="" alt="xp" />
                  <img src="" alt="cup" />
                  <img src="" alt="cup" />
                </div>
                <p>de 4.00 s a 11.00 s</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Zone;

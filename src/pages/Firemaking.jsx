import React from "react";
import "../styles/firemaking.css";
function Firemaking() {
  return (
    <div className="container">
      <div className="firemakincontainer">
        <div className="selectlog bgc">
          <select name="select" id="select">
            <option value="" hidden selected>
              Selecciona los troncos
            </option>
            <option value="oak">Tronco de roble</option>
            <option value="willow">Tronco de sauce</option>
            <option value="maple">Tronco de arce</option>
          </select>
        </div>

        <div className="logquemar">
          <div className="log bgc">asd</div>
          <div className="probabilitis bgc">asd </div>
        </div>

        <div className="mastery bgc"></div>
        <div className="product bgc"></div>
        <div className="exp bgc"></div>
        <div className="quemar bgc"></div>
      </div>
    </div>
  );
}

export default Firemaking;

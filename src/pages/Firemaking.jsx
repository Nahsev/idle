import React, { useState } from "react";
import "../styles/firemaking.css";
import TextImg from "../components/TextImg";
import Mastery from "../components/Mastery";
import Masteryexp from "../components/Masteryexp";
import { logs } from "../data/logs";
function Firemaking() {
const [selected,setSelected]= useState('')


  return (
    <div className="container">
      <div className="firemakincontainer">
        <div className="selectlog bgc">
          <select name="select" id="select" value={selected || ""}
  onChange={(e) => setSelected(e.target.value)}>
            <option value="" hidden>
              Selecciona los troncos
            </option>
            <option value="logsoak">Tronco de roble</option>
            <option value="logswillow">Tronco de sauce</option>
            <option value="maple">Tronco de arce</option>
          </select>
        </div>

        <div className="logquemar">
          <div className="log bgc">
            <TextImg img="logsnormal.png" size="big" color="blue" text="a" />
          </div>
          <div className="probabilitis bgc">
            <p>quemar</p>
            <h2>troncos normales</h2>
            {/* poner el nombre del tronco seleccionado */}
            <div className="imges">
              <TextImg
                img="preservation.svg"
                size="mid"
                color="blue"
                text="b"
              />
              <TextImg img="double.svg" size="mid" color="blue" text="c" />
            </div>
          </div>
        </div>

        <div className="mastery bgc">
          <Mastery />
        </div>
        <div className="product bgc">
          <div>
            <p>Produce:</p>
            <div className="produce">
              <TextImg img="logsnormal.png" size="mid" color="blue" text="f" />
              <TextImg img="ashes.png" size="mid" color="blue" text="g" />
            </div>
          </div>
          <div>
            <p>Tienes:</p>
            <div className="tienes">
              <TextImg img="logsnormal.png" size="mid" color="blue" text="f" />
              <TextImg img="ashes.png" size="mid" color="blue" text="g" />
            </div>
          </div>
        </div>
        <div className="exp bgc">
          <p>Otorga:</p>
          <Masteryexp selected={selected}/>
        </div>
        <div className="quemar bgc">
          <button>Quemar</button>
          <TextImg img="logsnormal.png" size="mid" color="grey" text="k" />
        </div>
      </div>
    </div>
  );
}

export default Firemaking;

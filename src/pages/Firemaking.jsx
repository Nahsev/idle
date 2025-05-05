import React, { useState } from "react";
import "../styles/firemaking.css";
import TextImg from "../components/TextImg";
import Mastery from "../components/Mastery";
import Masteryexp from "../components/Masteryexp";
import { logs } from "../data/logs";
function Firemaking() {
const [selected,setSelected]= useState('normal')

console.log(selected);

  return (
    <div className="container">
      <div className="firemakincontainer">
        <div className="selectlog bgc">
          <select name="select" id="select" value={selected || ""}
  onChange={(e) => setSelected(e.target.value)}>
            <option value="" hidden>
              Selecciona los troncos
            </option>
            
  {Object.values(logs).map((log) => (
    <option key={log.name} value={log.nombre}>
      tronco de {log.nombre}
    </option>
  ))}
          </select>
        </div>

        <div className="logquemar">
          <div className="log bgc">
            <TextImg img={logs[selected].img} size="big" color="blue" text="a" />
          </div>
          <div className="probabilitis bgc">
            <p>quemar</p>
            <h2>{selected}</h2>
            
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
              <TextImg img="orecoal.png" size="mid" color="grey" text="d" />
              <TextImg img="ashes.png" size="mid" color="grey" text="e" />
            </div>
          </div>
          <div>
            <p>Tienes:</p>
            <div className="tienes">
              <TextImg img="orecoal.png" size="mid" color="blue" text="f" />
              <TextImg img="ashes.png" size="mid" color="blue" text="g" />
            </div>
          </div>
        </div>
        <div className="exp bgc">
          <p>Otorga:</p>
          <Masteryexp selected={logs[selected]}/>
        </div>
        <div className="quemar bgc">
          <button>Quemar</button>
          <TextImg img="timer.webp" size="mid" color="blue" text="1,95 s" />
        </div>
      </div>
    </div>
  );
}

export default Firemaking;

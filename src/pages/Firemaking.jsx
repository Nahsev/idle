import React from "react";
import "../styles/firemaking.css";
import TextImg from "../components/TextImg";
import Mastery from "../components/Mastery";

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
          <div className="log bgc">
            <TextImg
              img="logsnormal.png"
              size="big"
              color="blue"
              text="33441"
            />
          </div>
          <div className="probabilitis bgc">
            <p>quemar</p>
            <h2>troncos normales</h2>{" "}
            {/* poner el nombre del tronco seleccionado */}
            <div className="imges">
            <TextImg
              img="logsnormal.png"
              size="mid"
              color="blue"
              text="33441"
            />
            <TextImg
              img="logsnormal.png"
              size="mid"
              color="blue"
              text="33441"
            /></div>
          </div>
          
        </div>

        <div className="mastery bgc">
            <Mastery/>
        </div>
        <div className="product bgc">

          <div>
            <p>Produce:</p>
            <div><TextImg
              img="logsnormal.png"
              size="mid"
              color="grey"
              text="33441"
            /><TextImg
            img="logsnormal.png"
            size="mid"
            color="grey"
            text="33441"
          /></div>
          </div>

          <div>
            <p>Tienes:</p>
            <div><TextImg
              img="logsnormal.png"
              size="mid"
              color="blue"
              text="33441"
            /><TextImg
            img="logsnormal.png"
            size="mid"
            color="blue"
            text="33441"
          /></div>
          </div>
        </div>
        <div className="exp bgc">
          <p>Otorga:</p>
          <div>
          <div><TextImg
              img="logsnormal.png"
              size="mid"
              color="grey"
              text="33441"
            /><TextImg
            img="logsnormal.png"
            size="mid"
            color="grey"
            text="33441"
          /><TextImg
          img="logsnormal.png"
          size="mid"
          color="grey"
          text="33441"
        /></div>
          </div>
        </div>
        <div className="quemar bgc">

          <button>Quemar</button>
          <TextImg
          img="logsnormal.png"
          size="mid"
          color="grey"
          text="33441"
        />
        </div>
      </div>
    </div>
  );
}

export default Firemaking;

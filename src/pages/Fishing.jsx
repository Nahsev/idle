import React from "react";
import "../styles/fish.css";
import Zone from "../components/Zone";
import { zones } from "../data/fishes";
function Fishing() {
  return (
    <div className="container">
      {zones.map((zone)=>(
        <Zone zone={zone} />
      ))}
    </div>
  );
}

export default Fishing;

import React from "react";
import Top from "./Top";
import Combate from './Combate'
import Pasiva from './Pasiva'
import NoDeCombate from './NoDeCombate'
function Aside({ player }) {
  return (

    
    <div className="aside">
      <Top/>
      <Combate/>
      <Pasiva/>
      <NoDeCombate player={player}/>
      </div>
  );
}

export default Aside;

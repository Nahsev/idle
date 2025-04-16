import React from "react";
import "../styles/pages.css";
import Tree from "../components/Tree";
function Woodcutting({player}) {
  return (<>
    
    <div className="container">
      <div className="treecontainer">
        <Tree nameTree="NormalTree" player={player}/>
        <Tree nameTree="OakTree" player={player}/>
        <Tree nameTree="WillowTree" player={player}/>
        <Tree nameTree="TeakTree" player={player}/>
        <Tree nameTree="MapleTree" player={player}/>
        <Tree nameTree="MahoganyTree"player={player} />
        <Tree nameTree="YewTree" player={player}/>
        <Tree nameTree="MagicTree" player={player}/>
        <Tree nameTree="RedwoodTree" player={player}/>
      </div>
    </div>
    </>
  );
}

export default Woodcutting;

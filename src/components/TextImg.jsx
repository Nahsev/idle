import React from 'react'
import "../styles/textImg.css";
function TextImg({img, size,color, text}) {
  return (<div className={`TextImg ${size}`}>
    <img   src={`/idle/${img}`} alt="" />
    <p className={`${color}`}>{text}</p>
    </div>
  )
}

export default TextImg
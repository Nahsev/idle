import React from 'react';
import skills from '../data/skills'
import '../styles/aside.css'
import { Link } from "react-router-dom";
function NoDeCombate({ player }) {
  

  return (
    <>
      {skills.map((skill) => (
        <Link to={`${skill.key}`} className='link' key={skill.key}>
          <div className='iconName'>
            <img src={`/idle/${skill.icon}`} alt="" />
            <p>{skill.name}</p>
          </div>
          <div>({player.skill[skill.key].lvl}/99)</div>
        </Link>
      ))}
    </>
  );
}

export default NoDeCombate;

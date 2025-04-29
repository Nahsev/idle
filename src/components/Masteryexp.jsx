import React from 'react'
import TextImg from './TextImg'
function Masteryexp({selected}) {
  return (
    <div className="stats">
    <TextImg
                      img="xp.svg"
                      size="small"
                      color="grey"
                      text={selected.exp}
                    />
                    <TextImg
                      img="mastery_header.svg"
                      size="small"
                      color="grey"
                      text="33"
                    />
                    <TextImg
                      img="mastery_pool.svg"
                      size="small"
                      color="grey"
                      text="41"
                    />
                    </div>
  )
  
}

export default Masteryexp
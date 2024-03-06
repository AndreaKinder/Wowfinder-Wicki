import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'
import React, { useState, useEffect } from 'react'
import '../css/estilos.css'

const classMap = {
    Bárbaro: "brb",
    Bardo: "brd",
    Clérigo: "clr",
    Druida: "drd",
    Luchador: "fgt",
    Mago: "mag",
    Orco: "orc",
    Pícaro: "rog",
  };



function SelectClass() {    
  const [classSelct, setClassSelect] = useState(0);
  useEffect(() => {
    console.log("Se ha renderizado la clase:" + classSelct);
    const classFile = `../assets/Classes/${classSelct}.json5`;
    console.log(classFile)

    });
  return(
    <>
      <select name="cSelect" id="cSelect" value={classSelct} 
      onChange={(e) => setClassSelect(e.target.value)}> 
          {Object.entries(classMap).map(([key, value]) => (
            <option key={key} value={value}>{key}</option>
          ))}
      </select>
    </>
    );
  }
  

export default function ClassRenderSelect() {
    return(
      <SelectClass />
  );
}

import React, { useState, useEffect } from 'react'
import '../css/estilos.css'
import ClassJS from '../js/class.js'

function ClassOptions(SelectClass){
  
  return(
    <>
      <option value="barbarian">Barbaro</option>
      <option value="bard">Bardo</option>
      <option value="cleric">Clerigo</option>
      <option value="druid">Druido</option>
      <option value="fighter">Guerrero</option>
      <option value="mage">Mago</option>
      <option value="oracle">Oraculo</option>
      <option value="rogue">Picaro</option>
    </>   
  )
}


//selecctor class for rendering
function SelectClass(){
  const [selectedClass, setSelectedClass] = useState("");
  const handleClassChange = (e) => {
    setSelectedClass(e.target.value);
  };
  console.log(selectedClass);


  return(
    <>
      <select name="classList" id="classList"
      onChange={handleClassChange}
      value={selectedClass} 
      >
        <ClassOptions />
      </select>
    </>
    )
}



function DivClassStats() {

  return(
  <div className='divRender'>
    
  </div>
  )
  }


export default function ClassComponent() {
    return(
    <>
      <SelectClass />
      <DivClassStats />
    </>
  );
}

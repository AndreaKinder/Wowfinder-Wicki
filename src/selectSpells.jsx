import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'
import '../css/estilos.css'
import React, { useState, useEffect } from 'react'
import SpellList from '../js/spellList.js'

function RenderSpell() {
  const [spellsList, setSpellsList] = useState('arcane');
  const [spellsLevel, setSpellLevel] = useState('');
  useEffect(() => {
    console.log("Se ha renderizado el hechizo: " + spellsList);
    
    SpellList(spellsList).then(data => {
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        

      }
    });
  }, [spellsList, setSpellsList]);
  return(
    <>
      <select name="spellListSelector" id="spellListSelector"
      value={spellsList}
      onChange={(s)=> setSpellsList(s.target.value)}>
        <option value="arcane">Arcano</option>
        <option value="arts">Artes</option>
        <option value="celestial">Calestial</option>
        <option value="divine">Divino</option>
        <option value="occult">Ocult</option>
        <option value="primal">Primal</option>
      </select>
      <div>
        {spellsLevel}
      </div>
    </>
  )
}

export default function SepellRenderSelect() {
    return(
        <RenderSpell />
  );
}
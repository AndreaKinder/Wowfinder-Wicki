import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs'
import React, { useState, useEffect } from 'react'
import '../css/estilos.css'
import ClassJS from '../js/class.js'


const classMap = {
    Bárbaro: "brb",
    Bardo: "brd",
    Clérigo: "clr",
    Druida: "drd",
    Luchador: "fgt",
    Mago: "mag",
    Oraculo: "orc",
    Pícaro: "rog",
  };
function SelectClass() {   
  const [classSelct, setClassSelect] = useState(classMap.Bárbaro);
  const [classHD, setClassHD] = useState('');
  const [skills, setSkills] = useState([]);
  const [maxLevel, setMaxLevel] = useState('');
  const [wealthClass, setWealthClass] = useState('');
  const [spells, setSpells] = useState([]);
  const [spellsList, setSpellsList] = useState(1);
  const [spellsFeature, setSpellFeature] = useState('');

  useEffect(() => {
    console.log("Se ha renderizado la clase: " + classSelct);
    const classFile = `../assets/Classes/${classSelct}.json5`;
    console.log(classFile); 
    ClassJS(classFile).then(data => {
      console.log(data);
      setSkills(data.skills);
      setMaxLevel(data.maxLevel);
      setWealthClass(data.wealth);
      setClassHD(data.hd);
      const classSpellObjext = [...data.features];
      setSpells(classSpellObjext);
      setSpellsList(classSpellObjext.level);
      setSpellFeature(classSpellObjext.feature);
    });
  }, [classSelct, setClassSelect, setSkills, setMaxLevel, setWealthClass, setSpells, setSpellsList]);


  return (
    <>
      <select
        name="cSelect"
        id="cSelect"
        value={classSelct}
        onChange={(e) => setClassSelect(e.target.value)}
      > 
        {Object.entries(classMap).map(([key, value]) => (
          <option key={key} value={value}>{key}</option>
        ))}
      </select>
      <div className='renderClass'>
        <p><span>Nivel máximo:</span> {maxLevel}.</p>
        <p><span>HD: </span> {classHD}</p>
        <p><span>Riqueza:</span> {wealthClass}.</p>
        <p><span>Habilidades:</span> {skills.join(', ')} .</p>
        </div>
          <h2>Hechizos por Nivel:</h2>
          <select
            name="selectLevel"
            id="selectLevel"
            value={spells.level}
            onChange={(level) => setSpellsList(level.target.value)}
          >
            {spells.map((spell, index) => {
              if (index === 0 || spell.level !== spells[index - 1].level) {
                return (
                  <option key={spell.level} value={spell.level}>
                    Nivel {spell.level}
                  </option>
                );
              }
              return null; // Omitir opciones duplicadas
            })}
          </select>

          <div className="renderClass" id='renderLevel'>
          <h3>Hechizos y Auras:</h3>
            <p>
              {spells
                .filter((spell) => parseInt(spell.level) === parseInt(spellsList))
                .map((spell, index) => (
                  <p key={spell.feature}> 
                    { spell.aura? 'Aura: '+ spell.aura : ''}
                    {spell.feature?'Hechizo: ' + spell.feature : ''}
                  </p>
                ))}
            </p>
          </div>

    </>
  );
}

export default function ClassRenderSelect() {
    return(
      <SelectClass />
  );
}

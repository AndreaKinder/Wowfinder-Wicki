import JSON5 from 'json5';

export default async function catchSpells(spellsList) {
  try {
    const response = await fetch(`../assets/SpellLists/${spellsList}.json5`);
    const json = await response.text();
    const spellListJSON = JSON5.parse(json);
    return {...spellListJSON.spells};
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
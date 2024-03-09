import JSON5 from 'https://unpkg.com/json5@2/dist/index.min.mjs';

export default async function renderJSON() {
  try {
    const classFile = '../assets/Classes/barbarian.json5';
    const response = await fetch(classFile);
    const jsonString = await response.text();
    const ClassJSON = JSON5.parse(jsonString);
    return {...ClassJSON};
  } catch (err) {
    console.error("Error reading file:", err);
    return null;
  }
}

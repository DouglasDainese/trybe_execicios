const read = require('fs').promises.readFile;

const readSimpsonData = async () => {
  const data = await read('./simpsons.json')
  const result = JSON.parse(data)
  return result;
}

const exibePersonagens = async () => {
  const person = await readSimpsonData();
  person.map((person) => console.log(`${person.id} - ${person.name}`))
};

exibePersonagens()


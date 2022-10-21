const string = process.argv[2]; // .argv spécifique à node (= argument variable avec chemin vers node puis chemin vers le script)

const array = string.split(","); // source
// console.log(array);

const numbers = []; // destination

for (let i = 0; i < array.length; i++) {
  // loop code block
  const candidate = array[i]; // type string
  // objective: convert candidate into number
  const number = parseInt(candidate, 10);
  numbers.push(number);
}

console.log(numbers);

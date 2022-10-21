const input = process.argv[2];

const array = input.split(",");
let numbers = [];
let value = 0;

for (let i = 0; i < array.length; i++) {
  const candidate = array[i];
  const number = parseInt(candidate, 10);
  numbers.push(number);
  value += numbers[i];
}

console.log("Sum is equal to " + value);

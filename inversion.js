const input = process.argv[2];

const values = input.split(",");

let min = 0;
let max = values.length - 1;

while (min < max) {
  let tmp = values[max];
  values[max] = values[min];
  values[min] = tmp;
  min++;
  max--;
}

console.log(values);


const numbers = [5, 2, 9, 1, 5, 6];

function compareDescending(a, b) {
  return b - a;
}

numbers.sort(compareDescending);

console.log(numbers);

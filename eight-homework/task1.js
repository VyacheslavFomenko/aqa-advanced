const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (let i in numbers) {
  if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  } else if (numbers[i] === 0) {
    zeroCount++;
  }
}
console.log(
  `Кількість позитивних чисел: ${positiveCount}\n Кількість негативних чисел: ${negativeCount}\n Кількість нульових чисел: ${zeroCount} \n`,
);

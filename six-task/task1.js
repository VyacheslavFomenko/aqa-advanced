function rectangleAreaDecFunc(width, height) {
  return width * height;
}

let rectangleAreaExpFunc = function rectangleAreaDecFunc(width, height) {
  return width * height;
};

let rectangleAreaArrowFunc = (width, height) => {
  return width * height;
};

console.log(`function declaration: ${rectangleAreaDecFunc(5, 10)}`);
console.log(`function expression: ${rectangleAreaExpFunc(5, 10)}`);
console.log(`arrow function: ${rectangleAreaArrowFunc(5, 10)}`);

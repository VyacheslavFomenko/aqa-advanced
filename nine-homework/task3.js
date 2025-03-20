let car1 = {
  brand: "VolksWagen",
  model: "Taureg",
  year: 2025,
};

let car2 = {
  brand: "Mercades",
  model: "x5",
  year: 2022,
};

let car3 = {...car1, ...car2};

console.log(car3);
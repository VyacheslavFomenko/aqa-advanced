let users = [
  {
    name: 'John',
    email: 'john@doe.com',
    age: 17,
  },
  {
    name: 'Tom',
    email: 'tom@doe.com',
    age: 18,
  },
];

for (const user of users) {
  for (const key in user) {
    console.log(`${key} - ${user[key]}`);
  }
}

let person = {
    firstName: "John",
    lastName: "Doe",
    age: 25,
};

person.email = "john@doe.com";

delete person.age;

console.log(person);
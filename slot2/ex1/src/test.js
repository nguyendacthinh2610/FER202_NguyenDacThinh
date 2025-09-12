const results = (a, b) => a + b;
console.log(results(1, 2));

let square = num => { return num * num };
console.log(square(5));
console.log(square(8));

let sayHello = () => {
    console.log("Hello there!");
}
sayHello();
let greet = (name, timeOfDay) => {
    console.log(`Good ${timeOfDay}, ${name}!`);
};

greet('Alice', 'morning');
// Output: Good morning, Alice!

greet('Bob', 'evening');
// Output: Good evening, Bob!

let person = {
    name: "John",
    age: 30,
    greet: function () { console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old`) }
};
person.greet('Thinh', 20);
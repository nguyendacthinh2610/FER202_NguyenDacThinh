const people = [
  { name: "Ann", age: 19 },
  { name: "Bob", age: 12 },
  { name: "Cathy", age: 15 },
  { name: "David", age: 22 },
  { name: "Eva", age: 13 }
];

// Cách 1: filter -> map -> forEach
const teens = people
  .filter(person => person.age >= 13 && person.age <= 19).sort((a, b) => a.age - b.age)
  .map(person => `${person.name} (${person.age})`);

teens.forEach(str => console.log(str));
console.log(`có ${teens.length} teens`);

// Cách 2: in bằng for...of (không cần biến trung gian)
for (const str of people
  .filter(p => p.age >= 13 && p.age <= 19)
  .map(p => `${p.name} (${p.age})`)) {
  console.log(str);
}



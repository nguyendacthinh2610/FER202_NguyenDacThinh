// In các phần tử của mảng bằng 3 cách: for, forEach, map
const listInt = [1, 2, 3, 4, 5];

// 1. Dùng vòng lặp for
console.log('Dùng for:');
for (let i = 0; i < listInt.length; i++) {
	console.log(listInt[i]);
}

// 2. Dùng forEach
console.log('Dùng forEach:');
listInt.forEach(function(item) {
	console.log(item);
});

// 3. Dùng map
console.log('Dùng map:');
listInt.map(function(item) {    
	console.log(item);
});

//4.In các phần tử chẵn trong mãng
console.log('In số chẵn trong mảng:');  
listInt.forEach(function(item) {
    if(item % 2 === 0) {
        console.log(item);
    }
});
//5.tính tổng các phần tử trong mảng
const sum = listInt.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log('Tổng các phần tử trong mảng là: ' + sum);          
//6. tạo 1 mảng people gồm id,name,age
const people = [
    { id: 1, name: 'Alice', age: 25 },
    { id: 2, name: 'Bob', age: 30 },    
    { id: 3, name: 'Charlie', age: 35 },
    { id: 4, name: 'Thinh', age: 20 }

];
//duyệt qua mảng
people.forEach(function(person) {
    console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
});
//lọc qua danh sách, in ra age>20
const filteredPeople = people.filter(person => person.age > 20);
console.log('People with age > 20:');
filteredPeople.forEach(person => {
    console.log(`ID: ${person.id}, Name: ${person.name}, Age: ${person.age}`);
});
//tính tổng age
const totalAge = people.reduce((total, person) => total + person.age, 0);
console.log('Total age of all people: ' + totalAge);

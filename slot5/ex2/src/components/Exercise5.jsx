export function Exercise5() {
    //tạo mảng people (name, age), lọc những người 13-19 tuổi
    const people = [
        { name: "Alice", age: 22 },
        { name: "Bob", age: 15 },
        { name: "Charlie", age: 17 },
        { name: "David", age: 12 },
        { name: "Eve", age: 19 },
        { name: "Frank", age: 25 }
    ];
    const teenagers = people.filter(person => person.age >= 13 && person.age <= 19);
    console.log(teenagers);
    
  return (
    <div>
        <h2>Exercise5</h2>
        <p>Teenagers (age 13-19):</p>
        <ul>
            {teenagers.map((teen, index) => (
                <li key={index}>{teen.name} - {teen.age} years old</li>
            ))}
        </ul>
    </div>
  );
}


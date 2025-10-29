// Khai báo đối tượng person
const person = {
  name: "Costas",
  address: {
    street: "Lalaland 12"
  }
};

// Destructuring với giá trị mặc định
const { street, city = "Unknown City" } = person.address;

// In kết quả ra console
console.log(street); // Lalaland 12
console.log(city);   // Unknown City

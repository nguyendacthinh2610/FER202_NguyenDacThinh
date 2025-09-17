const double = (x) => x * 2;
console.log(double(4)); // 8
// cach lam khac    
const double2 = x => {return x*2};
console.log(double2(5)); // 10
// isEven()
const isEven = (num) => num % 2 === 0;
console.log(isEven(4)); // true
console.log(isEven(5)); // false
// cach lam khac
const isEven2 = num => {return num % 2 === 0};  
console.log(isEven2(4)); // true
console.log(isEven2(5)); // false
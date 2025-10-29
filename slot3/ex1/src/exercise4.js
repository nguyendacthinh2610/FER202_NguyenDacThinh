const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// destructuring: lấy phần tử đầu tiên, bỏ qua phần tử thứ 2, lấy phần tử thứ 3 (mặc định 0), còn lại gom vào restAges
const [first, , third = 0, ...restAges] = ages;

console.log(first);     // 33
console.log(third);     // 20
console.log(restAges);  // còn lại
//kiểm tra số đầu tiên có phải là số chẵn không
console.log(first % 2 === 0); // false  
// lọc ra các số chẵn từ mảng restAges
const evenAges = restAges.filter(age => age % 2 === 0);
console.log(evenAges); // [16, 54, 44, 64, 32]
//cách khác
// destructuring lấy 2 phần tử đầu trước, sau đó tiếp tục destructuring phần còn lại
const [first2, , ...rest] = ages;
const [third2 = 0, ...restAges2] = rest;

console.log(first);     // 33
console.log(third);     // 20
console.log(restAges);  // [16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

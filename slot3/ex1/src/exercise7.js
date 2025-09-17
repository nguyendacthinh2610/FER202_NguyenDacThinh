const companies = [
  { name: "Company One", category: "Finance", start: 1981, end: 2004 },
  { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
  { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
  { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
  { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
  { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
  { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
  { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
  { name: "Company Nine", category: "Retail", start: 1981, end: 1989 }
];


// Tạo company0New với start += 1 mà không làm đổi companies[0]
const company0New = { ...companies[0], start: companies[0].start + 1 };

console.log("companies[0]:", companies[0]);     // giữ nguyên
console.log("company0New:", company0New);       // bản sao đã thay đổi

// Hàm concatAll sử dụng rest để nhận nhiều mảng
function concatAll(...arrays) {
  return [].concat(...arrays); // spread để gộp
}

// Test concatAll
console.log(concatAll([1, 2], [3], [4, 5]));

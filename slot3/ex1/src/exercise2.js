//Nhận số lượng tham số bất kỳ bằng ...args.
function sum(...args) {
    //Sử dụng reduce để tính tổng các tham số.
    //•	Viết sum(...nums) trả về tổng các số hợp lệ (bỏ NaN, string không số).
    return args.reduce((total, num) => {
        //Kiểm tra nếu num là số hợp lệ.
        if (typeof num === 'number' && !isNaN(num)) {
            return total + num; //Cộng num vào tổng.
        }
        return total; //Nếu không hợp lệ, trả về tổng hiện tại.
    }, 0); //Khởi tạo tổng ban đầu là 0.
}
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 'a', 3));   // 4
console.log(sum(1, NaN, 3)); // 4
console.log(sum()); // 0
//Viết avg(...nums) trả về trung bình (2 chữ số thập phân), nếu rỗng trả 0.
function avg(...args) {
    if (args.length === 0) return 0; //Nếu không có tham số, trả về 0.
    const validNumbers = args.filter(num => typeof num === 'number' && !isNaN(num)); 
    if (validNumbers.length === 0) return 0; //Nếu không có số hợp lệ, trả về 0.
    const total = validNumbers.reduce((sum, num) => sum + num, 0);
    const average = total / validNumbers.length; //Tính trung bình.
    return parseFloat(average.toFixed(2)); //Làm tròn đến 2 chữ số thập phân.
}
console.log(avg(1, 2, 3)); // 2.00
console.log(avg(1, 'a', 3)); // 2.00
console.log(avg(1, NaN, 3)); // 2.00
console.log(avg()); // 0
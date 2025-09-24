export function Exercise3() {
   

    const person = {
        name: "Costas",
        address: {
            street: "Lalaland 12"
        }
    };
// 1.	Destructuring object lồng nhau – lấy địa chỉ
// Mục tiêu: Lấy thuộc tính lồng nhau + giá trị mặc định.
// Yêu cầu:
// •	Cho person như dưới. Dùng destructuring để lấy street, city (mặc định "Unknown City" nếu không có).
// •	In: street, city.
// Ràng buộc: Không truy cập kiểu person.address.street trực tiếp.
    const { address: { street, city = "Unknown City" } } = person;
    console.log(street, city);


    return (
        <div>
            <h2>Exercise3</h2>
            <p>1. Destructuring object lồng nhau – lấy địa chỉ</p>
            <p>street: {street}, city: {city}</p>
        </div>
    );
}



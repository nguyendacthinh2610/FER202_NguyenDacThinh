export function Exercise4() {
    const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
    //•	Dùng destructuring để lấy first, bỏ qua phần tử thứ 2, lấy third (mặc định 0 nếu không tồn tại), và restAges cho phần còn lại.
	//In: first, third, restAges.
    const [first, , third = 0, ...restAges] = ages;
    console.log(first, third, restAges);

  return (
    <div>
        <h2>Exercise4</h2>
        <p>Destructuring array – lấy tuổi</p>
        <p>first: {first}, third: {third}, restAges: {restAges.join(", ")}</p>
    </div>
  );
}


export function Exercise2() {
  // 1) Tạo list số nguyên
  const numbers = [1, 2, 3, 4, 5, 10, 15, 20];

  // 2) Tính tổng
  const sum = numbers.reduce((acc, curr) => acc + curr, 0);

  // 3) Tính trung bình
  const average = numbers.length ? sum / numbers.length : 0;

  // 4) Chuỗi tên, in theo thứ tự tăng dần
  const names = ["An", "Thinh", "Triet", "Khang", "Em"];
  names.sort();

  // 5) Mảng people
  const people = [
    { id: 1, name: "An", age: 20, grade: 8.5 },
    { id: 2, name: "Thinh", age: 21, grade: 7.5 },
    { id: 3, name: "Triet", age: 22, grade: 9.0 },
    { id: 4, name: "Khang", age: 23, grade: 6.5 },
    { id: 5, name: "Em", age: 24, grade: 8.0 },
    { id: 6, name: "Binh", age: 25, grade: 7.0 },
    { id: 7, name: "Cuong", age: 26, grade: 9.5 },
    { id: 8, name: "Duc", age: 27, grade: 6.0 },
    { id: 9, name: "Hung", age: 28, grade: 8.8 },
    { id: 10, name: "Long", age: 29, grade: 7.8 },
  ];

  // Lọc grade >= 7.5 và sắp xếp giảm dần
  const goodStudents = people
    .filter(p => p.grade >= 7.5)
    .sort((a, b) => b.grade - a.grade);

  // Điểm trung bình tất cả SV
  const totalGrade = people.reduce((acc, curr) => acc + curr.grade, 0);
  const averageGrade = people.length ? totalGrade / people.length : 0;

  // Style gọn gàng cho bảng
  const tableStyle = {
    borderCollapse: "collapse",
    marginTop: "10px",
    minWidth: "480px",
    color: "black",
    border: "1px solid #333",
  };
  const thtdStyle = {
    border: "1px solid black",
    padding: "5px",
    textAlign: "left"
  };
  return (
    <div>
      <h2>Exercise2</h2>

      <p>In mảng số nguyên</p>
      <ul>
        {numbers.map((num, index) => (
          <li key={index}>phần tử thứ {index + 1} - {num}</li>
        ))}
      </ul>

      <p>Tổng các số trong list: <b>{sum}</b></p>
      <p>Giá trị trung bình các phần tử trong mảng: <b>{average.toFixed(2)}</b></p>

      <p>Danh sách tên theo thứ tự tăng dần:</p> <ul> {names.map((name, index) => (<li key={index}>{name}</li>))} </ul>

      <p>Danh sách các sinh viên dưới dạng bảng</p>
      <table style={tableStyle}>

        <thead>
          <tr>
            <th style={thtdStyle}>ID</th>
            <th style={thtdStyle}>Name</th>
            <th style={thtdStyle}>Age</th>
            <th style={thtdStyle}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {people.map(person => (
            <tr key={person.id}>
              <td style={thtdStyle}>{person.id}</td>
              <td style={thtdStyle}>{person.name}</td>
              <td style={thtdStyle}>{person.age}</td>
              <td style={thtdStyle}>{person.grade.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td style={thtdStyle} colSpan={3}><b>Điểm trung bình (tất cả SV)</b></td>
            <td style={thtdStyle}><b>{averageGrade.toFixed(2)}</b></td>
          </tr>
        </tfoot>
      </table>

      <p style={{ marginTop: "14px" }}>SV giỏi (grade ≥ 7.5), sắp xếp giảm dần:</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={thtdStyle}>ID</th>
            <th style={thtdStyle}>Name</th>
            <th style={thtdStyle}>Age</th>
            <th style={thtdStyle}>Grade</th>
          </tr>
        </thead>
        <tbody>
          {goodStudents.map(s => (
            <tr key={s.id}>
              <td style={thtdStyle}>{s.id}</td>
              <td style={thtdStyle}>{s.name}</td>
              <td style={thtdStyle}>{s.age}</td>
              <td style={thtdStyle}>{s.grade.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

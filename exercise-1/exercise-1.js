function repeatString(string, num) {
  if (!string || !num) return;
  let result = "";
  for (let i = 0; i < num; i++) {
    result += string;
  }
  console.log(result);
}

repeatString("hey", 3);

// function abc(String, num) {
//   let result ="";
//   const arr = Array.from({length: num}, (_, i) => i + 1);
//   arr.forEach(function() {
//     result += String;
//   })
//   console.log(result);
// }
// abc("hey",3)

// use reduce
// function repeatString(str, num) {
//   // Tạo một mảng mới chứa chuỗi ban đầu được lặp lại num lần
//   const arr = Array(num).fill(str);
//   // Sử dụng reduce để ghép các chuỗi lại với nhau
//   const result = arr.reduce((acc, curr) => acc + curr, "");
//   return result;
// }



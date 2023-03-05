function convertNumber(number) {
    if (number === 0) {
      return "0";
    }
    let binaryNumber = "";
    while (number > 0) {
      let remainder = number % 2;
      number = Math.floor(number / 2);
      binaryNumber += remainder;
    }
    return binaryNumber.split("").reverse().join("");
}
console.log(convertNumber(47));

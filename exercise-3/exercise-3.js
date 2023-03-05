function removeFromArray(array, deleteItem) {
    return array.filter(function (value) {
      return value !== deleteItem;
   });
}
// Cách 2
// function removeFromArray(array, deleteItem) {
//   for (let i = 0; i < array.length; i++) {
//     if (deleteItem === array[i]) {
//       array.splice(i, 1);
//     }
//   }
//   return array;
// }

console.log(removeFromArray([1,3,2,3,4,3], 3));
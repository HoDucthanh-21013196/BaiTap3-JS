function checkUsersValid(goodUsers) {
  // Trả về một hàm mới để kiểm tra tính hợp lệ của các người dùng được gửi đến
  return function(submittedUsers) {
    // Kiểm tra tính hợp lệ của tất cả các người dùng được gửi đến
    return submittedUsers.every(function(submittedUser) {
      // Kiểm tra xem người dùng này có nằm trong danh sách người dùng hợp lệ không
      return goodUsers.some(function(goodUser) {
        return goodUser.id === submittedUser.id;
      });
    });
  };
}


var goodUsers = [{ id: 1 }, { id: 2 }, { id: 3 }];
var testAllValid = checkUsersValid(goodUsers);
console.log(testAllValid([{ id: 2 }, { id: 1 }, {id: 3 }, {id: 3}]));


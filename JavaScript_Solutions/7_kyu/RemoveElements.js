//https://www.codewars.com/kata/563089b9b7be03472d00002b/train/javascript

Array.prototype.remove_ = function (integer_list, values_list) {
  let array = [];
  for (let index = 0; index < values_list.length; index++) {
    for (let j = 0; j < integer_list.length; j++) {
      if (values_list[index] !== integer_list[j]) {
        array.push(integer_list[j]);
      }
    }
    if (index < values_list.length - 1) {
      integer_list = array;
      array = [];
    }
  }
  return array;
};

l = new Array();

integer_list = [1, 1, 2, 3, 1, 2, 3, 4];
values_list = [1, 3];
console.log(l.remove_(integer_list, values_list)); //expected  [2, 2, 4];

l = new Array();
integer_list = [1, 1, 2, 3, 1, 2, 3, 4, 4, 3, 5, 6, 7, 2, 8];
values_list = [1, 3, 4, 2];
console.log(l.remove_(integer_list, values_list)); //expected  [5, 6, 7, 8];

l = new Array();
integer_list = [8, 2, 7, 2, 3, 4, 6, 5, 4, 4, 1, 2, 3];
values_list = [2, 4, 3];
console.log(l.remove_(integer_list, values_list)); //expected  [8, 7, 6, 5, 1];

l = new Array();
integer_list = [4, 4, 2, 3];
values_list = [2, 2, 4, 3];
console.log(l.remove_(integer_list, values_list)); //expected []

l = new Array();
integer_list = [];
values_list = [2, 2, 4, 3];
console.log(l.remove_(integer_list, values_list)); //expected []

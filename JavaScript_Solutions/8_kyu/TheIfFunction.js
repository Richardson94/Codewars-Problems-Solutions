//https://www.codewars.com/kata/54147087d5c2ebe4f1000805

function _if(bool, func1, func2) {
  return bool ? func1() : func2();
}

console.log(
  _if(
    false,
    function () {
      console.log('True');
    },
    function () {
      console.log('false');
    }
  )
);

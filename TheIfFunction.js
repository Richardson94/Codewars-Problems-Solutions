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
// Logs 'True' to the console.)

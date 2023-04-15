//https://www.codewars.com/kata/61eeb6e7577f050037b17a2d

function smile(text) {
  return text.replace(/(?<=[:;=][-~]?)[([]/g, (x) => (x == '(' ? ')' : ']'));
}

console.log(smile('Howdy :(')); //'Howdy :)'
console.log(smile('Never be sad =[')); //'Never be sad =]'
console.log(smile("It's been raining all day ;-(")); //'It\'s been raining all day ;-)'
console.log(smile('My friend got married ;~[')); //'My friend got married ;~]'
/* Multiple Smiles  */
console.log(smile('JwU ;] NZ =] mY =~ U =-) bRzx ;- c')); //JwU ;] NZ =] mY =~) U =-) bRzx ;-) c
console.log(smile('Funny smileys: ;~[ :( :-( :~[ :-[')); //'Funny smileys: ;~] :) :-) :~] :-]'
/*  Nothing Change   */
console.log(smile('The list of positive numbers is [1,2,3,4...]')); //'The list of positive numbers is [1,2,3,4...]'
console.log(smile('(((-)(((-)))(-)))')); //'(((-)(((-)))(-)))'

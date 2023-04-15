//https://www.codewars.com/kata/52742f58faf5485cae000b9a

function formatDuration(seconds) {
  const minute = 60;
  const hour = 3600;
  const day = 86400;
  const year = 31536000;
  let value = '';

  if (seconds == 0) {
    return 'now';
  }
  if (seconds >= year) {
    //Year
    value += Math.floor(seconds / year);
    Math.floor(seconds / year) > 1 ? (value += ' years') : (value += ' year');
    seconds = seconds % year;
    if (seconds > 0) {
      seconds > 60 ? (value += ', ') : (value += ' and ');
    }
  }
  if (seconds >= day) {
    //Year
    value += Math.floor(seconds / day);
    Math.floor(seconds / day) > 1 ? (value += ' days') : (value += ' day');
    seconds = seconds % day;
    if (seconds > 0) {
      seconds > 60 ? (value += ', ') : (value += ' and ');
    }
  }
  if (seconds >= hour) {
    //Hour
    value += Math.floor(seconds / hour);
    Math.floor(seconds / hour) > 1 ? (value += ' hours') : (value += ' hour');
    seconds = seconds % hour;
    if (seconds > 0) {
      seconds > 60 && seconds % minute != 0
        ? (value += ', ')
        : (value += ' and ');
    }
  }
  if (seconds >= minute) {
    //Minute
    value += Math.floor(seconds / minute);
    Math.floor(seconds / minute) > 1
      ? (value += ' minutes')
      : (value += ' minute');
    seconds = seconds % minute;
    if (seconds > 0) {
      seconds > 60 ? (value += ', ') : (value += ' and ');
    }
  }
  if (seconds > 0) {
    //Seconds
    value += seconds;
    seconds > 1 ? (value += ' seconds') : (value += ' second');
  }
  return value;
}

console.log(formatDuration(0)); // "1 second")
console.log(formatDuration(62)); // "1 minute and 2 seconds"
console.log(formatDuration(120)); // "2 minutes"
console.log(formatDuration(3600)); // "1 hour"
console.log(formatDuration(3662)); // "1 hour, 1 minute and 2 seconds"
console.log(formatDuration(132030240));

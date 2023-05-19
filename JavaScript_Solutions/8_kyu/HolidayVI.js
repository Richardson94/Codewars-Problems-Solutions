function canMakeItToPontoon(
  sharkDistance,
  sharkSpeed,
  pontoonDistance,
  youSpeed,
  dolphin
) {
  if (dolphin) {
    sharkSpeed /= 2; // Halve the shark's speed if there's a dolphin
  }

  // Calculate the time it takes for you and the shark to reach the pontoon
  const yourTime = pontoonDistance / youSpeed;
  const sharkTime = sharkDistance / sharkSpeed;

  if (yourTime < sharkTime) {
    return 'Alive!';
  } else {
    return 'Shark Bait!';
  }
}

// Example usage:
const sharkDistance = 500; // Distance from the shark to the pontoon in meters
const sharkSpeed = 10; // Shark's speed in meters/second
const pontoonDistance = 800; // Distance you need to swim to safety in meters
const youSpeed = 5; // Your swimming speed in meters/second
const dolphin = true; // Whether there's a dolphin to help

const result = canMakeItToPontoon(
  sharkDistance,
  sharkSpeed,
  pontoonDistance,
  youSpeed,
  dolphin
);
console.log(result); // Output: "Alive!" or "Shark Bait!"

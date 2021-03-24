// Checking if a number is big
const bigNumber = function (number) {
   return number > 100;
};

console.log(bigNumber(100));
console.log(bigNumber(200));
console.log(bigNumber(10));
console.log(bigNumber(20));

// Bouncer at a club
const bouncerBrenda = function (maxPeople, currentPeople, ageWaitingPeople) {
   if (ageWaitingPeople < 18) {
      return "This is a club for adults. You can't come in.";
   }
   if (currentPeople >= maxPeople) {
      return "The max amount of people are in the club. You've to wait.";
   } else {
      return "You can come in.";
   }
};

console.log(bouncerBrenda(100, 0, 15));
console.log(bouncerBrenda(100, 0, 18));
console.log(bouncerBrenda(100, 50, 18));
console.log(bouncerBrenda(100, 100, 25));
console.log(bouncerBrenda(100, 105, 25));

// Calculating the average
const averageNumber = function (
   number1, number2, number3, number4, number5) {
   const total = number1 + number2 + number3 + number4 + number5;
   const average = total / 5;
   const averageRounded = Math.round(average);
   return averageRounded;
};

console.log(averageNumber(1, 1, 1, 1, 1)); // 1
console.log(averageNumber(1, 2, 3, 4, 5)); // 3
console.log(averageNumber(1,10, 25, 40, 60)); // 27.2 or rounded 27

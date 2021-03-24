const add = function(number1, number2) {
   const sum = number1 + number2;
   if (sum > 10) {
   return sum;
}
return "too low";
};

const result = add(4, 5);
console.log(result);
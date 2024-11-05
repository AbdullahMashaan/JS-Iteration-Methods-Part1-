//You are given an array of numbers. Your task is to use iteration methods to filter and transform this array.

const numbers = [10, 13, 20, 25, 38, 35, 40];



/*****************************************************************
Part 1: Filtering

Write code to perform the following tasks using the filter method:
1) Create a new array containing numbers that are greater than or equal to 25.
2) Create a new array containing numbers that are divisible by 5.
******************************************************************/


numbersGreaterOrEqualthan25 = numbers.filter (function (num1){
    return num1 >= 25;
});



const numbersGreaterOrEqualThan25 = numbers.filter (num1) => {
  if (num1 >= 25) return true;
  else return false;
}


const numbersGreaterOrEqualThan25 = numbers.filter(num1 => num1 >= 25);




numbersDivisibleByFive = numbers.filter (function (num2){
    return num2 % 5 === 0;
});

const numbersDivisibleByFive = numbers.filter( num2 => num2 % 5 === 0);





/*****************************************************************
Part 2: Mapping

Write code to perform the following tasks using the map method:

3) Create a new array that contains each number squared.
4) Create a new array that contains each number multiplied by 2.
******************************************************************/

const numbers = [10, 13, 20, 25, 38, 35, 40];

squares = numbers.map (function (num3) {
    return num3**2;

});
const squared = numbers.map ((num) => num **2);




numberByTwo = numbers.map (function (num4) {
    return num4*2;

});

const numberByTwo = numbers.map ((num) => num*2);


/*****************************************************************
Part 3: Combining Filtering and Mapping

Combine the filter and map methods to perform the following tasks:

5) Filter the numbers that are greater than or equal to 20 and then square each of them.
6) Filter the numbers that are divisible by 5 and then multiply each of them by 3.
******************************************************************/




const numbers = [10, 13, 20, 25, 38, 35, 40];

const largerThanTwenty = numbers.filter ( (num) => num > 20);
const largerThanTwentySquared = largerThanTwenty.map( (num) => num**2);








const numbersGreaterOrEqThan20Squared = numbers
.filter(function(num5) {
    return num5 >= 20;
  })
  .map(function(num5) {
    return num5 ** 2;
  });




  const numbersDivisibleByFiveMultipliedBy3 = numbers
  .filter(function(num6) {
    return num6 % 5 === 0;
  })
  .map(function(num6) {
    return num6 * 3;
  });


const divBy5MultBy3 = numbers.filter ((num) => num % === 0).map ((num) => num * 3);

console.log(divBy5MultBy3);





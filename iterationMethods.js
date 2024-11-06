const numbers = [10, 13, 20, 25, 38, 35, 40];

greaterOrEqThan25 = numbers.filter (function (num) { 
    return num >= 25;
})

console.log (greaterOrEqThan25);

divBy5 = numbers.filter (function (num) {
    return num % 5 === 0;
})

console.log (divBy5);


squared = numbers.map (function (num){
    return num **2;
})

console.log (squared);

multipliedBy2 = numbers.map (function (num){
    return num * 2;
})

console.log (multipliedBy2);


greaterOrEqThan20 = numbers.filter (function (num){
    return num >= 20;
})


greaterOrEqThan20Squared = greaterOrEqThan20.map (function (num){
    return num**2;
})

console.log (greaterOrEqThan20Squared);


divBy5 = numbers.filter (function (num){
    return num %5 === 0;
})

divBy5MultipiedBy3 = divBy5.map (function(num){
    return num * 3;
})

console.log (divBy5MultipiedBy3);



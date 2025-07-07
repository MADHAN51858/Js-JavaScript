const score = 500
// console.log(score); => 400 (only gives value)

const scoree = new Number(400)
// console.log(scoree); [Number: 400] (gives an Number object, with properties)

console.log(typeof scoree.toString());
// console.log(scoree.toString().length);
// console.log(scoree.toFixed(2)); //For precision values

const nums = 100.73432
// console.log(nums.toPrecision(3)); =>101 (round .7 to 1)
// console.log(nums.toPrecision(4)); =>100.7

const numms = 1000000
// console.log(numms.toLocaleString()); =>in us standards => 1,000,000

console.log(numms.toLocaleString('en-IN')); //=>In indian standards => 10,00,000

// *************************** Math *****************************************

// console.log(Math); //it returns object [Math] {}
// try in browser console: 
//             ﻿
// console.log(Math);
// Math {abs: ƒ, acos: ƒ, acosh: ƒ, asin: ƒ, asinh: ƒ, …}
// E: 2.718281828459045
    // etc....

    const min = 10
    const max = 20
    console.log(
        // Math.abs(-Value) -ve to positive
        // Math.round(5.5)) =>6
        // Math.ceil(5.5)) =>6 
        // Math.floor(5.5) =>5
        // Math.min(4,3,5,6,8)) => 3 
        // Math.max(4,3,5,6,8)) => 8 
        
        // Math.random() => 0 to 1 
        // Math.random()*10=> 0 to 9.999
        // (Math.random()*10)+1 => 1 to 9.999 (min 1 is gauranted)

        // (Math.random() * (min - max + 1)) + min  =>gives b/w 10 and 20
    );

// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 <= 1);

// console.log("2" > 1); =>true
// console.log("02" > 1); =>true

// console.log(null > 0); =>false
// console.log(null == 0); =>false
// console.log(null >= 0); =>true

/* 
The reason is that an equality check == and comparisions > < >= <= work differently.

Comparisions convert null to a number, treating it as 0.
(now null is equal to 0) That's why null >= 0 is true  and
 null > 0 is false
*/ 
// console.log(undefinned > 0); =>false
// console.log(undefinned < 0); =>false
// console.log(undefinned == 0); =>false
// console.log(undefinned >= 0); =>false

// console.log("2" == 2); true

// Strict Check =>  ===


// console.log("2" === 2); false

// Note : Always write Clean and Readable Code don't write like above 
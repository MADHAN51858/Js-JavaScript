// ******************* Date Object **********************************


let myDate = new Date()

// console.log(typeof myDate); //Object


// console.log(myDate); => 2025-07-07T10:02:28.268Z
// console.log(myDate.toString()); => Mon Jul 07 2025 10:03:34 GMT+0000 (Coordinated Universal Time)

//  console.log(myDate.toDateString()); Mon Jul 07 2025
//  console.log(myDate.toLocaleString()); 7/7/2025, 10:04:28 AM
//  console.log(myDate.toLocaleString()); 7/7/2025, 10:04:28 AM

//months start from 0 in Date

// let newDate = new Date(2025, 1, 23)  
// console.log(newDate);  2025-02-23T00:00:00.000Z

// let newDate = new Date(2025, 1, 23,5,3)  
// console.log(newDate);  2025-02-23T05:03:00.000Z

// let newDate = new Date("2025-04-19") us standards   (yyyy-mm-dd)

let newDate = new Date("04-19-2025")  //indian (mm-dd-yyyy)
// console.log(newDate.toLocaleString()); 4/19/2025, 12:00:00 AM


// ************************* Time Stamps *****************************

let myTime = Date.now()

console.log(myTime); //1751883273057 (in milli seconds)

console.log(Math.floor(myTime/1000)); // (in seconds ) Interview Questions

console.log(newDate.getDay());
console.log(newDate.getMonth()+1);

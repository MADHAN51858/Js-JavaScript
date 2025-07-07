// created in the Heap

let arr = [10,20,30,40]

// console.log(arr[0]); //10

// let arr1 = arr //Shallow copy

let arr1 = structuredClone(arr) //deep copy

arr.push(50)
arr.pop()

arr.unshift(50) //append to start 
arr.shift()  //delete from start 
//These both are expensive operations due to shifting of all the data value indexs

arr.includes(10) // true 

arr.indexOf(10) // 0

let newStrArr = arr.join()

// console.log(newStrArr); //10,20,30,40
// console.log(typeof newStrArr); //String

// ********************* slice and splice **************************

// slice returns new array when it is used , But the 
// The splice will split the original array into two parts and returns the one part of the splited part array as output

let array = [10,20,30,40]

const array1 = array.slice(1,3)
// console.log(array);  [ 10, 20, 30, 40 ]
// console.log(array1);  [ 20, 30 ]


const array2 = array.splice(1,3)
// console.log(array);  [ 10 ]
// console.log(array2);  [ 20, 30, 40 ]


// some other methods like:


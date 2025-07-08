/*
const arrr = [10,20,30,40,50]

const value = arrr.forEach((item) => {
    console.log(item);
})

console.log(value); //undefined 
// (i.e forEach doesn't return anything), but sometimes we need to return somevalues of the arrays 
*/

// s0, fot that use filter



// ***************  filter is same as  forEach, but filter cann return values
//it's like true and false game on the items(true gets returned)
// Select certain elements(for returning only few array elem which obey the conditions)

/*
const arrr = [10,20,30,40,50]

let aa= arrr.filter((num) => num>10 )   //filter returns values 
            or
            {
                return  num>10 
            })
 
          
console.log(aa); //[ 20, 30, 40, 50 ]
*/


/*
// ****** It can be done using forEach also by using condition statements
// ,by pushing the return values to any empty array to store it

const arr = []

const arrr = [10,20,30,40,50]

arrr.forEach((item) => {
    if(item > 24){
        arr.push(item)
    }
})
console.log(arr); //[ 30, 40, 50 ]
*/


// *************map()********************************

// Transform each element (for returning full array with changes(all are true))

const arrr = [10,20,30,40,50]

const aar = arrr.map((val) => val+10) //same as filter, map also returns

// console.log(aar); //[ 20, 30, 40, 50, 60 ]


/*
const arr = [1, 2, 3, 4, 5];

const result = arr.map(num => {
  if (num % 2 === 0) {
    return num * 2;
  }
});

console.log(result); // [undefined, 4, undefined, 8, undefined]
*/

/*
const result = arr.filter(num => num % 2 === 0);
console.log(result); // [2, 4]
*/

// ****************** Using both map and filter (called as chaining) **********************


/*
const result = arr
  .filter(num => num % 2 === 0)   // keep only even numbers
  .map(num => num * 2);           // then double them

console.log(result); // [4, 8]
*/
// the filter methods values passed to map method before returning,
//due to chaining 

// ************************* reduce *******************************
//reduce the array into one single value


const arr = [1, 2, 3, 4, 5];
/*
const ar = arr.reduce((accumalator, curval) => {   //accepts 2 values
    console.log(`Accumalator:  ${accumalator}, culval: ${curval} `);
<--
Accumalator:  0, culval: 1 
Accumalator:  1, culval: 2 
Accumalator:  3, culval: 3 
Accumalator:  6, culval: 4 
Accumalator:  10, culval: 5 
-->
            return accumalator + curval
},0)  //intial value of accumalator and
//  the return value is stored in accumulator untill all index all reached

console.log(ar);  // 15
*/

// it can be written in one line also

const ar = arr.reduce((acc, curval) => acc + curval,0) 
// console.log(ar);  // 15


// *********************** problem *******************************


const shoppcart = [
    {
        item: "java",
        price:299
    },
    {
        item: "python",
        price:999
    },
    {
        item: "js",
        price:199
    },
    {
        item: "cpp",
        price:250
    },
    {
        item: "c",
        price:399
    }
];

// const total = shoppcart.map((item) => item.price).reduce((acc,item) => acc+item,0)

//or use filter

const total = shoppcart.filter((item) => item.price > 1).reduce((acc,item) => acc+item.price,0)

console.log(total); //2146

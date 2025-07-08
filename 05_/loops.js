// for loop with break and continue

for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    // console.log("Detected 5");
         break //breaks the contrrol flow (loop)
  }
  // console.log(i);
}
/*
1
2
3
4
Detected 5
*/




for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    // console.log("Detected 5");
        continue; //skips the current iteration

  }
//   console.log(i);
}
/*
1
2
3
4
Detected 5
6
7
8
9
10
*/

// Maps (it's like an object, but only takes unique values)

const map = new Map()
map.set('In', "India")
map.set('USA',"United States of America")
map.set('Fr', "France")
map.set('In', "India") //duclicates are not taken

// console.log(map);
/*
Map(3) {
  'In' => 'India',
  'USA' => 'United States of America',
  'Fr' => 'France'
}
*/

for (const key of map) {
  // console.log(key);
  /*
  [ 'In', 'India' ]
[ 'USA', 'United States of America' ]
[ 'Fr', 'France' ]
 */
  
}
for (const [key,value] of map) { //destructuring array
  // console.log(key, ':-',value);
  /*
  In :- India
USA :- United States of America
Fr :- France
  */ 
}

// ********* Note:- Map is not iterateable , when using for in loop and error also ignored by node

let myObj = {
  name : "Madhu",
  role : "Developer"
}
/*
for (const [key,value] of myObj) {
  
console.log(key,":-",value); //myObj is not iterable
//Because it's not an array ,so use for in loop not for of

}
*/

for (const key  in myObj) {
  // console.log(key);
  // console.log(myObj[key]);
  
  // console.log(`${key} :- ${myObj[key]}`);
}

let arr = [10,20,30,40,50]
for (const key  in arr) {
    // console.log(key); 
    // console.log(arr[key]);
    
    // console.log(`${key} :- ${arr[key]}`);
//unlike for of loop, for in loop gives key or index of the array,
//  using that you have to again print the value

    /*
0 :- 10
1 :- 20
2 :- 30
3 :- 40
4 :- 50
*/
}


//On Array we mostly use for-Of or for-Each loop 



// ********* for-Each loop **********************
// forEach loop takes an callback function as an parameter
// since it's a loop on arrays,
//  it iterates over each item, 
// so give a variable name inside the callback

/*
const arrr = [10,20,30,40,50]

//we don't need any name for the callback
arrr.forEach( function (val){
    console.log(val); 
} )

10
20
30
40
50
*/

/*
const arrr = [10,20,30,40,50]

//arrow function as callback
arrr.forEach((val)=> {
    console.log(val); 
} )


10
20
30
40
50
*/

// *********Note:- When passing a function or callback func as parameter
//Don't use () , only pass the function name, 
// the reciever function automatically calls it


const arrr = [10,20,30,40,50]

//we don't need any name for the callback
function printme(val){
  console.log(val); 
} 
// arrr.forEach(printme) //don't pass like this printme()  =>  undefined is not a function

/*
10
20
30
40
50
*/

arrr.forEach((val, index, arr)=> {  //the forEach also have access to index ,array list, etc....
    console.log(val, index, arr); 
} )

/*
10 0 [ 10, 20, 30, 40, 50 ]
20 1 [ 10, 20, 30, 40, 50 ]
30 2 [ 10, 20, 30, 40, 50 ]
40 3 [ 10, 20, 30, 40, 50 ]
50 4 [ 10, 20, 30, 40, 50 ]
*/


// Type Conversion

let score = "33"
let score1 = "33adasdad"
let number = Number(score)
let number1 = Number(score1)

// console.log(typeof score);
// console.log(typeof(score)); Both are same

// console.log(typeof number);

/* it's says type is number , but 
 when you actually print the value of it ,it says Not a Number
 be Careful while using numbers
 */

// console.log(typeof number1); //number 
// console.log(number1); //NaN

/* Summery 
"33" => 33
"33abs" => NaN
true => 1; false => 0
*/

// let isLogged = 1  => true
// let isLogged = "Madhu"  => true
// let isLogged  => false
// let isLogged = ""  => false

// let bollean = Boolean(isLogged)
// console.log(bollean);


let sumNumber = 33

// let str = String(sumNumber)
// console.log(typeof str);
// console.log(str);

//  ************************ operations **********************************

let value = 3
let negvalue = -value

// console.log(negvalue);

// preFix and PostFix in Incr/Decr 

//****************  String Interpolation ********************

// const name = new String('Madhu') both are same
const  name = "Madhu--  "
let RepoCount = 20

// console.log(name[0]);
// console.log(name.__proto__);

// console.log(`Hello my name is ${name} and my repoCount is ${RepoCount}`);

// String is an object which has key value pairs ,
//  so it has indexing for each CharacterData,and
//  it has an length property and 
// it also has some methods related to it

// console.log(name.length);
// console.log(name.toUpperCase()); //it doesn't alter the originall string, because this line returns a copy

// console.log(name.indexOf('d'));
// console.log(name.charAt(2));
 
// let nname = name.substring(0,4) //only take +ve values
// console.log(nname);

let nname1 = name.slice(0,4) //takes both -ve and +values
// console.log(nname1);
let nname = name.slice(-9,5)
// console.log(nname);

let mane = "  madhu  "
// console.log(mane);
// console.log(mane.includes('madhu'))

// ************* trim ******************
// .trimStart()
// .trimEnd()
// .trim()

let trimmed = mane.trim() //works only on whitespaces and line terminators like newline (\n)
// console.log(trimmed);

// *******************replace***********************

const url = "https://dsfdf.com/dfsdfsdf%20csdvdf"


// console.log(url.replace('%20', '-'));

const srtarray = new String('madhu-madhan-madhu')
// console.log(srtarray);


let arr = srtarray.split('-')
// console.log(arr);


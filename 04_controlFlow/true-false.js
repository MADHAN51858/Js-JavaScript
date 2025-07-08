// Falsy values:

// false, 0, -0,  "", 0n(BigInt), null, undefined, NaN 


// Truty Values: Rest All Values are Truty Values like

// 'false',"0", " ", "String", numbers>0, [], {}, function(){empty func}   


let arr = []

if(arr.length === 0){
    console.log("Array is Empty"); //Array is Empty
    
}

let obj = {}        
//to check length of an object use Object.keys which returns an array and apply .length prop on that 
if(Object.keys(obj).length === 0){
    console.log("Array is Empty");   //Array is Empty
}

// Nullish Coalescing Operator (??): null undefined

// Used when Interacting with DataBase, and DB has to send some Data

let val;
// val = 5 ?? 10; //5
// val = nul ?? 10; //10
// val = undefined ?? 10; //10
val = undefined ?? 10 ?? 20;  //first possible value is taken -> 10

// console.log(val);

let Grade = "A";

(Grade != null)?console.log(`You scored ${Grade} grade`):console.log(`You Failed`);
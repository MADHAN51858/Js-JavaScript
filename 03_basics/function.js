 // you can pass variables ,fuctions, arrays as Parameters
 

function myName(){
    console.log("Madhan");
    
}
// myName()

function Name(username = "user"){ //user is the default value
    console.log(`${username} just logged in`);
    
}
// Name() user just logged in
// Name("Madhu") Madhu just logged in


// example of using REST operator(...) as parameter in the function
// It is also called as spread operator(...) in other usecases 

function calculateCartPrice(...num1) { 

    return num1 //returns an arrays
}

// console.log(calculateCartPrice(10,200,500)); //[ 10, 200, 500 ]
//then we can perform array operations to get the desired output

function calculateCartPrice(val1, val2, ...num1) { 

    return val1, val2,num1 //returns an arrays
}

// console.log(calculateCartPrice(100,200,500,600, 700));  //then we can perform array operations to get the desired output



// function declaration

function add(x,y){
    console.log(x+y);
    
}
// add()


// function Expression

let addd = function(x,y,z){
    console.log(x+y+z);
    
}
// addd()

let obj = {
    user : "Madhu",
    role : "Developer",
    salry : 200000,
    welcomeMsg : function(){
        //(this keyword refers to current context)
        console.log(`${this.user} , you are Welcome`);
        console.log(this);  /* {
                        user: 'Madhu',
                        role: 'Developer',
                        salry: 200000,
                        welcomeMsg: [Function: welcomeMsg]
                    }                                                    */
        
        
    }

}

// obj.welcomeMsg() //Madhu , you are Welcome
// obj.user = "Madhan"
// obj.welcomeMsg()  Madhan , you are Welcome

// console.log(this);  // {}  returns empty object in case of node environment ,
 //returns an window object ,if you print it in the browser

 //window is the global objectin the browser

 function chacha(){
     console.log(this); 
     /*
     <ref *1> Object [global] {
  global: [Circular *1],
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  structuredClone: [Function: structuredClone],
  atob: [Function: atob],
  btoa: [Function: btoa],
  performance: [Getter/Setter],
  fetch: [Function: fetch],
  navigator: [Getter],
  crypto: [Getter]
}
     */
 }
//  chacha()  
 
//  function chacha(){
//     let name = "madhu"
//      console.log(this.user); //undefined
//   // this only works inside object not in function, 
//      but it can be resolved ,ssen in the future videos 
//  }
//  chacha()  
 
// arrow function (this keyword is not used in arrow functions)

const coffee = () =>{
     let name = "madhu"
     console.log(this); //{} ,we can't use this inside arrow function
     console.log(this.user); //undefined

}
// coffee()

// const addtwo = (n1,n2) => {
//     return n1+n2
// }

const addtwo = (n1,n2) => n1+n2 //or (n1+n2)

// console.log(addtwo(10,20)); //30

const objreturn = () => ({user: "Madhu"}) //( ) is must to return object

// console.log(objreturn()); //{ user: 'Madhu' }


/*
Arrow functions do not bind their own this.

They use this from the lexical (outer) scope.

That’s why you often don’t use this inside arrow functions directly, 
especially when you need the function to have its own context.

*/

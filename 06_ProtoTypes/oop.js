 const user  = {
    username : "madhu",
    logCount: 5,
    Role: "Developer",
    getDetails: function(){ 
        //When you want to take values from the same object ,use this keyword
        console.log(`username: ${this.username}`);
        console.log(`logCount: ${this.logCount}`);
        console.log(`Role: ${this.Role}`);
/*
        console.log(this); this references to the current Object
{
  username: 'madhu',
  logCount: 5,
  Role: 'Developer',
  getDetails: [Function: getDetails]
}
*/
    }
 }

//  console.log(user);
//  user.getDetails()
//  console.log(this);  //{} (when printed this in Global Context,it's returns an Empty Object,
// **but in the browser console it's returns the window Object)


3/+/new is a constructor function,because it's used to create new context or gives a new instance
// const Promise1 = new Promise()
// const date = new Date()

function User(username,Login, isLogged) { //same like in java
    this.username = username
    this.Login = Login
    this.isLogged = isLogged

    return this //returns the Object
}
const userOne = User("Madhu",50,true);
console.log(userOne);
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
            crypto: [Getter],
            username: 'Madhu',  /////////////////
            Login: 50,         /////////////////
            isLogged: true    /////////////////
            }*/
const userTwo = User("Madhan",50,false)
console.log(userOne);
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
            crypto: [Getter],
            username: 'Madhu',  /////////////////Note here the user two is over riding the useoone details, because User is a Object in the Heap
            Login: 50,         ///////////////// but userOne and userTwo both are references to the Same User object
            isLogged: true    /////////////////
            }*/ 


userTwo = new User("Madhan",50,false)
console.log(userTwo);  //now userTwo is referencing to a new User Object in the Heap
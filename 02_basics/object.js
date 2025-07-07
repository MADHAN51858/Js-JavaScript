//singleton Object (when created using constructer (if.e using object.create or new object())

// Object literals

let mySym = Symbol();
let user = {
  name: "madhu",
  role: "FrontEnd Developer",
  islogged: false,
  loggedDates: [1, 2, 3, 4, 5, 6],
  [mySym]: "myKey123", //[ ] is used to define symbol inside object
};
// console.log(user.name);  most of the times used . only
//
// //or you can also use [" "]

// console.log(user["name"]);
// console.log(user["role"]);
// console.log(user["islogged"]);
// console.log(user["loggedDates"]);
// console.log(user[mySym]);
// console.log(typeof mySym); //symbol
// console.log(typeof user[mySym]); //string

user.name = "Madhan";
// console.log(user["name"]); Madhan
// Object.freeze(user) // now you can't change any values of user object

user.name = "Madhan_madhu"; //these values are not propogated for the changes in the object
// console.log(user["name"]); //Madhan
// console.log(user); //Madhan

user.greeting = function () {
  console.log("Hello Js lover"); //Hello Js lover

  console.log(`Hello Js lover, ${this.name}`); //this is used to reference user object
};
// console.log(user.greeting);  //[Function (anonymous)]

// console.log(user.greeting());  //undefined

// user.greeting()

// ******************* Singleton objects *******************************

const singleton = new Object();
singleton.id = "1123sdfsd";
singleton.name = "madhu";
singleton.logged = false;

// console.log(singleton);

const regularObject = {
  email: "sds@sfs.com",
  fullname: {
    userFullName: {
      firstname: "madhu",
      middlename: "madhan",
      lastname: "madhan_madhu",
    },
  },
};

// console.log(regularObject.fullname);  //{
//                                         userFullName: {
//                                           firstname: 'madhu',
//                                           middlename: 'madhan',
//                                           lastname: 'madhan_madhu'
//                                         }
//                                       }

// console.log(regularObject.userFullName);  //undefined

//Note: map( ) is related to arrays ,when objects are used inside the arrays we can use that 

// console.log(regularObject.fullname.userFullName);  //{ firstname: 'madhu', middlename: 'madhan', lastname: 'madhan_madhu' }

//  ************************* Merging of Objects **********************************

let obj1 = {
    1:"a",
    2:"b",
    3:"c"
}

let obj2 = {
    4:"d",
    5:"e",
    6:"f"
}

// let obj3 = Object.assign({}, obj1, obj2) //{} is optional ,but it is recommended

let obj3  = {...obj1,  ...obj2} //most of the times use spread operator
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "sdds@dsfsd.com"
    },
    {
        id: 1,
        email: "sdds@dsfsd.com"
    },
    {
        id: 1,
        email: "sdds@dsfsd.com"
    },
    {
        id: 1,
        email: "sdds@dsfsd.com"
    }
];

// console.log(users[1].email);

console.log(singleton); //{ id: '1123sdfsd', name: 'madhu', logged: false }

// console.log(Object.keys(singleton)); 
//datatype = arrays  [ 'id', 'name', 'logged' ]

// console.log(Object.values(singleton));
//datatype = arrays  [ '1123sdfsd', 'madhu', false ]

// console.log(Object.entries(singleton)); 
//datatype = arrays inside array [ [ 'id', '1123sdfsd' ], [ 'name', 'madhu' ], [ 'logged', false ] ]

console.log(singleton.hasOwnProperty('logged')); //true

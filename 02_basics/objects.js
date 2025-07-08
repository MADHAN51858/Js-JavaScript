//Destructuring of Objects

const course = {
    coursename: "Js",
    price: 9999,
    teacher: "Madhu"
}

//Destructuring of objects by using { } ,used more to pass as props into functions in react 
const {coursename} = course // or
const {coursename: name} = course 

// console.log(coursename); //Js
console.log(name); // Js


// Destructuring of objects in API's (Destructuring JSON )


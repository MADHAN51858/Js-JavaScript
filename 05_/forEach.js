const myObjArr = [
  {
    name: "Madhu",
    role: "Develop",
  },
  {
    name: "Madhan",
    role: "Developed",
  },
  {
    name: "Maddhuu",
    role: "Developer",
  },
];

//Accessing object inside an array of objectss

myObjArr.forEach((item) => {  
    console.log(item.name,":-",item.role);    
})
/*
Madhu :- Develop
Madhan :- Developed
Maddhuu :- Developer
*/

const printName = (name) => "Hi " + name;
console.log(printName("Akshitha"));




const printBil = (name, bill) => {
    return `Hi ${name} please pay: ${bill}`;
  };
  console.log(printBil("Akshitha", 1000));





  //Modify the following code such that the object properties are destructured and logged.
const person = {
    myName: "Noam Chomsky",
    age: 92,
  };
  

  
  const {myName,age}=person;
  console.log(myName);
  console.log(age)
const Person={
    name:"Saurabh",
    job:"Software Engineer",
}

const arraY=["hero","Lion"]


// ==>by using prototype we can add methods to object without having to add the methods to each object individually 

Object.prototype.printInfo=function(){
    console.log(`Hey I am ${this.name} and I'm in ${this.job}`);
};

// ==>you can add methods seperatly in Array or String


// Array.prototype.printInfo=function(){
//     console.log(`Hey I am ${this.name} and I'm in ${this.job}`);
// };


// Person.printInfo()
// arraY.printInfo()

function Person(name, job, yearOfBirth) {
    this.name = name;
    this.job = job;
    this.yearOfBirth = yearOfBirth;
}
  
  // Add a method to the prototype
  Person.prototype.calculateAge = function() {
    console.log('The current age is: ' + (2019 - this.yearOfBirth));
  };
  
  // Create a new object using the constructor
const person1 = new Person('John Doe', 'Software Engineer', 1980);
  
  // Call the method on the new object
person1.calculateAge(); // The current age is: 39

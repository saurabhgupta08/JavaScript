class user {
    constructor(userName,eamil,password){
        this.userName=userName
        this.eamil
        this.password
    }

    encrypPassword(){
        console.log(`XYZ${this.password}ABC`);
    }
}

const userOne=new user("Saurabh","saurabhgupta456465@gmail.com",545466464)

// userOne.encrypPassword()


// In JavaScript, classes are a way to define blueprints for creating objects with similar properties and methods. They were introduced in ECMAScript 2015 (ES6) to provide a more familiar syntax for defining object-oriented programming structures.

// Here's a basic example of how you can define a class in JavaScript:

class Animal {
    // Constructor method, used to initialize objects
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Method to display information about the animal
    displayInfo() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
}
  
  // Creating an instance of the Animal class
const dog = new Animal("Max", 5);
  
  // Calling the displayInfo method
dog.displayInfo(); // Output: Name: Max, Age: 5
  
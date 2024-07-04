// In JavaScript, getter and setter methods allow you to define custom behavior when getting and setting properties of an object. They are used to provide a more controlled way to access and manipulate object properties. Here's how you can use getters and setters:

// Getter: A getter method is used to get the value of a property. It allows you to execute code before returning the property value.

const person = {
    firstName: "John",
    lastName: "Doe",
    get fullName() {
      return this.firstName + " " + this.lastName;
    }
};
  
console.log(person.fullName); // Output: John Doe


// Setter:A setter method is used to set the value of a property. It allows you to execute code before setting the property value.


const person1 = {
    _age: 0,
    set age(value) {
      if (value < 0) {
        console.log("Age cannot be negative");
      } else {
        this._age = value;
      }
    },
    get age() {
      return this._age;
    }
};
  
person1.age = 30;
console.log(person.age); // Output: 30
  
person1.age = -10; // Output: Age cannot be negative
console.log(person.age); // Output: 30 (value remains unchanged)
  

// Using Getters and Setters with Classes:In ES6 classes, you can also define getters and setters using the get and set keywords within the class definition.

class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
  
    get area() {
      return this._width * this._height;
    }
  
    set width(value) {
      if (value > 0) {
        this._width = value;
      } else {
        console.log("Width must be a positive number");
      }
    }
  
    set height(value) {
      if (value > 0) {
        this._height = value;
      } else {
        console.log("Height must be a positive number");
      }
    }
}
  
const rect = new Rectangle(5, 10);
console.log(rect.area); // Output: 50
  
rect.width = 8;
console.log(rect.area); // Output: 80
  
rect.height = -5; // Output: Height must be a positive number
console.log(rect.area); // Output: 80 (value remains unchanged)
  
  

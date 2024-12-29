const parent = {
  name: "mohak",
  greet: function () {
    console.log("greet message");
  },
};

const child = Object.create(parent);
console.log(child);

/* 

Prototype and Prototypal Inheritance (Simplified)
Prototype:

Every JavaScript object has a hidden property called __proto__ (or prototype).
This prototype acts as a blueprint or "parent" object.
If you try to access a property or method on an object and it’s not there, JavaScript looks for it in the prototype.
Example:

const obj = { name: "Alice" };
console.log(obj.toString()); // 'toString' comes from the object's prototype.


Prototypal Inheritance:

Objects in JavaScript can "inherit" properties and methods from another object via the prototype.
This means one object can share functionality (methods or properties) with another without copying it.
Example:

const parent = { greet: () => console.log("Hello!") };
const child = Object.create(parent); // child inherits from parent
child.greet(); // Output: Hello!
Key Idea:
Prototypal inheritance allows objects to reuse methods or properties defined on other objects, making JavaScript flexible and efficient.

Object.create() is a method in JavaScript that creates a new object and sets its prototype (__proto__) to the object you specify.
*/

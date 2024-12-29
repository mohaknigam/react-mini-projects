/* 

Certainly, let's explore deep and shallow copies in JavaScript.

Shallow Copy

Creates a new object that shares the same references to the nested objects or arrays as the original object.
Modifying a nested object or array in the original object will also affect the copy, and vice versa.

const originalObject = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

// Shallow copy using spread syntax
const shallowCopy = { ...originalObject };

// Modify nested address object in original
originalObject.address.city = 'Newtown';

console.log(shallowCopy); 
// Output: 
// { 
//   name: 'John', 
//   age: 30, 
//   address: { 
//     street: '123 Main St', 
//     city: 'Newtown' 
//   } 
// }


Certainly, let's explore deep and shallow copies in JavaScript.

Shallow Copy

Creates a new object that shares the same references to the nested objects or arrays as the original object.
Modifying a nested object or array in the original object will also affect the copy, and vice versa.
Example:

JavaScript

const originalObject = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

// Shallow copy using spread syntax
const shallowCopy = { ...originalObject };

// Modify nested address object in original
originalObject.address.city = 'Newtown';

console.log(shallowCopy); 
// Output: 
// { 
//   name: 'John', 
//   age: 30, 
//   address: { 
//     street: '123 Main St', 
//     city: 'Newtown' 
//   } 
// } 
As you can see, modifying the city property in the original object also changes the city property in the shallow copy because they share the same address object reference.

Deep Copy

Creates a new object with independent copies of all nested objects and arrays.
Modifying a nested object or array in the original object will not affect the copy.
Example:

const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modify nested address object in original
originalObject.address.city = 'Anytown'; 

console.log(deepCopy); 
// Output: 
// { 
//   name: 'John', 
//   age: 30, 
//   address: { 
//     street: '123 Main St', 
//     city: 'Anytown' 
//   } 
// }

Certainly, let's explore deep and shallow copies in JavaScript.

Shallow Copy

Creates a new object that shares the same references to the nested objects or arrays as the original object.
Modifying a nested object or array in the original object will also affect the copy, and vice versa.
Example:

JavaScript

const originalObject = {
  name: 'John',
  age: 30,
  address: {
    street: '123 Main St',
    city: 'Anytown'
  }
};

// Shallow copy using spread syntax
const shallowCopy = { ...originalObject };

// Modify nested address object in original
originalObject.address.city = 'Newtown';

console.log(shallowCopy); 
// Output: 
// { 
//   name: 'John', 
//   age: 30, 
//   address: { 
//     street: '123 Main St', 
//     city: 'Newtown' 
//   } 
// } 
As you can see, modifying the city property in the original object also changes the city property in the shallow copy because they share the same address object reference.

Deep Copy

Creates a new object with independent copies of all nested objects and arrays.
Modifying a nested object or array in the original object will not affect the copy.
Example:

JavaScript

const deepCopy = JSON.parse(JSON.stringify(originalObject));

// Modify nested address object in original
originalObject.address.city = 'Anytown'; 

console.log(deepCopy); 
// Output: 
// { 
//   name: 'John', 
//   age: 30, 
//   address: { 
//     street: '123 Main St', 
//     city: 'Anytown' 
//   } 
// }
In this case, the deepCopy remains unaffected by the modification to the original object because it has its own independent copy of the address object.

Key Considerations:

Performance: Deep copies can be computationally more expensive than shallow copies due to the need to recursively clone nested structures.
Use Cases:
Shallow Copy: Suitable when you need a quick copy and don't mind the potential for unintended side effects.
Deep Copy: Essential when you need to ensure that modifications to the original object do not affect the copy, such as in scenarios where the copy needs to be independent.

*/

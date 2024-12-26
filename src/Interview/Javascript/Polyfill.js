const arr = [2, 5, 1, 6, 8];

// MAP

// let doubleArray = arr.map((item) => item * 2);
// console.log(doubleArray);
// Array.prototype.myMap = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     temp.push(cb(this[i]));
//   }
//   return temp;
// };
// let = doubleArrayPolyfill = arr.myMap((item) => item * 5);
// console.log(doubleArrayPolyfill);

//----------------------------------------------------------------------------

// Filter

// let evenNumbers = arr.filter((item) => item % 2 === 0);
// console.log(evenNumbers);
// Array.prototype.myFilter = function (cb) {
//   let temp = [];
//   for (let i = 0; i < this.length; i++) {
//     if (cb(this[i])) temp.push(this[i]);
//   }
//   return temp;
// };
// let = evenNumbersPolyfill = arr.myFilter((item) => item % 2 === 0);
// console.log(evenNumbersPolyfill);

//----------------------------------------------------------------------------

// Reduce

// let product = arr.reduce((acc, curr) => {
//   return acc * curr;
// }, 1);
// console.log(product);

// Array.prototype.myReduce = function (cb, initialVal) {
//   let ans = initialVal;
//   for (let i = 0; i < this.length; i++) {
//     ans = ans ? cb(ans, this[i]) : this[i];
//   }
//   return ans;
// };

// let productPolyfill = arr.myReduce((acc, curr) => {
//   return acc * curr;
// }, 1);
// console.log(productPolyfill);

//----------------------------------------------------------------------------

// Call

// let obj1 = {
//   name: "Mohak",
//   printName: function (age) {
//     console.log(`My name is ${this.name} and age is ${age}`);
//   },
// };

// let obj2 = {
//   name: "Vivek",
// };

// obj1.printName(15);
// obj1.printName.call(obj2, 23);

// Function.prototype.myCall = function (context = {}, ...args) {
//   context.fn = this;
//   context.fn(...args);
// };
// obj1.printName.myCall(obj2, 25);

//----------------------------------------------------------------------------

// Apply

// let obj1 = {
//   name: "Mohak",
//   printName: function (age, city) {
//     console.log(
//       `My name is ${this.name} and age is ${age} and live in ${city}`
//     );
//   },
// };

// let obj2 = {
//   name: "Vivek",
// };

// obj1.printName(15, "kanpur");
// obj1.printName.apply(obj2, [23, "kanpur"]);

// Function.prototype.myApply = function (context = {}, args = []) {
//   if (typeof context != "object") {
//     throw new Error("context is not an object");
//   }
//   if (!Array.isArray(args)) {
//     throw new Error("args is not an array");
//   }
//   context.fn = this;
//   context.fn(...args);
// };

// obj1.printName.myApply(obj2, [23, "New York"]);

//----------------------------------------------------------------------------

// Bind

// let obj1 = {
//   name: "Mohak",
//   printName: function (age, city) {
//     console.log(
//       `My name is ${this.name} and age is ${age} and live in ${city}`
//     );
//   },
// };

// let obj2 = {
//   name: "Vivek",
// };

// obj1.printName(15, "kanpur");
// const newFun = obj1.printName.bind(obj2, 23, "kanpur");
// newFun();

// Function.prototype.myBind = function (context = {}, ...args) {
//   if (typeof context !== "object") {
//     throw new Error("context is not an object");
//   }

//   context.fn = this;
//   return function (...newArgs) {
//     context.fn(...args, ...newArgs);
//   };
// };

// const newFunPoly = obj1.printName.bind(obj2);
// newFunPoly(24, "kanpur");

//----------------------------------------------------------------------------

// Once

// function printName(a, b) {
//   console.log("My name is Kumar",a,b);
//   return "returned value";
// }

// Function.prototype.once = function () {
//   let isRan = false;
//   const currentFun = this;

//   return function (...args) {
//     if (!isRan) {
//       isRan = true;
//       return currentFun.apply(this, args);
//     }
//   };
// };

// const printNameOnce = printName.once();
// printNameOnce(1, 2);
// printNameOnce(1, 2);
// printNameOnce(1, 2);

//----------------------------------------------------------------------------

// Memoize

// function calcSum(a, b) {
//   console.log(`Calculating sum for ${a} & ${b}`);
//   return a + b;
// }

// Function.prototype.memoize = function () {
//   const currFun = this;
//   const cache = new Map();

//   return function (...args) {
//     const key = JSON.stringify(args);
//     if (cache.has(key)) {
//       console.log(`returning cached sum `);
//       return cache.get(key);
//     }

//     const result = currFun.apply(this, args);
//     cache.set(key, result);
//     return result;
//   };
// };

// const sum = calcSum.memoize();
// console.log(sum(1, 2));
// console.log(sum(1, 2));
// console.log(sum(2, 5));
// console.log(sum(2, 5));

//----------------------------------------------------------------------------

const p1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p1 resolved");
  }, 1000);
});
const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p2 resolved");
  }, 2000);
});
const p3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("p3 rejected");
  }, 800);
});
const p4 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("p4 resolved");
  }, 3000);
});

// Promise.all

// Promise.all([p1, p2, p4, p3])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

// Promise.all --> Polyfill

// Promise.myAll = function (promises) {
//   return new Promise((resolve, reject) => {
//     const results = [];
//     let completedPromises = 0;

//     promises.forEach((promise, idx) => {
//       Promise.resolve(promise)
//         .then((res) => {
//           completedPromises++;
//           results[idx] = res;

//           if (completedPromises == promises.length) {
//             resolve(results);
//           }
//         })
//         .catch(reject);
//     });

//     if (promises.length == 0) {
//       resolve([]);
//     }
//   });
// };

// Promise.myAll([p1, p2, p4])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

// Promise.race([p1, p2, p3])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     throw new Error(err);
//   });

//----------------------------------------------------------------------------

// Promise.any

// Promise.any([p1, p2, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     throw new Error(err);
//   });

// Promise.any ---> Polyfill

// Promise.myAny = function (promises) {
//   return new Promise((resolve, reject) => {
//     const errors = [];
//     let rejectedCount = 0;

//     promises.forEach((promise, idx) => {
//       Promise.resolve(promise)
//         .then(resolve)
//         .catch((err) => {
//           rejectedCount++;
//           errors[idx] = err;

//           if (rejectedCount == promises.length) {
//             reject(new AggregateError(errors, "All promises were rejected"));
//           }
//         });
//     });

//     if (promises.length === 0) {
//       reject(new AggregateError(errors, "All promises were rejected"));
//     }
//   });
// };

// Promise.myAny([p1, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     throw new Error(err);
//   });

//----------------------------------------------------------------------------

// Promise.race

// Promise.race([p1, p2, p3, p4])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

// Promise.race ---> Polyfill

// Promise.race = function (promises) {
//   return new Promise((resolve, reject) => {
//     promises.forEach((promise, idx) => {
//       Promise.resolve(promise).then(resolve).catch(reject);
//     });

//     if (promises.length == 0) {
//       // Do nothing for an empty array
//     }
//   });
// };

// Promise.race([p1, p2, p3, p4])
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     throw new Error(err);
//   });

//----------------------------------------------------------------------------

// All Settled

// Promise.allSettled([p1, p2, p3, p4])
//   .then((res) => console.log(res))
//   .catch((err) => {
//     throw new Error(err);
//   });

// All settled --> polyfill

Promise.myAllSettled = function (promises) {
  return new Promise((resolve) => {
    const results = [];
    let completedPromises = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = { status: "fulfilled", value };
        })
        .catch((reason) => {
          results[index] = { status: "rejected", reason };
        })
        .finally(() => {
          completedPromises++;
          if (completedPromises === promises.length) {
            resolve(results);
          }
        });
    });

    if (promises.length === 0) {
      resolve([]); // Handle empty array case
    }
  });
};

Promise.myAllSettled([p1, p2, p3, p4])
  .then((res) => console.log(res))
  .catch((err) => {
    throw new Error(err);
  });

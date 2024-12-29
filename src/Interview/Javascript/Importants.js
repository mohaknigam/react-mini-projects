// // implement calc, where the function chaining can go to n times -->  calc.add(10).multiply(10).substract(50).add(10).multiply(2)....n times

// const calc = {
//   total: 0,
//   add: function (a) {
//     this.total += a;
//     return this;
//   },
//   multiply: function (a) {
//     this.total *= a;
//     return this;
//   },
//   substract: function (a) {
//     this.total -= a;
//     return this;
//   },
// };

// const result = calc
//   .add(10)
//   .multiply(10)
//   .substract(50)
//   .add(10)
//   .multiply(2)
//   .add(20)
//   .multiply(2);
// console.log(result.total);

// Flatten an Object

const nestedObject = {
  a: 1,
  b: {
    c: 2,
  },
};

const flattenObject = function (obj, parentKey = "") {
  let result = {};

  for (let key in obj) {
    let newKey = parentKey ? parentKey + "." + key : key;
    if (typeof obj[key] === "object" && obj[key] !== null) {
      let flattenedChild = flattenObject(obj[key], newKey);
      Object.assign(result, flattenedChild);
    } else {
      result[newKey] = obj[key];
    }
  }
  return result;
};

const myObj = flattenObject(nestedObject);
console.log(myObj);

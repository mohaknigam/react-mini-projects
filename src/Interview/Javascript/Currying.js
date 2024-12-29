// function sum(a, b, c) {
//   return a + b + c;
// }
// console.log(sum(1, 2, 3));

// -----------------------------------------------------------------------------

// Currying

// function currySum(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// console.log(currySum(1)(2)(7));

// -----------------------------------------------------------------------------

// Infinite currying --> fun(1)(2)(3)...(n)

// function infiniteSum(a) {
//   return function (b) {
//     if (b) {
//       return infiniteSum(a + b);
//     }
//     return a;
//   };
// }

// console.log(infiniteSum(1)(2)(3)(4)(15)());
// -----------------------------------------------------------------------------

// Currying vs Partial application

// currying is fun(a,b,c) to fun(a)(b)(c)
// Partial application is fun(a,b,c) to fun(a)(b,c)

function partialAppliedSum(a) {
  return function (b, c) {
    return a + b + c;
  };
}

console.log(partialAppliedSum(2)(3, 4));

// Write your code here
//factorial(n) = n * n-1 * n-2


function factorial(x) {
  if (x.length === 1) {
        return 1;
    }

   return x.length * factorial(x.slice(1));

}

console.log(factorial('hello'));




// function factorial(x) {

//     // if number is 0
//     if (x == 0) {
//         return 1;
//     }

//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }

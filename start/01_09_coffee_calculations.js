// Write your code here
//reduce
let pricePerCoffee = 1.25;
let arr = [2,5,7,4,1];

function calc(arr) {
    let reduce = arr.reduce((acc, x) => {
    return acc + x;
  });

  return str = `The total bill is ${reduce * pricePerCoffee}`;
}

console.log(calc(arr));
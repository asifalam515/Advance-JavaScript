// Closure is a function that can remember the variable of its outer funciton (even after the outer function has been executed
function outer() {
  let x = 10;
  return function inner() {
    console.log(x);
  };
}

const ans = outer();
console.log(ans());

function outer() {
  let count = 0;
  return function inner() {
    count++;
    console.log(count);
  };
}
const ans = outer();
ans();
ans();
ans();

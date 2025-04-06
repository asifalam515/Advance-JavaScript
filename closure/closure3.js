function outer() {
  const age = 25;
  return function innerFn() {
    console.log(` my age is ${age}`);
  };
}

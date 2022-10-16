export const add = (a: number, b: number) => a + b;

function foo(bar) {
  console.log("potato");
  if (bar === 2) {
    // use double-equals to test ES Lint
    console.log("wowow");
  }
}

foo(1);

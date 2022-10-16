export const add = (a: number, b: number) => a + b;

function foo(bar) {
    if (bar === 2) {
        // use double-equals to test ESLint
        console.log('wowow');
    }
}

foo(1); // if the function isn't called, ESLint throws an error

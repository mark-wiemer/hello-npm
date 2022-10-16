import { subtract } from './utils'; // tsconfig.json#baseUrl :)

export const add = (a: number, b: number) => a + b;

function foo(bar: number) {
    subtract(bar, 1);
    if (bar === 2) {
        // use double-equals to test ESLint
        console.log('wowow');
    }
}

if (Math.random() < -1) {
    switch (Math.random()) {
        case 1:
            console.log('wow');
            break;
        case 2:
            console.log('oh my');
    }

    interface Indexed {
        known: string;
        [key: string]: string;
    }

    const x: Indexed = { known: 'wow', unknown: 'uh oh' };
    foo(1); // if the function isn't called, ESLint throws an error
    console.log(x['unknown']);
}

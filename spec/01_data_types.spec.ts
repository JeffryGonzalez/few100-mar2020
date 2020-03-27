import { add, applicationName } from './utils';
describe('declaring variables in typescript', () => {
    it('constant might not mean what you think it means', () => {
        // const means the variable cannot be reassigned to.
        const PI = 3.1415927;
        // PI = 3;

        const numbers = [1, 2, 3];
        // numbers = [9, 2, 3];
        numbers[0] = 9;
        const movie = { title: 'Jaws', yearReleased: 1979 };
        // movie = { title}
        movie.yearReleased = 1977;

    });
    describe('typing', () => {
        it('implicitly typed variables', () => {
            let name = 'Joe';
            name = 'Ray';

            // name = 1137;

            const age = 50;

        });
        it('explicitly typed variables', () => {
            let name: string;

            name = 'Sue';

        });
        it('union types', () => {
            let thingy: string | number | string[];

            thingy = 'Enchiladas';

            thingy = 42;

            thingy = ['Tacos', 'Enchiladas'];

        });
        it('type aliases', () => {
            type ThingWithLettersAndStuff = string;

            const name: ThingWithLettersAndStuff = 'Joe';

            type MathOperation = (a: number, b: number) => number;
            const add: MathOperation = (a, b) => a + b;


            expect(add(2, 2)).toBe(4);

            const subtract: MathOperation = function (a: number, b: number) {
                return a - b;
            }; // hi!

        });

    });
});

describe('literals', () => {
    describe('string literals', () => {
        it('has them', () => {
            const message = 'She told me "You look nice today!"';
            const message2 = 'The Author was Flannery O\'Connor';
            // tslint:disable-next-line: quotemark
            const message3 = "The Author was Flannery O'Connor";

            // tslint:disable-next-line: no-console
            console.log('Is this thing on');

        });
        it('has template strings', () => {
            const message = `She told me "You look nice today!"`;
            const message2 = `The Author was Flannery O'Connor`;


            const story = `Life Story

            It was a dark and stormy night. blah blah.
            The end.
            `;

            const fragment = `<div>
            <h1>Hello</h1>
            </div>`;

            // tslint:disable-next-line: one-variable-per-declaration
            const name = 'Bob',
                age = 38;

            const message3 = `The name is ${name} and the age is ${age}`;
            const message4 = 'The name is ' + name + ' and the age is ' + age;
            expect(message3).toEqual(message4);
        });
    });
});



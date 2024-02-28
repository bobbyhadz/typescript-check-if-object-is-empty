export {};

// EXAMPLE 1 - Check if an Object is Empty in TypeScript

interface Person {
  name?: string;
  age?: number;
  country?: string;
}

const person: Person = {};

if (Object.keys(person).length === 0) {
  console.log('Object is empty'); // 👉️ this runs
} else {
  console.log('Object is NOT empty');
}

const isEmpty = Object.keys(person).length === 0;
console.log(isEmpty); // 👉️ true

// ---------------------------------------------------

// // EXAMPLE 2 - Creating a reusable function to check if an object is empty

// interface Person {
//   name?: string;
//   age?: number;
//   country?: string;
// }

// const person: Person = {};

// function isEmpty(obj: Record<string, any>): boolean {
//   return Object.keys(obj).length === 0;
// }

// // 👇️ true
// console.log(isEmpty(person));

// // 👇️ false
// console.log(isEmpty({ name: 'bobby hadz' }));

// ---------------------------------------------------

// // EXAMPLE 3 - Check if an Object is Empty using a `for...in` loop in TypeScript

// interface Person {
//   name?: string;
//   age?: number;
//   country?: string;
// }

// const person: Person = {};

// function isEmpty(obj: Record<string, any>): boolean {
//   for (const _key in obj) {
//     return false;
//   }
//   return true;
// }

// console.log(isEmpty(person)); // 👉️ true

// console.log(isEmpty({ name: 'James' })); // 👉️ false

// ---------------------------------------------------

// // EXAMPLE 4 - Check if an Object is Empty using `lodash` in TypeScript

// import isEmpty from 'lodash.isempty';

// console.log(isEmpty({})); // 👉️ true
// console.log(isEmpty({ name: 'bobby hadz' })); // 👉️ false

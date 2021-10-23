/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable prefer-const */

function foo(a) {
  a = null;
}

function bar(a) {
  Object.freeze(a);
  // const b = a;
  const b = { ...a };
  b.name = null;
}

let x = 2;
let z = {};
z.name = 'Pepe';

foo(x); // ?
console.log(x);
bar(z);
console.log(z);

const shrek = { specie: 'ogro' };
shrek.specie = 'human';
shrek.color = 'verde';
delete shrek.specie;
console.log({ shrek });

let myName = 'Pepe';
String(22);

const aData = [1, 3, 6];
/* const aData2 = new Array();
console.log(aData2); */

console.log(aData.length);

console.log(Array.isArray(aData));

// Mutable Methods
aData.push(2);
aData.sort();

// Immutable Methods  - callbacks

aData.forEach((i) => console.log(i));
const aData2 = aData.map((i) => i * 2);
console.log(aData2);
const aEvenData = aData.filter((i) => !(i % 2));
console.log(aEvenData);
// aData.some()
// aEvenData.every()
const total = aData.reduce((a, b) => a + b);
console.log(total); //?

// const f = (w) => w;

function myPush(array, value) {
  const newArray = [...array];
  newArray[newArray.length] = value;
  return newArray;
}

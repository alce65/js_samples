/* eslint-disable no-self-compare */
const a = 2;
const b = 2;

console.log(Object.is(a, b));
console.log('Identidad', a === b);

console.log(Object.is({}, {}));
console.log('Identidad', {} === {});

const o1 = {};
const o2 = o1;

console.log(Object.is(o1, o2));
console.log('Identidad', o1 === o2);

if (typeof o1 === 'number') {
  if (Number.isNaN(o1)) {
    // estoy en NaN
  } else {
    // es un número no NAN
  }
} else {
  // no es un número
}

if (typeof o1 === 'number' && !Number.isNaN(o1)) {
  // es un número no NAN
} else {
  // no es un número o es NaN
}

// eslint-disable-next-line eqeqeq
console.log(22 == '22');

/* eslint-disable dot-notation */
/* eslint-disable quotes */
/* eslint-disable space-infix-ops */
/* eslint-disable no-shadow */
/* eslint-disable no-use-before-define */
/* eslint-disable no-param-reassign */
/* eslint-disable operator-assignment */
/* eslint-disable prefer-const */
/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */
let user = 'Pepe';
user = 'Ernesto';
console.log(user);

const work = 'Coder';
// work = 'Boss';
// TypeError: Assignment to constant variable.

const data = { name: 'Luis' };
// data = { name: 'Luis' };
// TypeError: Assignment to constant variable.
data.name = 'Juam';

let pets = 'Hammster';
let lotPets = '10 ' + pets;

let a = 23;

doble(a);
console.log(a);

function doble(a) {
  a = a * 2;
  return a;
}

let algo = null;
console.log(algo);

console.log(1 / 0);
console.log(-1 / 0);

console.log(0 / 100_000);

console.log(0 / 0);
console.log(Number('Pepe'));

let user2 = 'Ernesto';
let nombres = `  Pepe
  y ${user2}`;

console.log(nombres.toLowerCase());
console.log(Math.PI);
console.log(Math.random());

const person = {
  name: 'Pepe',
  edad: 22,
  isAlumno: true,
  address: {
    calle: 'c/ Pez',
    num: 12,
  },
};

person.empleo = 'Coder';

console.log(person.edad);
console.log(person['edad']);

let propiedad = 'isAlumno';
console.log(person[propiedad]);

const o = {};
// o = {};
o.user = 'Pepe';
delete o.user;

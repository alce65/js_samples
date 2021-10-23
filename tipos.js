/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
/* eslint-disable no-new */
/* eslint-disable no-new-object */
/* eslint-disable symbol-description */
/* eslint-disable no-unused-expressions */

'Pepe';
4;
true;
null;

undefined;

Symbol();

3n;

new Object();

console.log(typeof 'Pepe');
console.log(typeof 4);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof 3n);
console.log(typeof new Object());
console.log(typeof (() => {}));

console.log(typeof []);
console.log(typeof new Date());
console.log(typeof /a/);

console.log('Pepe'.toUpperCase());
console.log(typeof 'Pepe');

console.log([3, 4, 5, 7][2]);
console.log('Ernesto'[2]);

const aDatos = [3, 4, 5, 7];
aDatos[0] = 'Pepe';
console.log(aDatos);

let myName = 'Ernesto';
// myName[0] = 'A';
// TypeError: Cannot assign to read only property '0' of string 'Ernesto'

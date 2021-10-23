const a = 2;
const b = '3';

console.log(a + b);
console.log(a - b);
console.log(a - 'Pepe');

// eslint-disable-next-line no-shadow
function suma(a = 0, b = 0) {
  const result = a + b;
  return result;
}

console.log(suma(4, 6));

console.log(suma(9, 8, 7, 6));

const x = '';
// const y = 3;

if (x) {
  console.log('Correcto');
} else {
  console.log('InCorrecto');
}

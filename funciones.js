// declaration
function functionTest(a) {
  console.log(a);
}

// asignation

const o = {};
o.name = 'Pepe';
console.log(o);

const x = function (a) {
  console.log(a);
};
x.dato = 'Soy una funcion';
console.log(x);
// ES6

const y = (a) => {
  console.log(a);
};

functionTest(2);
x(34);
y(26);

console.log(2 + 2);

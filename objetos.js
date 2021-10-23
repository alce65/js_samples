const sherlock = {
  surename: 'Holmes',
  age: 65,
};

console.log(sherlock.job?.boss);

let x = {};
x.__proto__.color = 'red';
console.log(x.color);
console.log(sherlock.color);

const user1 = {
  firstname: 'Sherlock',
  surename: 'Holmes',
  age: 65,
};

const user2 = {
  firstname: 'John',
  surename: 'Watson',
  age: 55,
};

function User(firstname = '', surename = '', age = 0) {
  let x = 9;

  this.firstname = firstname;
  this.surename = surename;
  this.age = age;
  this.isAlumno = false;
  this.verEmpresaMal = () => {};
}

User.prototype.empresa = 'ISDI Coders';

User.verEmpresa = function () {
  console.log('Nuestrs empresa es ' + User.prototype.empresa);
};

User.prototype.saludo = function (who = 'amigo') {
  console.log(`Hola ${who}, soy ${this.firstname}`);
};

function suma(a = 0, b = 0) {
  return a + b;
}

const valor = new suma();
console.log(valor);

const user3 = new User('Pepe', 'Moriarty', 34);

const user4 = new User('Molly', 'Malone', 36);
user4.address = 'Melburne';

console.log(user1);
console.log(user2);
console.log(user3);
user3.saludo();
console.log(user4);
user4.saludo(user3.firstname);
console.log(user4.empresa);

User.verEmpresa();

Object.is();
Array.isArray();
const aData = [];
// aData.map();

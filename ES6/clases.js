/* eslint-disable lines-between-class-members */
/* eslint-disable func-names */
/* eslint-disable max-classes-per-file */
/* export function Person(name) {
  this.name = name;
}

Person.prototype.greetings = function () {
  console.log(`Hola soy ${this.name}`);
}; */

export class Person {
  #name;
  legs;

  static #specie = 'Homo sapiens';

  constructor(name = '') {
    this.#name = name;
    this.legs = 2;
  }

  static showSpecie() {
    // console.log(`Soy ${Person.specie}`);
    console.log(`Soy ${this.specie}`);
  }

  greetings() {
    console.log(`Hola soy ${this.#name}`);
  }
}

export class Alumni extends Person {
  constructor(name, course) {
    super(name);
    this.course = course;
  }

  greetings() {
    super.greetings();
    console.log(`Y estudio ${this.course}`);
  }
}

export const x = 12;

const p1 = new Person('Pepe');
p1.height = 180;
p1.legs = 1;
p1._name;
console.log(p1);
p1.greetings();

const p2 = new Person('Elena');
console.log(p2);
p2.greetings();

const a1 = new Alumni('Ernesto', 'JS');
console.log(a1);
a1.greetings();
// console.log(Person.#specie);
// Person.showSpecie();
Alumni.showSpecie();

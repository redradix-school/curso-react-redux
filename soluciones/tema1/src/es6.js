//Ejercicios ES6 / ES2015

//1. const
const x = 1;

// throws "x is read-only" in webpack / babel console
//x = 2;

//2. object destructuring
console.group('Object destructuring');
const data = {
  name: 'John',
  lastName: 'Doe',
  age: 31
}

// destructurar el objeto en variables individuales
const { name, lastName, age } = data;
console.log('data', name, lastName, age);

//destructurar objetos en parámetros de función
//con valores por defecto
function destructFn({ number, string = '', array = []}){
  console.log(number, string, array);
}
destructFn({
  number: 1,
  string: 'foo',
  array: [1,2]
})

//valores por defecto
destructFn({
  number: 2
})
console.groupEnd();

//3. arrow functions
console.group('Arrow functions');

setTimeout(() => console.log('boo!'), 10)
// return implicito si es una expresión
// para un solo argumento no hacen falta paréntesis
const masUno = x => x+1
console.log('masUno 2', masUno(2));
//si es un bloque, tenemos que usar return
const masDos = x => {
  return x + 2;
}
console.log('masDos 2', masDos(2));

console.groupEnd();

//4. Array map, reduce, filter...
// muy cómodo con Arrow functions

console.group('Array functions');
const array = [1,2,3,4]
console.log('Original Array', array);
console.log('Map x10', array.map(x => x*10));
console.log('Reduce +', array.reduce((acc,x) => acc + x, 0));
console.log('Filter pares', array.filter(x => x % 2 === 0));
console.log('Array.isArray', Array.isArray(array));
console.groupEnd();

//5. spread operator (Stage-0 necesario en .babelrc)
console.group('Spread operator - Objetos');
/** Con objetos **/
const model = {
  number: 5,
  complex: {
    string: "hey",
  }
};
//como _.extend
const otherModel = { ...model, name: 'bar' };
console.log(otherModel);

//los objetos pasados por spread no son copias, es el MISMO objeto
console.log(model.complex === otherModel.complex);

//modificar objeto anidado
const third = {
  ...otherModel,
  complex: {
    ...otherModel.complex,
    date: new Date().toJSON()
  }
}
console.log(third);


console.groupEnd();

/** Con arrays **/
console.group('Spread operator - Arrays');
const collection = [1,2,3,4];
console.log([0, ...collection]);
console.log([ ...collection, 5]);

//con parámetros
function restFn(a, b, ...rest){
  console.log(a, b, ...rest);
}

restFn(1);
restFn(1, 2);
restFn(1, 2, 3, 4, 5, 6);

console.groupEnd();

//6. clases
console.group('ES6 Clases');
class Car {
  constructor(color){
    this._color = color;
  }
  move(){
    console.log('Car is moving with color ', this._color);
  }
}

const car = new Car('blue');
car.move();

class FastCar extends Car {
  constructor(color, speed){
    super(color);
    this._speed = speed;
  }
  move(){
    super.move();
    console.log('It goes really fast, at ', this._speed);
  }
}

const fastCar = new FastCar('red', 300);
fastCar.move();

console.groupEnd();

//7. String templates
console.group('String templates');
const nombre = 'Mundo';
const fecha = new Date();
const template = `Hola ${ nombre } ${ fecha }`;
console.log(template);
console.groupEnd();

//8. Module export
//named export (CommonJS -> exports.fake = ...)
export function fake(){}

//para usarla:
//import { fake } from '...'

//default export (CommonJS -> module.exports = ...)
export default fake;

//para usarla:
//import fake from '...'
// Block Scope with Let
let name = 'Craig';
{
  let name = 'Tyler';
  console.log(name);
}
console.log(name);

//////////////////////////////////////////////////////////
let name2 = 'Craig';

if (true) {
  let name2 = 'T';
  console.log(name2);
}
console.log(name2);

//////////////////////////////////////////////////////////
//  Note proto isn't cloned
const proto = { foo: 'bar' };
const result = Object.assign({}, Object.create(proto), { another: 'prop' });
console.log(result);

const createdObj = Object.create(proto);
createdObj; // ?

//////////////////////////////////////////////////////////
// Note, has own. Object rest collects only own and enumerable properties.
const person = {
  name: 'Dave',
  surname: 'Bowman',
};

const personB = Object.create(person, {
  profession: {
    value: 'Astronaut',
    enumerable: true,
  },
});

console.log(personB.hasOwnProperty('profession')); // => true
console.log(personB.hasOwnProperty('name')); // => false
console.log(personB.hasOwnProperty('surname')); // => false

//////////////////////////////////////////////////////////
let arr: (string | number)[] = [3, 'test', 1];

test('13_weakmap-1: has a WeakMap method', () => {
  const key = {name: 'Aaron'}
  const value = {twitter: '@js_dev', gplus: '+AaronFrost'}
  // Crea un nou WeakMap anomenat 'myMap'
  let myMap = new WeakMap();
  // Afegeix una nova entrada. Utilitza key com a clau i value com a valor
  myMap.set(key, value);

  expect(myMap.has(key)).toBe(true)
})

test('13_weakmap-2: should enable private members in classes', () => {
  // Si arribes fins aquí, escriu una classe amb variables membres privades utilitzant WeakMaps
  class Person {
    #name;
    #age = 0;

    constructor(name, age) {
      this.#name = name
      this.#age = age
    }

    getName() {
      return this.#name
    }

    getAge() {
      return this.#age
    }
  }

  const person = new Person('Kent C. Dodds', 26)
  expect(person._name).toBeUndefined()
  expect(person.getName()).toBe('Kent C. Dodds')
  expect(person._age).toBeUndefined()
  expect(person.getAge()).toBe(26)
})
////////////////////////////////

//////// EXTRA CREDIT ////////

// If you get this far, try adding a few more tests,
// then file a pull request to add them to the extra credit!
// Learn more here: http://kcd.im/es6-workshop-contributing

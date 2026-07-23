test('25_es2023-1: Array findLast and findLastIndex', () => {
  // Utilitza `findLast()` i `findLastIndex()` per trobar l’últim número parell i la seva posició dins de l’array.
  const array = [1, 2, 3, 4, 5]

  const lastEven = array.findLast(checkArray);
  const lastEvenIndex = array.findLastIndex(checkArray);

  function checkArray(array){
    if (array % 2 === 0)
    return true;
  }
  expect(lastEven).toBe(4)
  expect(lastEvenIndex).toBe(3)
})

test('25_es2023-2: Symbol.prototype.description', () => {
  // Crea un símbol amb una descripció i comprova que es pot accedir a través de la propietat `description`.
  const symbol = Symbol('description')

  expect(symbol.description).toBe('description')
})
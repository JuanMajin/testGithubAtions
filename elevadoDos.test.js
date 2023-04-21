const elevadoDos = require('./elevadoDos');

test('eleva a ala 2 ', () => {
  expect(elevadoDos(5)).toBe(25);
});
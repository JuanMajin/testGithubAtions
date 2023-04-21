const mult = require('./mult');

test('multiplica dos numeros', () => {
  expect(mult(5, 3)).toBe(15);
});
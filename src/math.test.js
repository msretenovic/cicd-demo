const { saberi, pomnozi } = require('./math');

test('saberi(2, 3) vraca 5', () => {
  expect(saberi(2, 3)).toBe(5);
});

test('saberi(-1, 1) vraca 0', () => {
  expect(saberi(-1, 1)).toBe(0);
});

test('pomnozi(4, 5) vraca 20', () => {
  expect(pomnozi(4, 5)).toBe(20);
});

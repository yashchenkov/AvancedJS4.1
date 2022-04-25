import healthFunc from '../healthfunc';

test('expected healthy value test', () => {
  const character = {
    name: 'Маг',
    health: 90,
  };
  const expected = 'healthy';
  const received = healthFunc(character);
  expect(received).toBe(expected);
});

test('expected wounded value test', () => {
  const character = {
    name: 'Маг',
    health: 45,
  };
  const expected = 'wounded';
  const received = healthFunc(character);
  expect(received).toBe(expected);
});

test('expected critical value test', () => {
  const character = {
    name: 'Маг',
    health: 10,
  };
  const expected = 'critical';
  const received = healthFunc(character);
  expect(received).toBe(expected);
});

const sum = require('./customFunction');

test('my custom', () => {
  expect(sum(2, 4)).toBe(3);
});
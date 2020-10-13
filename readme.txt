In order to run test please:
1. click on the CUBE on the left and install JEST
2. create a function file FILENAME.js with a function as follows:

function sum(a, b) {
  return a + b;
}
module.exports = sum;

3. create a file named FILENAME.test.js as follows:

const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

4. create a file named .replit as follows:

language="nodejs"
run="jest"

this overrides the RUN of the REPL; if u want to start with the index change it as follows:

language="nodejs"
run="node index.js"
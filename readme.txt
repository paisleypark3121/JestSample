template
--------
When starting a new application, creating the empty index.js file, it will b asked 2 use some default templates, 4 example:

const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('server started');
});

once pressing the "run" button it will b installed what's needed and the generation of the package.json file
Please note that if u want 2 "deploy" the application in2 an on-line service it is necessary 2 add the script:
"start": "node index.js"
otherwise the application won't start. This is not needed when running on repl.it because by default it will be launched the index.js file

////////////////////////////

.replit
-------
In case u want 2 interact with "language" console commands u need 2 add a file named ".replit" specifyng at least the language, for example:
language="nodejs"

Specifying this language the prompt command will accept "node" commands and it will be possible 2 interact for example with the scripts defined in the "package.json" file
In this scenario we could type:
npm index.js -> this will start the application via index.js
In case we want 2 start with another file we could type:
npm otherfile.js

Adding in the .replit file the "run" command it is possible to associate 2 the "run" button in repl.it the command that u want 2 launch, 4 example:
run="node index.js"
will allow to associate the run of the index.js file once pressed the run button; specifyng:
run="jest"
it will b possible to launch the "test" associated to the application

////////////////////////////

packages
--------
In order to install packages it is possible 2 click on the CUBE on the left and install needed packages (4 example JEST)

////////////////////////////

package.json
------------
The most important section is the "script". We could associate 2 different commands:
"scripts": {
    "start": "node index.js",
    "test": "jest"
  },
in this case we could type in the console:
npm start -> this starts the application via index.js
npm test -> this launch the tests through jest

////////////////////////////

test example with jest
----------------------

FILE: sum.js

function sum(a, b) {
  return a + b;
}
module.exports = sum;

FILE: sum.test.js

const sum = require('./sum');
test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

////////////////////////////

GITHUB CONNECTION
-----------------
Using the Version Control button on the left we could generate a GITHUB repository associated to the project

////////////////////////////

HEROKU DEPLOY
-------------

Create an heroku application, choose "deploy" with GITHUB in order to let HEROKU use the GITHUB repository
If something wrong happens it is possible 2 check the LOGS through "more" and "vie
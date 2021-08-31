Calculate total number of code lines in a specified directory.

> Currently it's written for front-end projects and only counts these files:

-  `.html`
-  `.css` - `.scss`
-  `.js` - `.jsx`
-  `.ts` - `.tsx` (except `.d.ts`)
-  `.vue`

## WIP

-  [ ] convert to cli
    -  [ ] other programming languages support 
    -  [ ] arbitrary file extensions
    -  [ ] change EOL (default: `\r\n`)
-  [ ] tests

## Intallation

-  npm

```shell
$ npm install num-of-lines
```

-  yarn

```shell
$ yarn add num-of-lines
```

## Usage
```js
// ~/project/nol.js
const calculateNumOfLines = require('num-of-lines');

calculateNumOfLines(__dirname, true);

// logs the result into stdout (window example):
// File C:\Users\<user>\project\index.js: 47
//
// Total number of lines for html/css/js files
// C:\Users\<user>\project: 47
```

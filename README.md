# num-of-lines
[![npm version](https://badgen.net/npm/v/num-of-lines)](https://npmjs.com/package/num-of-lines)
[![minified size](https://badgen.net/bundlephobia/min/num-of-lines)](https://bundlephobia.com/package/num-of-lines)
[![dependency count](https://badgen.net/bundlephobia/dependency-count/num-of-lines)](https://bundlephobia.com/package/num-of-lines)

Calculate total number of code lines in a specified directory.

> Currently it's written for front-end projects and only counts these files:

-  `.html`
-  `.css` - `.scss`
-  `.js` - `.jsx`
-  `.ts` - `.tsx` (except `.d.ts`)
-  `.vue`

## WIP

-  [x] convert to cli
-  [ ] other programming languages support 
-  [ ] arbitrary file extensions
-  [ ] change EOL (default: `\r\n`)
-  [x] automatically find ignore paths using closes `.gitignore`
-  [ ] tests

## Usage
1. install
```bash
$ npm install -g num-of-lines
# or via yarn
$ yarn global add num-of-lines
```
2. use it in your project path
```bash
~/$ cd <project-path> 
~/<project-path>$ num-of-lines
```
Or just use it with `npx`
```bash
~/<project-path>$ npx num-of-lines
```

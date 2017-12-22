# project-euler
Personal solutions

## Install

```
npm install
npm install -g babel-cli
which babel-cli
```

The remaining installation instructions assume you're using PhpStorm as your IDE.

Follow these steps (from [this page](https://babeljs.io/docs/setup#installation)):

> In **Preferences - Tools - File watchers**, click + button and select Babel file watcher from the list.
>
> Specify the path to Babel executable and click Ok.
>
> By default all files with a `.js` extension will be automatically compiled with Babel upon change. The generated ES5
> files and source maps will be saved next to original files.
>
> Lastly, in **Languages & Frameworks - JavaScript - JavaScript** language version, choose ECMAScript 6.

Use these arguments: `src --out-dir dist --source-maps --presets env`

Add a run/debug configuration:

Type: NPM \
Name: Test \
Command: test

After adding the configuration, you can test with Ctrl-R.

Mark `dist` and `node_modules` as "Excluded" to prevent them from showing up in search results, refactor operations, etc.

## Run tests

```
ctrl+r
npm test
npm run-script watch
```

## Run exercises

```
node dist/exercises/hello-world.js
```

## Notes

- https://davidwalsh.name/nodejs-arguments-yargs
- https://github.com/yargs/yargs
- https://projecteuler.net/
- A GENTLE INTRODUCTION TO FUNCTIONAL JAVASCRIPT
  - [Part 1: Building blocks and motivation](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-intro/)
  - [Part 2: Working with Arrays and Lists](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-arrays/)
  - [Part 3: Functions for making functions](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-functions/)
  - [Part 4: Doing it with style](https://jrsinclair.com/articles/2016/gentle-introduction-to-functional-javascript-style/)

### Problem 3

- [Understanding recursion in functional JavaScript programming](http://www.integralist.co.uk/posts/functional-recursive-javascript-programming/) -
Includes explanations of techniques to avoid stack overflows, such as queues and trampolining

### Problem 4

- [Ten ways to reverse a string in JavaScript](http://eddmann.com/posts/ten-ways-to-reverse-a-string-in-javascript/)

### Problem 5

- [An introduction to functional programming in JavaScript](https://opensource.com/article/17/6/functional-javascript)
- [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [Problem 5 thread](https://projecteuler.net/thread=5)

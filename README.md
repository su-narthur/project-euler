# project-euler
Personal solutions

## Install

```
npm install
npm install -g babel-cli
which babel-cli
```

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

https://davidwalsh.name/nodejs-arguments-yargs
https://github.com/yargs/yargs
https://projecteuler.net/
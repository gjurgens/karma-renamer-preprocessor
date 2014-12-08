# karma-renamer-preprocessor

> A Karma plugin. Rename served files on the fly.

## Installation

```bash
npm install karma-renamer-preprocessor --save-dev
```

## Configuration
### Simple configuration

> You just need to declare what files should be renamed

```js
// karma.conf.js
module.exports = function(config) {
  config.set({
    preprocessors: {
      '**/*.js': ['renamer']
    },
    renamerPreprocessor: {
      // transforming the filenames
      transformPath: function(path) {
        return path.replace(/\.js$/, '.sufix.js');
      }
    }
  });
};
```
----

For more information on Karma see the [homepage].


[homepage]: http://karma-runner.github.com

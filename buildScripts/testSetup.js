// This file isn't transpiled, so must use CommonJS (aka `require(..)`) and ES5

// Register babel to transpile before the tests run
require('babel-register')();

// Disable Webpack features that Mocha doesn't understand (eg `import './index.css';`)
require.extensions['.css'] = function() {};

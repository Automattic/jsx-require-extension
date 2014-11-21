# jsx-require-extension

[![Build Status](https://travis-ci.org/Automattic/jsx-require-extension.svg)](https://travis-ci.org/Automattic/jsx-require-extension)
[![NPM version](https://badge.fury.io/js/jsx-require-extension.svg)](http://badge.fury.io/js/jsx-require-extension)

A simple node module to register a `require.extensions` loader for JSX files. For more information about JSX, visit Facebook's [JSX Specification](http://facebook.github.io/jsx/).

## Usage

By simply requiring _jsx-require-extension_, you can immediately require JSX files.

```js
require( 'jsx-require-extension' );
require( './my-react-component.jsx' );
```

This module is intended to be used directly in other modules without need for a setup process. For example, you can use it as a Mocha compiler through Mocha's `--compilers` flag:

```bash
$ mocha --compilers jsx:jsx-require-extension
```

Lastly, if you want to pass flags, you can instead require the corresponding file found in the `options` directory:

```js
require( 'jsx-require-extension/options/harmony' );
```

## Versioning

Use the following table to determine which version of _jsx-require-extension_ works with your version of React.

| React | jsx-require-extension |
|-------|-----------------------|
| 0.1.x - 0.11.x | 0.1 |

## License

Copyright (c) 2014 Automattic, Inc.

Released under the [MIT License](LICENSE.md).
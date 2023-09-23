<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Function Name

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Determine a function's name.



<section class="usage">

## Usage

```javascript
import functionName from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-function-name@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/utils-function-name/tags). For example,

```javascript
import functionName from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-function-name@v0.1.0-esm/index.mjs';
```

#### functionName( fcn )

Returns the name of a `function`.

<!-- eslint-disable stdlib/no-builtin-math -->

```javascript
var v = functionName( Math.sqrt );
// returns 'sqrt'
```

If provided an **anonymous** `function`, the function returns an empty `string` or the string `"anonymous"`.

<!-- eslint-disable no-empty-function, func-names, no-restricted-syntax -->

```javascript
var v = functionName( function () {} );
// returns '' || 'anonymous'
```

If provided a value which is not a `function`, the function **throws** a `TypeError`.

```javascript
try {
    functionName( 'beep' );
    // throws error...
} catch ( err ) {
    console.error( err );
}
```

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   For more information regarding the naming of anonymous functions, see

    -   [Function Names in ES6][2ality-function-names]
    -   Webkit bug [7726][webkit-bug-7726]
    -   [MDN][mdn-function-name]

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint-disable no-empty-function, no-restricted-syntax, func-names, stdlib/no-builtin-math -->

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import Float64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-float64@esm/index.mjs';
import Buffer from 'https://cdn.jsdelivr.net/gh/stdlib-js/buffer-ctor@esm/index.mjs';
import Number from 'https://cdn.jsdelivr.net/gh/stdlib-js/number-ctor@esm/index.mjs';
import functionName from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-function-name@esm/index.mjs';

var v = functionName( Math.sqrt );
// returns 'sqrt'

v = functionName( Float64Array );
// returns 'Float64Array'

v = functionName( Buffer );
// returns 'Buffer'

v = functionName( Date );
// returns 'Date'

v = functionName( String );
// returns 'String'

v = functionName( Boolean );
// returns 'Boolean'

v = functionName( Function );
// returns 'Function'

v = functionName( Number );
// returns 'Number'

v = functionName( function foo() {} );
// returns 'foo'

v = functionName( function () {} );
// returns '' || 'anonymous'

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-constructor-name`][@stdlib/utils/constructor-name]</span><span class="delimiter">: </span><span class="description">determine the name of a value's constructor.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-function-name.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-function-name

[test-image]: https://github.com/stdlib-js/utils-function-name/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/utils-function-name/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-function-name/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-function-name?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-function-name.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-function-name/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-function-name/tree/deno
[umd-url]: https://github.com/stdlib-js/utils-function-name/tree/umd
[esm-url]: https://github.com/stdlib-js/utils-function-name/tree/esm
[branches-url]: https://github.com/stdlib-js/utils-function-name/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-function-name/main/LICENSE

[2ality-function-names]: http://www.2ality.com/2015/09/function-names-es6.html

[webkit-bug-7726]: https://bugs.webkit.org/show_bug.cgi?id=7726

[mdn-function-name]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/name

<!-- <related-links> -->

[@stdlib/utils/constructor-name]: https://github.com/stdlib-js/utils-constructor-name/tree/esm

<!-- </related-links> -->

</section>

<!-- /.links -->

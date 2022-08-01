/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

/* eslint-disable no-empty-function, no-restricted-syntax, func-names */

'use strict';

var Float64Array = require( '@stdlib/array-float64' );
var Buffer = require( '@stdlib/buffer-ctor' );
var Number = require( '@stdlib/number-ctor' );
var functionName = require( './../lib' );

console.log( functionName( Math.sqrt ) ); // eslint-disable-line stdlib/no-builtin-math
// => 'sqrt'

console.log( functionName( Float64Array ) );
// => 'Float64Array'

console.log( functionName( Buffer ) );
// => 'Buffer'

console.log( functionName( Date ) );
// => 'Date'

console.log( functionName( String ) );
// => 'String'

console.log( functionName( Boolean ) );
// => 'Boolean'

console.log( functionName( Function ) );
// => 'Function'

console.log( functionName( Number ) );
// => 'Number'

console.log( functionName( function foo() {} ) );
// => 'foo'

console.log( functionName( function () {} ) );
// => '' || 'anonymous'

// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-function-name-support@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/regexp-function-name@esm/index.mjs";var r=t,i=s,m=e,o=n.REGEXP,d=i();var a=function(t){if(!1===r(t))throw new TypeError(m("invalid argument. Must provide a function. Value: `%s`.",t));return d?t.name:o.exec(t.toString())[1]};export{a as default};
//# sourceMappingURL=index.mjs.map

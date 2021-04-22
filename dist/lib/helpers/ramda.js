"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.recursiveMapValues = void 0;
var R = require("ramda");
/**
 * Takes a function and a functor, applies the function to each of the functor's
 * values recursively, and returns a functor of the same shape. Must be written
 * as arrow `x => recursiveMapValues(x)` due to recursion.
 *
 * recursiveMapValues :: (String → String) → Object → Object
 */
exports.recursiveMapValues = R.curry(function (fn, obj) {
    return R.ifElse(R.is(Object), R.map(function (x) { return exports.recursiveMapValues(fn, x); }), fn)(obj);
});
//# sourceMappingURL=ramda.js.map
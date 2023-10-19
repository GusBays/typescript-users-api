"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toSnakeCase = exports.last = exports.first = exports.isNotEmpty = exports.isEmpty = exports.isUndefined = exports.isNull = exports.not = void 0;
function not(value) {
    return !value;
}
exports.not = not;
function isNull(value) {
    return value === null;
}
exports.isNull = isNull;
function isUndefined(value) {
    return value === undefined;
}
exports.isUndefined = isUndefined;
function isEmpty(value) {
    if (Array.isArray(value))
        return value.length === 0;
    if (value instanceof Object)
        return Object.keys(value).length === 0;
    return isNull(value) || isUndefined(value);
}
exports.isEmpty = isEmpty;
function isNotEmpty(value) {
    return not(isEmpty(value));
}
exports.isNotEmpty = isNotEmpty;
function first(items) {
    return items[0];
}
exports.first = first;
function last(values) {
    return values[values.length - 1];
}
exports.last = last;
function toSnakeCase(text) {
    return text.replace(' ', '_').toLowerCase();
}
exports.toSnakeCase = toSnakeCase;
//# sourceMappingURL=Helper.js.map
"use strict";
exports.__esModule = true;
var NewPerson = /** @class */ (function () {
    function NewPerson(init) {
        Object.assign(this, init);
    }
    return NewPerson;
}());
exports["default"] = NewPerson;
var obj = { name: "takashi", age: 70 };
var takasi = new NewPerson(obj);
console.log(takasi);

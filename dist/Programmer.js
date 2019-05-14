"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var NewPerson_1 = require("./NewPerson");
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(init) {
        var _this = _super.call(this) || this;
        Object.assign(_this, init);
        return _this;
    }
    return Programmer;
}(NewPerson_1["default"]));
exports["default"] = Programmer;
var obje = {
    name: "hoge",
    age: 90,
    salary: 200,
    skills: [
        { lang: "javascript", rate: 5 },
        { lang: "ruby", rate: 1 }
    ]
};
var hoge = new Programmer(obje);
console.log(hoge.skills[0].lang);

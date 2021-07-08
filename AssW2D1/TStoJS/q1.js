"use strict";
var University = /** @class */ (function () {
    function University(name, dept) {
        this.name = name;
        this.dept = dept;
    }
    University.prototype.graduation = function (year) {
        console.log("graduation " + this.dept + " " + year + " students");
    };
    return University;
}());
var miu = new University("MIU", "Computer Science");
miu.graduation(2019);

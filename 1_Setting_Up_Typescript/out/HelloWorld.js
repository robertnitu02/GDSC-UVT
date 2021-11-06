"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function hello(string) {
    console.log("Hello " + string + "!");
}
hello("World");
hello("Roho");
hello("Mentosan");
function printName(stark) {
    console.log(stark.name);
}
printName({ name: "Ana" });
// printName({prenume: "Cameliu"});
const Point_1 = require("./Point");
const Point3D_1 = require("./Point3D");
var point = new Point_1.Point(69, 69);
var point2 = new Point_1.Point();
console.log(point);
point.printPoint();
point2.printPoint();
var point3D = new Point3D_1.Point3D(1, 1, 2); // [super] new Point(1, 1) + z = 2
point3D.printPoint();
var points = [new Point_1.Point(1, 1), new Point3D_1.Point3D(2, 3, 5), new Point_1.Point(8, 13)];
points.forEach(point => {
    console.log("* Point from forEach");
    point.printPoint();
});

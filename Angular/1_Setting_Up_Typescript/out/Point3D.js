"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point3D = void 0;
const Point_1 = require("./Point");
class Point3D extends Point_1.Point {
    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }
    printPoint() {
        console.log("Point coordonates =  X: " + this.x + ", Y: " + this.y + ", Z: " + this.z);
    }
}
exports.Point3D = Point3D;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
class Point {
    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }
    printPoint() {
        console.log("Point coordonates =  X: " + this.x + ", Y: " + this.y);
    }
}
exports.Point = Point;

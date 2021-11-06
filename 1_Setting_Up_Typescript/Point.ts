import { PrintableClass } from "./PrintableClass";

export class Point implements PrintableClass {
    x: number;
    y: number;

    constructor(x = 0, y = 0) {
        this.x = x;
        this.y = y;
    }

    printPoint(): void {
        console.log("Point coordonates =  X: " + this.x + ", Y: " + this.y);
    }
}
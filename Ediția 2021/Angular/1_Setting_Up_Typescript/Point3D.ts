import { Point } from "./Point";

export class Point3D extends Point {
    z: number;

    constructor(x = 0, y = 0, z = 0) {
        super(x, y);
        this.z = z;
    }

    printPoint(): void {
        console.log("Point coordonates =  X: " + this.x + ", Y: " + this.y + ", Z: " + this.z);
    }
}
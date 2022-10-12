import { Point } from "./Point";
import { Point3D } from "./Point3D";

var point = new Point(69, 69);
var point2 = new Point();

console.log(point);
point.printPoint();
point2.printPoint();

var point3D = new Point3D(1, 1, 2); // [super] new Point(1, 1) + z = 2
point3D.printPoint();

var points = [new Point(1, 1), new Point3D(2, 3, 5), new Point(8, 13)];
points.forEach(point => {
    console.log("* Point from forEach");
    point.printPoint();
});
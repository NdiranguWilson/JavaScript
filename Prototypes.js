/**
 * Cytonn Technologies
 * @author Ndirangu wilson <wndirangu@Cytonn.com>
 *
 */

 var Circle = function(radius) {
  this.radius = radius;

}

//augment Circle's default prototype property thereby augmenting the prototype of each generated instance
Circle.prototype.area = function() {
  return Math.PI * this.radius * this.radius;
}

//creating an  instance of a circle leveranging  common prototype
var a = new Circle(3);
 console.log(a.area().toFixed(2));

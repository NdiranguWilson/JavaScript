/**
 * Cytonn Technologies
 * @author Ndirangu wilson <wndirangu@Cytonn.com>
 *
 */

 var Person = function(age) {
  this.years = age;

}

//augment Person's default prototype property thereby augmenting the prototype of each generated instance
Person.prototype.age = function() {
  return this.years;
}

//creating an  instance of a Person leveranging  common prototype
var a = new Person(3);
 console.log(a.age());

"use strict";
/**
 * Cytonn Technologies
 * @author Ndirangu wilson <wndirangu@cytonn.com>
 */

function Area() {
  var length = 20; // private property
  this.width = 10; // public property

  // private method
  function areaMethod() {
    return length; // cannot read property this.width;
  }

  // public method can access both
  // public and private members
  this.meth2 = function() {
    return this.width + ", " + areaMethod();
  };
  // public method sets private member
  this.meth4 = function(val) {
    length = val;
    return length
  }

  this.meth3 = areaMethod; // make meth1 visible via meth3
}

var area = new Area(); // create new Area object

var result1 = area.meth2();
var result2 = area.meth3();

var result3 = area.length; // undefined: length is private
// var result4 = area.meth1(); 	// erroneous: meth1() is private
console.log(result3);

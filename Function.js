/**
 * Cytonn Technologies
 * @author Ndirangu wilson <wndirangu@cytonn.com>
 *
 */

//function to get the fibonacci number at the given term
function fibonacci(term) {

  return Math.round(Math.pow((Math.sqrt(5) + 1) / 2, term) / Math.sqrt(5));

}

/**
 * function to compute the energy equivalent of the mass given
 * @param  {[float]} mass [the mass of a given substance in grams]
 * @return {[float]}      [energy equivalent of the mass in joules]
 */
function mass_energy_equivalent(mass) {
  var speed_of_light = 3.0e8;
  return mass * Math.pow(speed_of_light, 2);

}



console.log(fibonacci(2));
console.log(mass_energy_equivalent(0.5));

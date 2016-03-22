/**
 *
 * Cytonn Technologies
 * @author Ndirangu wilson <wndirangu@Cytonn.com>
 */

function power(voltage, current) {
  /**
   * [realPower returns the real power calculation with a given power factor]
   * @param  {[float]} angle [power factor angle]
   * @return {[float]}       [real power obtain from p=vicos(theta)]
   */
  return function realPower(angle) {

    return (voltage * current * Math.cos(angle)).toFixed(4) + " Watts";

  };

}

var power = power(10, 1.42)
console.log(power(30));

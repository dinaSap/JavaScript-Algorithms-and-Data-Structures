function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
 for (let i = 0; i < arr.length; i++){
    let obj = arr[i]
  obj['orbitalPeriod'] = Math.round((2 * 3.14159265359) * Math.sqrt(((earthRadius + obj['avgAlt'])** 3)/ GM))
  delete obj['avgAlt']
 }
//console.log(arr)
  return arr;
}

/*
Intermediate Algorithm Scripting: Map the Debris
Return a new array that transforms the elements' average altitude into their orbital periods (in seconds).

The array will contain objects in the format {name: 'name', avgAlt: avgAlt}.

You can read about orbital periods on Wikipedia.

The values should be rounded to the nearest whole number. The body being orbited is Earth.

The radius of the earth is 6367.4447 kilometers, and the GM value of earth is 398600.4418 km3s-2.
*/

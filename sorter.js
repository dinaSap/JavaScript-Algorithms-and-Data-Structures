function alphabeticalOrder(arr) {
  // Only change code below this line
return arr.sort((a,b) => {return a < b ? -1 : a > b ? 1 : 0})

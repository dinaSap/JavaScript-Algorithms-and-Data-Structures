function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
 let arr1 = Object.keys(source)
for (let i = 0; i < collection.length; i++){
  let arr2 = Object.keys(collection[i])
  if (arr1.every(el => source[el] === collection[i][el])){
    arr.push(collection[i])
  }
}
console.log(arr)
  // Only change code above this line
  return arr;
}

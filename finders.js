function findElement(arr, func) {
  let newArr = arr.filter(func);
  return newArr[0];
}

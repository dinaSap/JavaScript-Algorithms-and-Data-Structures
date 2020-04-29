function dropElements(arr, func) {
  let index = arr.findIndex(func)
  if(index >= 0){
  let arr1 = arr.slice(index)
  return arr1}
  else { return []}
}

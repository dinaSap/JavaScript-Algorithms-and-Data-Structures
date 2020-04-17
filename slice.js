function frankenSplice(arr1, arr2, n) {
  let newArr = arr2.slice(0,n).concat(arr1).concat(arr2.slice(n));
  console.log(newArr);
  return newArr;

}

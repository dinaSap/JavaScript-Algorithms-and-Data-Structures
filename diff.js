function diffArray(arr1, arr2) {
  let first = arr1.filter(a => !arr2.includes(a))
  let second = arr2.filter(a => !arr1.includes(a))
  let third = first.concat(second);
 return third;
}

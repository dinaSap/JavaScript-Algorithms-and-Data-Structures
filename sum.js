function sumAll(arr) {
  let newArr = arr.sort((a,b) => a-b);
  let first = newArr[0]
  let last = newArr[1]
  let num = 0;
  while (first <= last){
     num += first;
     first++;
  }

  return num;
}

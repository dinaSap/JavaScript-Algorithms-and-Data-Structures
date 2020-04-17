function getIndexToIns(arr, num) {
  arr.push(num);
  const newArr = arr.sort((a,b)=>{return a - b});
  
  return newArr.findIndex(element => element >= num);
    
}

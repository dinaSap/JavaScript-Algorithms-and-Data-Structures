function largestOfFour(arr) {
  let newArr = [];
  let large;
  for (let i = 0; i < arr.length; i++){
     large = arr[i][0];
    for (let j = 0; j < arr[i].length; j++){
    
      if(arr[i][j] > large){
        large = arr[i][j];
      }
        }
        newArr.push(large);
    }    
  //console.log(newArr);
  return newArr;

}

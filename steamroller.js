function steamrollArray(arr) {
  let arr1 = []
const flatten = (arr) => {
  for (let i = 0; i < arr.length; i++){
    if (!Array.isArray(arr[i])){
      arr1.push(arr[i])
    } else{     
        flatten(arr[i]) 
    }
  }
}
flatten(arr)
 return arr1
}

function pairElement(str) {
  let arr = str.split('')
  let arr1 = []
  for (let i = 0; i < arr.length; i++){
    switch(arr[i]){
    case "G": arr1.push(["G", "C"])
    break;
    case "C": arr1.push(["C", "G"])
    break;
    case "G": arr1.push(["G", "C"])
    break;
    case "T": arr1.push(["T", "A"])
    break;
    case "A": arr1.push(["A", "T"])
    break;
    }
  }
  return arr1;
}

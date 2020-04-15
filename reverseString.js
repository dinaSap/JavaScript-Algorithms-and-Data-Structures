function reverseString(str) {
  let newStr = [];
  for (let i = 0; i < str.length; i++){
    newStr.unshift(str[i]);
  }
  //console.log(newStr)
  return newStr.join('');

}

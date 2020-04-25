function translatePigLatin(str) {
  let strToReturn = ""
  console.log(str[0])
  let vowel = /^[aeiou]/
  if (vowel.test(str[0])){
    strToReturn = str+"way"
    return strToReturn;
  }else{
    let newStr = str.match(/[aeiou]/)
    let index = str.indexOf(newStr)
    newStr = str.substring(0, index)
     strToReturn = str.substring(index,str.length)+newStr+"ay"
     console.log(strToReturn)
     return strToReturn;
  }
  
}

function myReplace(str, before, after) {
  let regex = /^[A-Z]/
  if (regex.test(before)){
      after = after[0].toUpperCase()+after.substring(1, after.length)
  }
  let newStr = str.replace(before, after)
  return newStr;
}

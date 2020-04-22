function spinalCase(str) {
  let newStr = str.replace(/([A-Z])/g, ' $1').replace(/_/g, '').toLowerCase().split(/\W/).filter(el => el !== '').join('-')

  return newStr;
}

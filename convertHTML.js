function convertHTML(str) {
let obj = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      "'": '&apos;',
      '"': '&quot;'
    }
    let newStr = str
    for (let i = 0; i < str.length; i++){
      if (obj.hasOwnProperty(str[i])){
    newStr = newStr.replace(str[i], obj[str[i]])
      }
    }
return newStr
}

function fearNotLetter(str) {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  let index = alphabet.indexOf(str[0])
  let sliced = alphabet.slice(index, str.length+index)
  for (let i = 0; i < str.length;i++){
    if (!str.includes(sliced[i])){
      return sliced[i]
    }
  }
}
